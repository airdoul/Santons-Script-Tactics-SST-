<?php

namespace App\Controller;

use App\Entity\SSTMatch;
use App\Entity\QueueTicket;
use App\Entity\Player;
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
}