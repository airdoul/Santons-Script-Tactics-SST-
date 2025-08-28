<?php

namespace App\Controller;

use App\Entity\Player;
use App\Entity\SSTMatch;
use App\Entity\Team;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/profile')]
#[IsGranted('ROLE_USER')]
class ProfileController extends AbstractController
{
    private EntityManagerInterface $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
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

    #[Route('/', name: 'app_profile')]
    public function index(): Response
    {
        $player = $this->getCurrentPlayer();
        
        // Statistiques du joueur
        $stats = $this->getPlayerStats($player);
        
        // Équipe actuelle
        $currentTeam = $this->entityManager->getRepository(Team::class)
            ->findOneBy(['player' => $player]);
        
        // Matchs récents (5 derniers)
        $recentMatches = $this->getRecentMatches($player, 5);
        
        // Classement du joueur
        $playerRank = $this->getPlayerRank($player);

        return $this->render('profile/index.html.twig', [
            'player' => $player,
            'stats' => $stats,
            'current_team' => $currentTeam,
            'recent_matches' => $recentMatches,
            'player_rank' => $playerRank
        ]);
    }

    private function getPlayerStats(Player $player): array
    {
        $matchRepository = $this->entityManager->getRepository(SSTMatch::class);
        
        $matches = $matchRepository->createQueryBuilder('m')
            ->leftJoin('m.teamA', 'ta')
            ->leftJoin('m.teamB', 'tb')
            ->where('(ta.player = :player OR tb.player = :player)')
            ->andWhere('m.status = :status')
            ->setParameter('player', $player)
            ->setParameter('status', 'FINISHED')
            ->getQuery()
            ->getResult();

        $totalMatches = count($matches);
        $wins = 0;
        $losses = 0;
        $totalDamageDealt = 0;
        $totalDamageTaken = 0;

        foreach ($matches as $match) {
            $isPlayerTeamA = $match->getTeamA()->getPlayer() === $player;
            $playerTeam = $isPlayerTeamA ? $match->getTeamA() : $match->getTeamB();
            
            if ($match->getWinnerTeam() === $playerTeam) {
                $wins++;
            } else {
                $losses++;
            }
            
            // Calculer la puissance moyenne (simulé)
            $totalDamageDealt += $isPlayerTeamA ? $match->getTeamAPower() : $match->getTeamBPower();
        }

        $winRate = $totalMatches > 0 ? round(($wins / $totalMatches) * 100, 1) : 0;
        $averagePower = $totalMatches > 0 ? round($totalDamageDealt / $totalMatches, 1) : 0;

        return [
            'total_matches' => $totalMatches,
            'wins' => $wins,
            'losses' => $losses,
            'win_rate' => $winRate,
            'current_mmr' => $player->getMMR() ?? 1200,
            'average_power' => $averagePower,
            'account_age' => $player->getCreatedAt()->diff(new \DateTime())->days
        ];
    }

    private function getRecentMatches(Player $player, int $limit): array
    {
        $matchRepository = $this->entityManager->getRepository(SSTMatch::class);
        
        $matches = $matchRepository->createQueryBuilder('m')
            ->leftJoin('m.teamA', 'ta')
            ->leftJoin('m.teamB', 'tb')
            ->where('(ta.player = :player OR tb.player = :player)')
            ->andWhere('m.status = :status')
            ->setParameter('player', $player)
            ->setParameter('status', 'FINISHED')
            ->orderBy('m.finishedAt', 'DESC')
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult();

        $matchesData = [];
        foreach ($matches as $match) {
            $isPlayerTeamA = $match->getTeamA()->getPlayer() === $player;
            $playerTeam = $isPlayerTeamA ? $match->getTeamA() : $match->getTeamB();
            $opponentTeam = $isPlayerTeamA ? $match->getTeamB() : $match->getTeamA();
            
            $isWinner = $match->getWinnerTeam() === $playerTeam;
            
            $matchesData[] = [
                'id' => $match->getId(),
                'opponent' => $opponentTeam->getPlayer()->getUsername(),
                'opponent_team' => $opponentTeam->getName(),
                'is_winner' => $isWinner,
                'player_power' => $isPlayerTeamA ? $match->getTeamAPower() : $match->getTeamBPower(),
                'opponent_power' => $isPlayerTeamA ? $match->getTeamBPower() : $match->getTeamAPower(),
                'finished_at' => $match->getFinishedAt(),
                'result' => $isWinner ? 'Victoire' : 'Défaite'
            ];
        }

        return $matchesData;
    }

    private function getPlayerRank(Player $player): array
    {
        $playerRepository = $this->entityManager->getRepository(Player::class);
        
        // Compter les joueurs avec un MMR supérieur
        $playersAbove = $playerRepository->createQueryBuilder('p')
            ->select('COUNT(p.id)')
            ->where('p.MMR > :playerMMR')
            ->setParameter('playerMMR', $player->getMMR() ?? 1200)
            ->getQuery()
            ->getSingleScalarResult();
        
        // Compter le total des joueurs avec MMR
        $totalPlayers = $playerRepository->createQueryBuilder('p')
            ->select('COUNT(p.id)')
            ->where('p.MMR IS NOT NULL')
            ->getQuery()
            ->getSingleScalarResult();
        
        $rank = $playersAbove + 1;
        $percentile = $totalPlayers > 0 ? round((($totalPlayers - $rank) / $totalPlayers) * 100, 1) : 0;

        return [
            'position' => $rank,
            'total_players' => $totalPlayers,
            'percentile' => $percentile
        ];
    }

    #[Route('/settings/update-username-color', name: 'app_profile_update_username_color', methods: ['POST'])]
    public function updateUsernameColor(Request $request): JsonResponse
    {
        $player = $this->getCurrentPlayer();
        $data = json_decode($request->getContent(), true);
        
        $color = $data['color'] ?? null;
        
        // Validation couleur hexadécimale
        if (!$color || !preg_match('/^#[0-9A-Fa-f]{6}$/', $color)) {
            return new JsonResponse(['error' => 'Couleur invalide'], 400);
        }
        
        $player->setUsernameColor($color);
        $this->entityManager->flush();
        
        return new JsonResponse(['success' => true, 'color' => $color]);
    }

    #[Route('/settings/update-username', name: 'app_profile_update_username', methods: ['POST'])]
    public function updateUsername(Request $request): JsonResponse
    {
        $player = $this->getCurrentPlayer();
        $data = json_decode($request->getContent(), true);
        
        $newUsername = trim($data['username'] ?? '');
        
        // Validation
        if (strlen($newUsername) < 3 || strlen($newUsername) > 20) {
            return new JsonResponse(['error' => 'Le pseudo doit contenir entre 3 et 20 caractères'], 400);
        }
        
        // Vérification unicité
        $existingPlayer = $this->entityManager->getRepository(Player::class)
            ->findOneBy(['username' => $newUsername]);
            
        if ($existingPlayer && $existingPlayer->getId() !== $player->getId()) {
            return new JsonResponse(['error' => 'Ce pseudo est déjà utilisé'], 400);
        }
        
        $player->setUsername($newUsername);
        $this->entityManager->flush();
        
        return new JsonResponse(['success' => true, 'username' => $newUsername]);
    }

    #[Route('/settings/update-team-name', name: 'app_profile_update_team_name', methods: ['POST'])]
    public function updateTeamName(Request $request): JsonResponse
    {
        $player = $this->getCurrentPlayer();
        $data = json_decode($request->getContent(), true);
        
        $newTeamName = trim($data['teamName'] ?? '');
        
        // Validation
        if (strlen($newTeamName) < 3 || strlen($newTeamName) > 30) {
            return new JsonResponse(['error' => 'Le nom d\'équipe doit contenir entre 3 et 30 caractères'], 400);
        }
        
        // Récupérer l'équipe du joueur
        $team = $this->entityManager->getRepository(Team::class)
            ->findOneBy(['player' => $player]);
            
        if (!$team) {
            return new JsonResponse(['error' => 'Aucune équipe trouvée'], 404);
        }
        
        $team->setName($newTeamName);
        $this->entityManager->flush();
        
        return new JsonResponse(['success' => true, 'teamName' => $newTeamName]);
    }

    #[Route('/settings/update-icon', name: 'app_profile_update_icon', methods: ['POST'])]
    public function updateIcon(Request $request): JsonResponse
    {
        $player = $this->getCurrentPlayer();
        $data = json_decode($request->getContent(), true);
        
        $icon = $data['icon'] ?? null;
        
        // Liste des icônes autorisées
        $allowedIcons = [
            'user', 'user-knight', 'user-crown', 'user-shield', 'user-ninja', 
            'dragon', 'crown', 'sword', 'shield', 'helmet-battle',
            'fist-raised', 'fire', 'bolt', 'star', 'gem'
        ];
        
        if (!in_array($icon, $allowedIcons)) {
            return new JsonResponse(['error' => 'Icône non autorisée'], 400);
        }
        
        $player->setPreferredIcon($icon);
        $this->entityManager->flush();
        
        return new JsonResponse(['success' => true, 'icon' => $icon]);
    }

    #[Route('/settings/update-notifications', name: 'app_profile_update_notifications', methods: ['POST'])]
    public function updateNotifications(Request $request): JsonResponse
    {
        $player = $this->getCurrentPlayer();
        $data = json_decode($request->getContent(), true);
        
        $enabled = (bool)($data['enabled'] ?? true);
        
        $player->setNotificationsEnabled($enabled);
        $this->entityManager->flush();
        
        return new JsonResponse(['success' => true, 'enabled' => $enabled]);
    }
}
