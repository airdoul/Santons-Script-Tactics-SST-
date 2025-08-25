<?php

namespace App\Controller;

use App\Entity\Team;
use App\Entity\Player;
use App\Entity\SSTMatch;
use App\Entity\QueueTicket;
use App\Entity\CharacterInstance;
use App\Entity\CharacterTemplate;
use App\Repository\TeamRepository;
use App\Service\MatchmakingService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/api/matchmaking')]
#[IsGranted('ROLE_USER')]
class MatchmakingController extends AbstractController
{
    private MatchmakingService $matchmakingService;
    private EntityManagerInterface $entityManager;

    public function __construct(MatchmakingService $matchmakingService, EntityManagerInterface $entityManager)
    {
        $this->matchmakingService = $matchmakingService;
        $this->entityManager = $entityManager;
    }

    private function getCurrentPlayer(): Player
    {
        $user = $this->getUser();
        if (!$user instanceof Player) {
            throw new \LogicException('L\'utilisateur connecté n\'est pas une instance de Player');
        }
        return $user;
    }

    #[Route('/join', name: 'matchmaking_join', methods: ['POST'])]
    public function joinQueue(Request $request, TeamRepository $teamRepository): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $teamId = $data['team_id'] ?? null;

        if (!$teamId) {
            return $this->json(['error' => 'Team ID requis'], 400);
        }

        $team = $teamRepository->find($teamId);
        $currentPlayer = $this->getCurrentPlayer();
        
        if (!$team || $team->getPlayer() !== $currentPlayer) {
            return $this->json(['error' => 'Équipe non trouvée ou non autorisée'], 404);
        }

        try {
            $ticket = $this->matchmakingService->joinQueue($currentPlayer, $team);
            
            return $this->json([
                'success' => true,
                'message' => 'Ajouté à la file d\'attente',
                'ticket_id' => $ticket->getId(),
                'debug' => [
                    'queue_size_after' => count($this->entityManager->getRepository(QueueTicket::class)->findBy(['status' => 'SEARCHING'])),
                    'team_name' => $team->getName(),
                    'mmr' => $ticket->getMmr()
                ]
            ]);
        } catch (\Exception $e) {
            return $this->json(['error' => $e->getMessage()], 400);
        }
    }

    #[Route('/cancel', name: 'matchmaking_cancel', methods: ['POST'])]
    public function cancelQueue(): JsonResponse
    {
        $currentPlayer = $this->getCurrentPlayer();
        $success = $this->matchmakingService->cancelQueue($currentPlayer);
        
        if ($success) {
            return $this->json([
                'success' => true, 
                'message' => 'Recherche annulée',
                'debug' => [
                    'queue_size_after' => count($this->entityManager->getRepository(QueueTicket::class)->findBy(['status' => 'SEARCHING']))
                ]
            ]);
        }
        
        return $this->json(['error' => 'Aucune recherche en cours'], 400);
    }

    #[Route('/status', name: 'matchmaking_status', methods: ['GET'])]
    public function getStatus(): JsonResponse
    {
        $currentPlayer = $this->getCurrentPlayer();
        $status = $this->matchmakingService->getPlayerStatus($currentPlayer);
        
        if ($status) {
            return $this->json($status);
        }
        
        return $this->json(['status' => 'NOT_IN_QUEUE']);
    }

    #[Route('/process', name: 'matchmaking_process', methods: ['POST'])]
    public function processQueue(): JsonResponse
    {
        // route call par la commande
        $matches = $this->matchmakingService->processQueue();
        
        return $this->json([
            'matches_created' => count($matches),
            'message' => sprintf('%d nouveaux matchs créés', count($matches))
        ]);
    }

    #[Route('/debug', name: 'matchmaking_debug', methods: ['GET'])]
    public function getDebugInfo(): JsonResponse
    {
        try {
            $currentPlayer = $this->getCurrentPlayer();
            
            // récupère les ticket en attente
            $queueTickets = $this->entityManager->getRepository(QueueTicket::class)
                ->findBy(['status' => 'SEARCHING'], ['createdAt' => 'ASC']);
            
            // récupère les match récent
            $recentMatches = $this->entityManager->getRepository(SSTMatch::class)
                ->findBy([], ['id' => 'DESC'], 5);

            $debugData = [
                'timestamp' => (new \DateTime())->format('H:i:s'),
                'queue_count' => count($queueTickets),
                'queue_tickets' => array_map(function($ticket) {
                    $waitingTime = (new \DateTime())->getTimestamp() - $ticket->getCreatedAt()->getTimestamp();
                    return [
                        'id' => $ticket->getId(),
                        'player' => $ticket->getPlayer()->getUsername(),
                        'team' => $ticket->getTeam()->getName(),
                        'status' => $ticket->getStatus(),
                        'mmr' => $ticket->getMmr(),
                        'waiting_time' => $waitingTime . 's',
                        'created_at' => $ticket->getCreatedAt()->format('H:i:s')
                    ];
                }, $queueTickets),
                'recent_matches' => array_map(function($match) {
                    return [
                        'id' => $match->getId(),
                        'team_a' => $match->getTeamA()->getName(),
                        'team_b' => $match->getTeamB()->getName(),
                        'status' => $match->getStatus(),
                        'rng_seed' => $match->getRngSeed()
                    ];
                }, $recentMatches),
                'system_info' => [
                    'current_user' => $currentPlayer->getUsername(),
                    'current_user_id' => $currentPlayer->getId(),
                    'current_user_email' => $currentPlayer->getEmail(),
                    'total_players' => count($this->entityManager->getRepository(Player::class)->findAll()),
                    'total_matches' => count($this->entityManager->getRepository(SSTMatch::class)->findAll())
                ]
            ];

            return $this->json($debugData);
            
        } catch (\Exception $e) {
            return $this->json([
                'error' => 'Erreur lors de la récupération des données de debug',
                'message' => $e->getMessage(),
                'timestamp' => (new \DateTime())->format('H:i:s')
            ], 500);
        }
    }

    #[Route('/results', name: 'matchmaking_results', methods: ['GET'])]
    public function getResults(): JsonResponse
    {
        $matches = $this->entityManager->getRepository(SSTMatch::class)
            ->findBy(['status' => 'FINISHED'], ['finishedAt' => 'DESC'], 10);
        
        $results = [];
        foreach ($matches as $match) {
            $results[] = [
                'id' => $match->getId(),
                'team_a' => $match->getTeamA()->getName(),
                'team_b' => $match->getTeamB()->getName(),
                'winner' => $match->getWinnerTeam() ? $match->getWinnerTeam()->getName() : 'Aucun',
                'team_a_power' => $match->getTeamAPower(),
                'team_b_power' => $match->getTeamBPower(),
                'team_a_chance' => round($match->getTeamAPercent() * 100, 1) . '%',
                'team_b_chance' => round((1 - $match->getTeamAPercent()) * 100, 1) . '%',
                'status' => $match->getStatus(),
                'finished_at' => $match->getFinishedAt() ? $match->getFinishedAt()->format('H:i:s') : null
            ];
        }
        
        return $this->json([
            'total_matches' => count($results),
            'matches' => $results
        ]);
    }
    #[Route('/team', name: 'api_matchmaking_team', methods: ['GET'])]
    public function getPlayerTeam(TeamRepository $teamRepository): JsonResponse
    {
        $player = $this->getCurrentPlayer();
        $team = $teamRepository->findOneBy(['player' => $player]);
        
        if (!$team) {
            return $this->json([
                'team' => null,
                'characters' => []
            ]);
        }

        $characters = [];
        foreach ($team->getCharacterInstances() as $instance) {
            $template = $instance->getTemplate();
            $characters[] = [
                'id' => $template->getId(),
                'name' => $template->getName(),
                'role' => $template->getRole(),
                'hp' => $template->getHp(),
                'atk' => $template->getAtk(),
                'def' => $template->getDef(),
                'spd' => $template->getSpd(),
                'heal' => $template->getHeal(),
                'crit' => $template->getCrit(),
                'critDmg' => $template->getCritDmg()
            ];
        }

        return $this->json([
            'team' => [
                'id' => $team->getId(),
                'name' => $team->getName(),
                'isLocked' => $team->isLocked()
            ],
            'characters' => $characters
        ]);
    }

    #[Route('/characters', name: 'api_matchmaking_characters', methods: ['GET'])]
    public function getAvailableCharacters(): JsonResponse
    {
        $characterRepository = $this->entityManager->getRepository(\App\Entity\CharacterTemplate::class);
        $characters = $characterRepository->findAll();
        
        $data = array_map(function($character) {
            return [
                'id' => $character->getId(),
                'name' => $character->getName(),
                'role' => $character->getRole(),
                'hp' => $character->getHp(),
                'atk' => $character->getAtk(),
                'def' => $character->getDef(),
                'spd' => $character->getSpd(),
                'heal' => $character->getHeal(),
                'crit' => $character->getCrit(),
                'critDmg' => $character->getCritDmg()
            ];
        }, $characters);

        return $this->json($data);
    }
    #[Route('/team/create', name: 'api_matchmaking_team_create', methods: ['POST'])]
    public function createTeam(Request $request): JsonResponse
    {
        $player = $this->getCurrentPlayer();
        
        // Vérifier si le joueur a déjà une équipe
        $existingTeam = $this->entityManager->getRepository(Team::class)
            ->findOneBy(['player' => $player]);
            
        if ($existingTeam) {
            return $this->json(['error' => 'Vous avez déjà une équipe'], 400);
        }

        $data = json_decode($request->getContent(), true);
        $teamName = $data['name'] ?? 'Équipe de ' . $player->getUsername();

        $team = new Team();
        $team->setPlayer($player);
        $team->setName($teamName);
        $team->setIsLocked(false);
        $team->setCreatedAt(new \DateTimeImmutable());

        $this->entityManager->persist($team);
        $this->entityManager->flush();

        return $this->json([
            'success' => true,
            'team' => [
                'id' => $team->getId(),
                'name' => $team->getName(),
                'isLocked' => $team->isLocked()
            ]
        ]);
    }

    #[Route('/team/add-character', name: 'api_matchmaking_team_add_character', methods: ['POST'])]
    public function addCharacterToTeam(Request $request): JsonResponse
    {
        $player = $this->getCurrentPlayer();
        $data = json_decode($request->getContent(), true);
        
        $characterId = $data['character_id'] ?? null;
        
        if (!$characterId) {
            return $this->json(['error' => 'Character ID requis'], 400);
        }

        $character = $this->entityManager->getRepository(\App\Entity\CharacterTemplate::class)->find($characterId);
        if (!$character) {
            return $this->json(['error' => 'Personnage non trouvé'], 404);
        }

        $team = $this->entityManager->getRepository(Team::class)->findOneBy(['player' => $player]);
        if (!$team) {
            return $this->json(['error' => 'Aucune équipe trouvée'], 404);
        }

        // Vérifier si l'équipe n'est pas pleine (max 3 personnages)
        if (count($team->getCharacterInstances()) >= 3) {
            return $this->json(['error' => 'Équipe complète (3 personnages maximum)'], 400);
        }

        // Vérifier si le personnage n'est pas déjà dans l'équipe
        foreach ($team->getCharacterInstances() as $instance) {
            if ($instance->getTemplate()->getId() === $character->getId()) {
                return $this->json(['error' => 'Ce personnage est déjà dans votre équipe'], 400);
            }
        }

        $characterInstance = new \App\Entity\CharacterInstance();
        $characterInstance->setTeam($team);
        $characterInstance->setTemplate($character);

        $this->entityManager->persist($characterInstance);
        $this->entityManager->flush();

        return $this->json([
            'success' => true,
            'message' => $character->getName() . ' ajouté à votre équipe'
        ]);
    }

    #[Route('/team/remove-character', name: 'api_matchmaking_team_remove_character', methods: ['POST'])]
    public function removeCharacterFromTeam(Request $request): JsonResponse
    {
        $player = $this->getCurrentPlayer();
        $data = json_decode($request->getContent(), true);
        
        $characterId = $data['character_id'] ?? null;
        
        if (!$characterId) {
            return $this->json(['error' => 'Character ID requis'], 400);
        }

        $instanceRepository = $this->entityManager->getRepository(\App\Entity\CharacterInstance::class);
        $instance = $instanceRepository->createQueryBuilder('ci')
            ->join('ci.team', 't')
            ->join('ci.template', 'ct')
            ->where('t.player = :player')
            ->andWhere('ct.id = :characterId')
            ->setParameter('player', $player)
            ->setParameter('characterId', $characterId)
            ->getQuery()
            ->getOneOrNullResult();

        if (!$instance) {
            return $this->json(['error' => 'Personnage non trouvé dans votre équipe'], 404);
        }

        $characterName = $instance->getTemplate()->getName();
        $this->entityManager->remove($instance);
        $this->entityManager->flush();

        return $this->json([
            'success' => true,
            'message' => $characterName . ' retiré de votre équipe'
        ]);
    }

    #[Route('/history', name: 'api_matchmaking_history', methods: ['GET'])]
    public function getMatchHistory(): JsonResponse
    {
        $player = $this->getCurrentPlayer();
        
        // Récupérer tous les matchs où le joueur a participé
        $matchRepository = $this->entityManager->getRepository(SSTMatch::class);
        $matches = $matchRepository->createQueryBuilder('m')
            ->leftJoin('m.teamA', 'ta')
            ->leftJoin('m.teamB', 'tb')
            ->where('ta.player = :player OR tb.player = :player')
            ->andWhere('m.status = :status')
            ->setParameter('player', $player)
            ->setParameter('status', 'FINISHED')
            ->orderBy('m.finishedAt', 'DESC')
            ->getQuery()
            ->getResult();

        $historyData = [];
        
        foreach ($matches as $match) {
            $isPlayerTeamA = $match->getTeamA()->getPlayer() === $player;
            $playerTeam = $isPlayerTeamA ? $match->getTeamA() : $match->getTeamB();
            $opponentTeam = $isPlayerTeamA ? $match->getTeamB() : $match->getTeamA();
            
            $isWinner = $match->getWinnerTeam() === $playerTeam;
            
            $historyData[] = [
                'id' => $match->getId(),
                'player_team' => $playerTeam->getName(),
                'opponent_team' => $opponentTeam->getName(),
                'opponent_player' => $opponentTeam->getPlayer()->getUsername(),
                'is_winner' => $isWinner,
                'player_power' => $isPlayerTeamA ? $match->getTeamAPower() : $match->getTeamBPower(),
                'opponent_power' => $isPlayerTeamA ? $match->getTeamBPower() : $match->getTeamAPower(),
                'finished_at' => $match->getFinishedAt()->format('d/m/Y H:i'),
                'duration' => $match->getStartedAt() && $match->getFinishedAt() 
                    ? $match->getStartedAt()->diff($match->getFinishedAt())->format('%i min %s sec')
                    : 'N/A'
            ];
        }

        return $this->json([
            'success' => true,
            'matches' => $historyData,
            'total_matches' => count($historyData),
            'wins' => count(array_filter($historyData, fn($match) => $match['is_winner'])),
            'losses' => count(array_filter($historyData, fn($match) => !$match['is_winner']))
        ]);
    }
    #[Route('/ranking', name: 'api_matchmaking_ranking', methods: ['GET'])]
    public function getRanking(Request $request): JsonResponse
    {
        $currentPlayer = $this->getCurrentPlayer();
        $filter = $request->query->get('filter', 'global');
        
        // Récupérer tous les joueurs classés par MMR
        $playerRepository = $this->entityManager->getRepository(Player::class);
        $queryBuilder = $playerRepository->createQueryBuilder('p')
            ->where('p.MMR IS NOT NULL');
        
        // Appliquer le filtre temporel sur les matchs récents
        if ($filter === 'weekly' || $filter === 'monthly') {
            $dateLimit = new \DateTime();
            if ($filter === 'weekly') {
                $dateLimit->modify('-1 week');
            } else {
                $dateLimit->modify('-1 month');
            }
            
            // Filtrer seulement les joueurs qui ont joué récemment
            $queryBuilder
                ->join('p.teams', 't')
                ->leftJoin('App\Entity\SSTMatch', 'm', 'WITH', 'm.teamA = t OR m.teamB = t')
                ->andWhere('m.finishedAt >= :dateLimit')
                ->andWhere('m.status = :status')
                ->setParameter('dateLimit', $dateLimit)
                ->setParameter('status', 'FINISHED')
                ->groupBy('p.id');
        }
        
        $players = $queryBuilder
            ->orderBy('p.MMR', 'DESC')
            ->addOrderBy('p.createdAt', 'ASC')
            ->getQuery()
            ->getResult();

        $rankingData = [];
        $currentPlayerPosition = null;
        
        foreach ($players as $index => $player) {
            $position = $index + 1;
            
            // Calculer les statistiques du joueur selon le filtre
            $playerStats = $this->calculatePlayerStats($player, $filter);
            
            $playerData = [
                'position' => $position,
                'username' => $player->getUsername(),
                'mmr' => $player->getMMR() ?? 1200,
                'wins' => $playerStats['wins'],
                'losses' => $playerStats['losses'],
                'total_matches' => $playerStats['total_matches'],
                'win_rate' => $playerStats['win_rate'],
                'mmr_change' => $playerStats['recent_mmr_change'],
                'is_current_player' => $player === $currentPlayer
            ];
            
            $rankingData[] = $playerData;
            
            if ($player === $currentPlayer) {
                $currentPlayerPosition = $position;
            }
        }

        return $this->json([
            'success' => true,
            'ranking' => $rankingData,
            'total_players' => count($rankingData),
            'current_player_position' => $currentPlayerPosition,
            'current_player_mmr' => $currentPlayer->getMMR() ?? 1200,
            'filter' => $filter
        ]);
    }

    private function calculatePlayerStats(Player $player, string $filter = 'global'): array
    {
        $matchRepository = $this->entityManager->getRepository(SSTMatch::class);
        $queryBuilder = $matchRepository->createQueryBuilder('m')
            ->leftJoin('m.teamA', 'ta')
            ->leftJoin('m.teamB', 'tb')
            ->where('(ta.player = :player OR tb.player = :player) AND m.status = :status')
            ->setParameter('player', $player)
            ->setParameter('status', 'FINISHED');
        
        // Appliquer le filtre temporel
        if ($filter === 'weekly') {
            $dateLimit = new \DateTime('-1 week');
            $queryBuilder->andWhere('m.finishedAt >= :dateLimit')
                        ->setParameter('dateLimit', $dateLimit);
        } elseif ($filter === 'monthly') {
            $dateLimit = new \DateTime('-1 month');
            $queryBuilder->andWhere('m.finishedAt >= :dateLimit')
                        ->setParameter('dateLimit', $dateLimit);
        }
        
        $matches = $queryBuilder->orderBy('m.finishedAt', 'DESC')->getQuery()->getResult();
        
        $wins = 0;
        $losses = 0;
        
        foreach ($matches as $match) {
            $isPlayerTeamA = $match->getTeamA()->getPlayer() === $player;
            $playerTeam = $isPlayerTeamA ? $match->getTeamA() : $match->getTeamB();
            
            if ($match->getWinnerTeam() === $playerTeam) {
                $wins++;
            } else {
                $losses++;
            }
        }

        $totalMatches = $wins + $losses;
        $winRate = $totalMatches > 0 ? round(($wins / $totalMatches) * 100, 1) : 0;
        $recentMmrChange = $this->calculateRecentMmrChange(array_slice($matches, 0, 5), $player);

        return [
            'wins' => $wins,
            'losses' => $losses,
            'total_matches' => $totalMatches,
            'win_rate' => $winRate,
            'recent_mmr_change' => $recentMmrChange
        ];
    }

    private function calculateRecentMmrChange(array $recentMatches, Player $player): int
    {
        $change = 0;
        
        foreach (array_slice($recentMatches, 0, 3) as $match) {
            $isPlayerTeamA = $match->getTeamA()->getPlayer() === $player;
            $playerTeam = $isPlayerTeamA ? $match->getTeamA() : $match->getTeamB();
            
            if ($match->getWinnerTeam() === $playerTeam) {
                $change += mt_rand(15, 35);
            } else {
                $change -= mt_rand(10, 30);
            }
        }
        
        return $change;
    }
    #[Route('/match/{id}/events', name: 'match_events', methods: ['GET'])]
    public function getMatchEvents(int $id): JsonResponse
    {
        $match = $this->entityManager->getRepository(SSTMatch::class)->find($id);
        
        if (!$match) {
            return $this->json(['error' => 'Match non trouvé'], 404);
        }
        
        // Vérifier que le joueur connecté a participé à ce match
        $currentPlayer = $this->getCurrentPlayer();
        $hasParticipated = false;
        
        if ($match->getTeamA() && $match->getTeamA()->getPlayer() === $currentPlayer) {
            $hasParticipated = true;
        }
        if ($match->getTeamB() && $match->getTeamB()->getPlayer() === $currentPlayer) {
            $hasParticipated = true;
        }
        
        if (!$hasParticipated) {
            return $this->json(['error' => 'Accès refusé'], 403);
        }
        
        // Récupérer les événements du match
        $events = $this->entityManager->getRepository(\App\Entity\MatchEvent::class)
            ->findBy(['sstmatch' => $match], ['createdAt' => 'ASC']);
        
        $eventsData = [];
        foreach ($events as $event) {
            $eventsData[] = [
                'id' => $event->getId(),
                'turn' => $event->getTurn(),
                'action' => $event->getAction(),
                'actor_name' => $event->getActorName(),
                'target_name' => $event->getTargetName(),
                'amount' => $event->getAmount(),
                'is_crit' => $event->IsCrit(),
                'created_at' => $event->getCreatedAt()->format('H:i:s')
            ];
        }
        
        // Informations générales du match
        $matchData = [
            'id' => $match->getId(),
            'team_a' => [
                'name' => $match->getTeamA()->getName(),
                'player' => $match->getTeamA()->getPlayer()->getUsername(),
                'mmr' => $match->getTeamA()->getPlayer()->getMMR()
            ],
            'team_b' => [
                'name' => $match->getTeamB()->getName(),
                'player' => $match->getTeamB()->getPlayer()->getUsername(),
                'mmr' => $match->getTeamB()->getPlayer()->getMMR()
            ],
            'winner_team' => $match->getWinnerTeam() ? $match->getWinnerTeam()->getName() : null,
            'status' => $match->getStatus(),
            'started_at' => $match->getStartedAt()?->format('d/m/Y H:i:s'),
            'finished_at' => $match->getFinishedAt()?->format('d/m/Y H:i:s'),
            'events' => $eventsData
        ];
        
        return $this->json($matchData);
    }
}