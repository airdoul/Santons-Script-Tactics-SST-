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
        // vérifie si le joueur est déjà en recherche
        $existingTicket = $this->entityManager->getRepository(QueueTicket::class)
            ->findOneBy(['player' => $player, 'status' => 'SEARCHING']);

        if ($existingTicket) {
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

        return $ticket;
    }

    public function cancelQueue(Player $player): bool
    {
        $ticket = $this->entityManager->getRepository(QueueTicket::class)
            ->findOneBy(['player' => $player, 'status' => 'SEARCHING']);

        if (!$ticket) {
            return false;
        }

        $ticket->setStatus('CANCELLED');
        $this->entityManager->flush();

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
        $startTime = microtime(true);
        
        $tickets = $this->entityManager->getRepository(QueueTicket::class)
            ->findBy(['status' => 'SEARCHING'], ['createdAt' => 'ASC']);

        if (count($tickets) < 2) {
            return [
                'matches_created' => 0,
                'players_waiting' => count($tickets),
                'processing_time' => microtime(true) - $startTime,
                'timestamp' => time()
            ];
        }

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
                    $match = $this->createMatch($ticket1, $ticket2);
                    $matches[] = $match;
                    
                    $processedTickets[] = $ticket1->getId();
                    $processedTickets[] = $ticket2->getId();
                    
                    break;
                }
            }
        }

        return [
            'matches_created' => count($matches),
            'players_waiting' => $this->getQueueSize(),
            'processing_time' => microtime(true) - $startTime,
            'timestamp' => time()
        ];
    }
    private function createMatch(QueueTicket $ticket1, QueueTicket $ticket2): SSTMatch
    {
        $rngSeed = rand(1000, 9999);
        
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

        // Lancer automatiquement le combat (les logs MMR sont dans CombatService)
        try {
            $this->combatService->simulateCombat($match);
        } catch (\Exception $e) {
            // Erreur silencieuse, le combat peut être relancé plus tard
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