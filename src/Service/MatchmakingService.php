<?php

namespace App\Service;

use App\Entity\Player;
use App\Entity\Team;
use App\Entity\QueueTicket;
use App\Entity\SSTMatch;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Log\LoggerInterface;
use App\Service\CombatService;

class MatchmakingService
{
    private EntityManagerInterface $entityManager;
    private LoggerInterface $logger;
    private CombatService $combatService;

    public function __construct(EntityManagerInterface $entityManager, LoggerInterface $logger, CombatService $combatService)
    {
        $this->entityManager = $entityManager;
        $this->logger = $logger;
        $this->combatService = $combatService;
    }
    

    public function joinQueue(Player $player, Team $team): QueueTicket
    {
        $this->logger->info(' [MATCHMAKING] Joueur rejoint la queue', [
            'player_id' => $player->getId(),
            'player_username' => $player->getUsername(),
            'team_name' => $team->getName(),
            'timestamp' => (new \DateTime())->format('H:i:s')
        ]);

        // vérifie si le joueur est déjà en recherche
        $existingTicket = $this->entityManager->getRepository(QueueTicket::class)
            ->findOneBy(['player' => $player, 'status' => 'SEARCHING']);

        if ($existingTicket) {
            $this->logger->warning(' [MATCHMAKING] Tentative de double inscription', [
                'player_username' => $player->getUsername(),
                'existing_ticket_id' => $existingTicket->getId()
            ]);
            throw new \Exception('Vous êtes déjà en file d\'attente');
        }

        // ajoute un nouveau ticket
        $ticket = new QueueTicket();
        $ticket->setPlayer($player);
        $ticket->setTeam($team);
        $ticket->setMmr(1000); // met le mmr par défaut
        $ticket->setStatus('SEARCHING');
        $ticket->setCreatedAt(new \DateTimeImmutable());

        $this->entityManager->persist($ticket);
        $this->entityManager->flush();

        $this->logger->info(' [MATCHMAKING] Ticket créé avec succès', [
            'ticket_id' => $ticket->getId(),
            'mmr' => $ticket->getMmr(),
            'player_username' => $player->getUsername()
        ]);

        return $ticket;
    }

    public function cancelQueue(Player $player): bool
    {
        $this->logger->info(' [MATCHMAKING] Tentative d\'annulation', [
            'player_id' => $player->getId(),
            'player_username' => $player->getUsername(),
            'timestamp' => (new \DateTime())->format('H:i:s')
        ]);

        $ticket = $this->entityManager->getRepository(QueueTicket::class)
            ->findOneBy(['player' => $player, 'status' => 'SEARCHING']);

        if (!$ticket) {
            $this->logger->warning(' [MATCHMAKING] Aucune queue active à annuler', [
                'player_username' => $player->getUsername()
            ]);
            return false;
        }

        $ticket->setStatus('CANCELLED');
        $this->entityManager->flush();

        $this->logger->info(' [MATCHMAKING] Queue annulée avec succès', [
            'ticket_id' => $ticket->getId(),
            'player_username' => $player->getUsername()
        ]);

        return true;
    }

    // récupère le status du joueur
    public function getPlayerStatus(Player $player): ?array
    {
        // Vérifier d'abord si le joueur a un match terminé récemment NON VISUALISÉ
        $recentMatch = $this->entityManager->getRepository(SSTMatch::class)
            ->createQueryBuilder('m')
            ->leftJoin('m.teamA', 'ta')
            ->leftJoin('m.teamB', 'tb')
            ->where('(ta.player = :player OR tb.player = :player)')
            ->andWhere('m.status = :status')
            ->andWhere('m.finishedAt > :recentTime')
            ->andWhere('m.combatViewed = :viewed')  // Seulement les matches non visualisés
            ->setParameter('player', $player)
            ->setParameter('status', 'FINISHED')
            ->setParameter('recentTime', new \DateTime('-1 minute'))
            ->setParameter('viewed', false)
            ->orderBy('m.finishedAt', 'DESC')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();

        if ($recentMatch) {
            $isPlayerTeamA = $recentMatch->getTeamA()->getPlayer() === $player;
            $playerTeam = $isPlayerTeamA ? $recentMatch->getTeamA() : $recentMatch->getTeamB();
            $isWinner = $recentMatch->getWinnerTeam() === $playerTeam;
            
            return [
                'status' => 'MATCH_RESULT_PENDING',  // Nouveau statut pour indiquer qu'il faut voir le combat
                'match_id' => $recentMatch->getId(),
                'winner_team_id' => $recentMatch->getWinnerTeam() ? $recentMatch->getWinnerTeam()->getId() : null,
                'is_winner' => $isWinner,
                'team1_power' => $isPlayerTeamA ? $recentMatch->getTeamAPower() : $recentMatch->getTeamBPower(),
                'team2_power' => $isPlayerTeamA ? $recentMatch->getTeamBPower() : $recentMatch->getTeamAPower(),
                'duration' => 'Quelques instants',
                'match' => [
                    'id' => $recentMatch->getId(),
                    'match_id' => $recentMatch->getId()
                ]
            ];
        }

        $ticket = $this->entityManager->getRepository(QueueTicket::class)
            ->findOneBy(['player' => $player, 'status' => 'SEARCHING']);

        if (!$ticket) {
            return null;
        }

        $waitingTime = (new \DateTime())->getTimestamp() - $ticket->getCreatedAt()->getTimestamp();
        
        $this->logger->debug(' [MATCHMAKING] Status demandé', [
            'player_username' => $player->getUsername(),
            'waiting_time' => $waitingTime,
            'mmr' => $ticket->getMmr()
        ]);

        return [
            'status' => 'SEARCHING',
            'mmr' => $ticket->getMmr(),
            'waiting_time' => $waitingTime,
            'team' => $ticket->getTeam()->getName(),
            'ticket_id' => $ticket->getId()
        ];
    }

    public function getQueueSize(): int
    {
        return $this->entityManager
            ->getRepository(QueueTicket::class)
            ->count(['status' => 'SEARCHING']);
    }

    public function processQueue(): array
    {
        $startTime = microtime(true); // AJOUTER CETTE LIGNE
        
        $tickets = $this->entityManager->getRepository(QueueTicket::class)
            ->findBy(['status' => 'SEARCHING'], ['createdAt' => 'ASC']);

        $this->logger->info(' [MATCHMAKING] Début du traitement de la queue', [
            'tickets_count' => count($tickets),
            'timestamp' => (new \DateTime())->format('H:i:s')
        ]);

        if (count($tickets) === 0) {
            $this->logger->info(' [MATCHMAKING] Aucun ticket en attente');
            return [
                'matches_created' => 0,
                'players_waiting' => 0,
                'processing_time' => microtime(true) - $startTime,
                'timestamp' => time()
            ];
        }

        if (count($tickets) === 1) {
            $this->logger->info(' [MATCHMAKING] Un seul joueur en attente', [
                'player' => $tickets[0]->getPlayer()->getUsername(),
                'waiting_since' => $tickets[0]->getCreatedAt()->format('H:i:s')
            ]);
            return [
                'matches_created' => 0,
                'players_waiting' => 1,
                'processing_time' => microtime(true) - $startTime,
                'timestamp' => time()
            ];
        }

        $this->logger->info(' [MATCHMAKING] Recherche de matchs compatibles...', [
            'candidates' => count($tickets)
        ]);

        $matches = [];
        $processedTickets = [];

        for ($i = 0; $i < count($tickets) - 1; $i++) {
            $ticket1 = $tickets[$i];
            
            if (in_array($ticket1->getId(), $processedTickets)) {
                continue;
            }

            for ($j = $i + 1; $j < count($tickets); $j++) {
                $ticket2 = $tickets[$j];
                
                if (in_array($ticket2->getId(), $processedTickets)) {
                    continue;
                }

                $mmrDiff = abs($ticket1->getMmr() - $ticket2->getMmr());

                if ($mmrDiff <= 200) {
                    $this->logger->info(' [MATCHMAKING] Match compatible trouvé !', [
                        'player1' => $ticket1->getPlayer()->getUsername(),
                        'player2' => $ticket2->getPlayer()->getUsername(),
                        'mmr_diff' => $mmrDiff
                    ]);

                    $match = $this->createMatch($ticket1, $ticket2);
                    $matches[] = $match;
                    
                    $processedTickets[] = $ticket1->getId();
                    $processedTickets[] = $ticket2->getId();
                    
                    break;
                } else {
                    $this->logger->debug(' [MATCHMAKING] MMR incompatible', [
                        'required_max' => 200,
                        'actual_diff' => $mmrDiff,
                        'player1' => $ticket1->getPlayer()->getUsername(),
                        'player2' => $ticket2->getPlayer()->getUsername()
                    ]);
                }
            }
        }

        $matchesCreated = count($matches); // AJOUTER CETTE LIGNE

        $this->logger->info(' [MATCHMAKING] Traitement terminé', [
            'matches_created' => $matchesCreated,
            'tickets_processed' => count($processedTickets),
            'tickets_remaining' => count($tickets) - count($processedTickets),
            'timestamp' => (new \DateTime())->format('H:i:s')
        ]);

        return [
            'matches_created' => $matchesCreated,
            'players_waiting' => $this->getQueueSize(),
            'processing_time' => microtime(true) - $startTime,
            'timestamp' => time()
        ];
    }
    private function createMatch(QueueTicket $ticket1, QueueTicket $ticket2): SSTMatch
    {
        $rngSeed = rand(1000, 9999);
        
        $this->logger->info('🎮 [MATCHMAKING] Création d\'un nouveau match', [
            'team_a' => $ticket1->getTeam()->getName(),
            'team_b' => $ticket2->getTeam()->getName(),
            'rng_seed' => $rngSeed,
            'player_a' => $ticket1->getPlayer()->getUsername(),
            'player_b' => $ticket2->getPlayer()->getUsername()
        ]);

        $match = new SSTMatch();
        $match->setTeamA($ticket1->getTeam());
        $match->setTeamB($ticket2->getTeam());
        $match->setStatus('QUEUED');
        $match->setRngSeed($rngSeed);

        $this->entityManager->persist($match);

        // Mettre à jour les tickets
        $ticket1->setStatus('MATCHED');
        $ticket2->setStatus('MATCHED');

        $this->entityManager->flush();

        $this->logger->info('✅ [MATCHMAKING] Match créé avec succès', [
            'match_id' => $match->getId(),
            'rng_seed' => $match->getRngSeed(),
            'status' => $match->getStatus()
        ]);

        // 🔥 NOUVEAU : Lancer automatiquement le combat
        $this->logger->info('⚔️ [MATCHMAKING] Lancement automatique du combat');
        try {
            $this->combatService->simulateCombat($match);
            $this->logger->info('🏆 [MATCHMAKING] Combat terminé avec succès');
        } catch (\Exception $e) {
            $this->logger->error('❌ [MATCHMAKING] Erreur pendant le combat', [
                'error' => $e->getMessage(),
                'match_id' => $match->getId()
            ]);
        }

        return $match;
    }

    /**
     * Marque un match comme visualisé par un joueur
     */
    public function markCombatAsViewed(int $matchId): void
    {
        $match = $this->entityManager->getRepository(SSTMatch::class)->find($matchId);
        
        if ($match && !$match->isCombatViewed()) {
            $match->setCombatViewed(true);
            $this->entityManager->flush();
            
            $this->logger->info('👁️ [MATCHMAKING] Combat marqué comme visualisé', [
                'match_id' => $matchId
            ]);
        }
    }
}