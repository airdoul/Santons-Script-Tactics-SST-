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

        // 6. finaliser le match
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
}