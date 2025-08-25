<?php

namespace App\Service;

use App\Entity\SSTMatch;
use App\Entity\Team;
use App\Entity\MatchEvent;
use App\Entity\CharacterInstance;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Log\LoggerInterface;

class CombatService
{
    private EntityManagerInterface $entityManager;
    private LoggerInterface $logger;

    public function __construct(EntityManagerInterface $entityManager, LoggerInterface $logger)
    {
        $this->entityManager = $entityManager;
        $this->logger = $logger;
    }

    public function simulateCombat(SSTMatch $match): void
    {
        $this->logger->info(' Début du combat', [
            'match_id' => $match->getId(),
            'team_a' => $match->getTeamA()->getName(),
            'team_b' => $match->getTeamB()->getName()
        ]);

        // 1. marquer le début du combat
        $match->setStatus('IN_PROGRESS');
        $match->setStartedAt(new \DateTimeImmutable());
        $match->setRngSeed(random_int(1, 999999));

        // 2. calcul le power des équipe
        $teamAPower = $this->calculateTeamPower($match->getTeamA());
        $teamBPower = $this->calculateTeamPower($match->getTeamB());

        $match->setTeamAPower($teamAPower);
        $match->setTeamBPower($teamBPower);

        // 3. calcul du pourcentage de chance
        $totalPower = $teamAPower + $teamBPower;
        $teamAPercent = $totalPower > 0 ? ($teamAPower / $totalPower) : 0.5;
        $match->setTeamAPercent($teamAPercent);

        // 4. simulation du combat tour par tour
        $this->simulateCombatRounds($match);

        // 5. determine le winner
        $this->determineWinner($match);

        // 6. NOUVEAU : Mise à jour des MMR des joueurs
        $this->updatePlayersMMR($match);

        // 7. finaliser le match
        $match->setStatus('FINISHED');
        $match->setFinishedAt(new \DateTimeImmutable());

        $this->entityManager->persist($match);
        $this->entityManager->flush();

        $this->logger->info(' Combat terminé', [
            'match_id' => $match->getId(),
            'winner' => $match->getWinnerTeam() ? $match->getWinnerTeam()->getName() : 'Égalité',
            'team_a_power' => $teamAPower,
            'team_b_power' => $teamBPower,
            'duration' => $match->getStartedAt() ? $match->getStartedAt()->diff($match->getFinishedAt())->s : 0
        ]);
    }

    private function calculateTeamPower(Team $team): float
    {
        $totalPower = 0;
        
        foreach ($team->getCharacterInstances() as $characterInstance) {
            $template = $characterInstance->getTemplate();
            
            // calcul de la puissance suivant les stats
            $power = (
                $template->getBaseHP() * 0.1 +
                $template->getBaseAtk() * 0.3 +
                $template->getBaseDef() * 50 +
                $template->getBaseSpd() * 0.2 +
                ($template->getBaseHeal() ?? 0) * 0.2 +
                $template->getBaseCrit() * 100 +
                $template->getBaseCritDmg() * 20
            );
            
            $totalPower += $power;
        }
        
        return round($totalPower, 2);
    }

    private function simulateCombatRounds(SSTMatch $match): void
    {
        $teamACharacters = $match->getTeamA()->getCharacterInstances()->toArray();
        $teamBCharacters = $match->getTeamB()->getCharacterInstances()->toArray();

        // debut du match
        $this->createMatchEvent($match, "COMBAT_START", 
            " Début du combat entre " . $match->getTeamA()->getName() . " vs " . $match->getTeamB()->getName()
        );

        // montre le équipe
        $this->createMatchEvent($match, "TEAM_PRESENTATION", 
            " Équipe A: " . $match->getTeamA()->getName() . " (Puissance: " . $match->getTeamAPower() . ")"
        );
        $this->createMatchEvent($match, "TEAM_PRESENTATION", 
            " Équipe B: " . $match->getTeamB()->getName() . " (Puissance: " . $match->getTeamBPower() . ")"
        );

        // simuler le combat
        $maxRounds = random_int(3, 5);
        
        for ($round = 1; $round <= $maxRounds; $round++) {
            $this->createMatchEvent($match, "ROUND_START", "⚔️ Début du tour $round");

            // action team A
            foreach ($teamACharacters as $character) {
                $this->performCharacterAction($match, $character, $round, 'A');
            }

            // action team B
            foreach ($teamBCharacters as $character) {
                $this->performCharacterAction($match, $character, $round, 'B');
            }

            $this->createMatchEvent($match, "ROUND_END", " Fin du tour $round");
        }

        $this->createMatchEvent($match, "COMBAT_END", " Calcul du résultat final...");
    }

    private function performCharacterAction(SSTMatch $match, CharacterInstance $character, int $round, string $team): void
    {
        $template = $character->getTemplate();
        $action = $this->chooseAction($template, $round);
        
        $teamIcon = $team === 'A' ? '🔵' : '🔴';
        $description = $teamIcon . ' ' . $action['description'];
        
        $this->createMatchEvent($match, $action['type'], $description, $character);
    }

    private function chooseAction($template, int $round): array
    {
        $actions = [];
        
        // Choix de l'action en fonction du rôle
        switch ($template->getRole()) {
            case 'tank':
                $actions[] = [
                    'type' => 'DEFEND',
                    'description' => $template->getName() . ' protège ses alliés (DEF: ' . $template->getBaseDef() . ')'
                ];
                $actions[] = [
                    'type' => 'TAUNT',
                    'description' => $template->getName() . ' provoque les ennemis'
                ];
                break;
                
            case 'dps':
                $actions[] = [
                    'type' => 'ATTACK',
                    'description' => $template->getName() . ' attaque férocement (ATK: ' . $template->getBaseAtk() . ')'
                ];
                if ($template->getBaseCrit() > 0.3) {
                    $actions[] = [
                        'type' => 'CRITICAL',
                        'description' => $template->getName() . ' tente une attaque critique! (CRIT: ' . round($template->getBaseCrit() * 100) . '%)'
                    ];
                }
                break;
                
            case 'support':
                $actions[] = [
                    'type' => 'BUFF',
                    'description' => $template->getName() . ' renforce ses alliés (SPD: ' . $template->getBaseSpd() . ')'
                ];
                if ($template->getBaseHeal() > 0) {
                    $actions[] = [
                        'type' => 'HEAL',
                        'description' => $template->getName() . ' soigne l\'équipe (HEAL: ' . $template->getBaseHeal() . ')'
                    ];
                }
                break;
                
            case 'healer':
                $actions[] = [
                    'type' => 'HEAL',
                    'description' => $template->getName() . ' restaure les HP (HEAL: ' . $template->getBaseHeal() . ')'
                ];
                $actions[] = [
                    'type' => 'PROTECT',
                    'description' => $template->getName() . ' lance une protection magique'
                ];
                break;
                
            default:
                $actions[] = [
                    'type' => 'ATTACK',
                    'description' => $template->getName() . ' attaque (ATK: ' . $template->getBaseAtk() . ')'
                ];
        }
        
        return $actions[array_rand($actions)];
    }

    private function createMatchEvent(SSTMatch $match, string $type, string $description, ?CharacterInstance $character = null): void
{
    $event = new MatchEvent();
    $event->setSstmatch($match);
    $event->setAction($type);
    $event->setActorName($character ? $character->getTemplate()->getName() : 'Système');
    $event->setTargetName($description);   
    $event->setTurn(1);
    $event->setAmount(null);
    $event->setIsCrit(false);
    $event->setCreatedAt(new \DateTimeImmutable());
    
    $this->entityManager->persist($event);
}

    private function determineWinner(SSTMatch $match): void
    {
        $teamAChance = $match->getTeamAPercent();
        $random = mt_rand() / mt_getrandmax();
        
        if ($random < $teamAChance) {
            $match->setWinnerTeam($match->getTeamA());
            $this->createMatchEvent($match, "VICTORY", 
                " Victoire de " . $match->getTeamA()->getName() . "! (" . round($teamAChance * 100, 1) . "% de chances)"
            );
        } else {
            $match->setWinnerTeam($match->getTeamB());
            $this->createMatchEvent($match, "VICTORY", 
                " Victoire de " . $match->getTeamB()->getName() . "! (" . round((1 - $teamAChance) * 100, 1) . "% de chances)"
            );
        }
    }

    private function updatePlayersMMR(SSTMatch $match): void
    {
        $playerA = $match->getTeamA()->getPlayer();
        $playerB = $match->getTeamB()->getPlayer();
        
        $mmrA = $playerA->getMMR() ?? 1000;
        $mmrB = $playerB->getMMR() ?? 1000;
        
        // Calculer la différence de MMR
        $mmrDifference = abs($mmrA - $mmrB);
        
        // Déterminer le gagnant et le perdant
        $winner = $match->getWinnerTeam();
        if (!$winner) {
            // En cas d'égalité, pas de changement de MMR
            $this->logger->info(' [MMR] Égalité - Pas de changement de MMR');
            return;
        }
        
        $winnerPlayer = $winner->getPlayer();
        $loserPlayer = ($winnerPlayer === $playerA) ? $playerB : $playerA;
        $winnerMMR = $winnerPlayer->getMMR() ?? 1200;
        $loserMMR = $loserPlayer->getMMR() ?? 1200;
        
        // Calcul du coefficient basé sur la différence de MMR
        $baseMMRChange = 12; //  gain/perte de base
        // PARAMÈTRE DE RANDOMISATION
        $randomVariation = 5; // +5 points de variation aléatoire

        if ($mmrDifference > 150) {
            // Grande différence de MMR
            if ($winnerMMR > $loserMMR) {
                // Le favori gagne : moins de MMR gagné
                $baseGain = max(8, $baseMMRChange - floor($mmrDifference / 10));
                $baseLoss = min(45, $baseMMRChange + floor($mmrDifference / 15));
            } else {
                // L'underdog gagne : plus de MMR gagné
                $baseGain = $baseMMRChange + floor($mmrDifference / 8);
                $baseLoss = max(7, $baseMMRChange - floor($mmrDifference / 12));
            }
        } else {
            // Différence normale (≤ 150)
            $coefficient = 1 + ($mmrDifference / 300); // Coefficient entre 1 et 1.5
            
            if ($winnerMMR > $loserMMR) {
                // Le favori gagne
                $baseGain = max(15, floor($baseMMRChange / $coefficient));
                $baseLoss = min(35, floor($baseMMRChange * $coefficient));
            } else {
                // L'underdog gagne
                $baseGain = floor($baseMMRChange * $coefficient);
                $baseLoss = max(12, floor($baseMMRChange / $coefficient));
            }
        }

        // 🎲 APPLICATION DE LA RANDOMISATION (Méthode 1)
        $mmrGain = $baseGain + mt_rand(-$randomVariation, $randomVariation);
        $mmrLoss = $baseLoss + mt_rand(-$randomVariation, $randomVariation);

        // 🛡️ Sécurités pour éviter les valeurs extrêmes
        $mmrGain = max(5, min(60, $mmrGain)); // Entre 5 et 60 points minimum/maximum
        $mmrLoss = max(3, min(50, $mmrLoss)); // Entre 3 et 50 points minimum/maximum

        // Appliquer les changements
        $newWinnerMMR = $winnerMMR + $mmrGain;
        $newLoserMMR = max(0, $loserMMR - $mmrLoss); // MMR ne peut pas être négatif
                
        $winnerPlayer->setMMR($newWinnerMMR);
        $loserPlayer->setMMR($newLoserMMR);
        
        // Persister les changements
        $this->entityManager->persist($winnerPlayer);
        $this->entityManager->persist($loserPlayer);
        
        // Log des changements
        $this->logger->info(' [MMR] Mise à jour des MMR', [
            'match_id' => $match->getId(),
            'winner' => $winnerPlayer->getUsername(),
            'winner_mmr_change' => "+{$mmrGain} ({$winnerMMR} → {$newWinnerMMR})",
            'loser' => $loserPlayer->getUsername(),
            'loser_mmr_change' => "-{$mmrLoss} ({$loserMMR} → {$newLoserMMR})",
            'mmr_difference' => $mmrDifference,
            'coefficient_applied' => $mmrDifference > 150 ? 'LARGE_DIFF' : 'NORMAL'
        ]);

        // AFFICHAGE CONSOLE - AJOUT DE CES LIGNES
        echo "📊 [MMR] Mise à jour des classements:\n";
        echo "  🏆 {$winnerPlayer->getUsername()}: +{$mmrGain} MMR ({$winnerMMR} → {$newWinnerMMR})\n";
        echo "  💀 {$loserPlayer->getUsername()}: -{$mmrLoss} MMR ({$loserMMR} → {$newLoserMMR})\n";
        echo "  📈 Différence MMR: {$mmrDifference} | Coeff: " . ($mmrDifference > 150 ? 'LARGE_DIFF' : 'NORMAL') . "\n";
        
        // Créer des événements de match pour le MMR
        $this->createMatchEvent($match, "MMR_UPDATE", 
            " {$winnerPlayer->getUsername()} gagne +{$mmrGain} MMR ({$newWinnerMMR})"
        );
        $this->createMatchEvent($match, "MMR_UPDATE", 
            " {$loserPlayer->getUsername()} perd -{$mmrLoss} MMR ({$newLoserMMR})"
        );
    }
}