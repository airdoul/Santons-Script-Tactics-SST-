<?php

namespace App\Command;

use App\Service\MatchmakingService;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'matchmaking:process',
    description: 'Process the matchmaking queue and create matches',
)]
class MatchmakingProcessCommand extends Command
{
    private MatchmakingService $matchmakingService;

    public function __construct(MatchmakingService $matchmakingService)
    {
        $this->matchmakingService = $matchmakingService;
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        
        // Message de démarrage avec timestamp
        $timestamp = (new \DateTime())->format('H:i:s');
        $io->writeln(sprintf(' [%s] MATCHMAKING PROCESSOR - Début du traitement', $timestamp));
        
        try {
            $io->writeln(' Recherche de joueurs en file d\'attente...');
            
            $matches = $this->matchmakingService->processQueue();

            $endTimestamp = (new \DateTime())->format('H:i:s');

            if (count($matches) > 0) {
                $io->success(sprintf('[%s]  %d nouveaux matchs créés !', $endTimestamp, count($matches)));
                
                // Afficher les détails des matchs créés
                $tableData = [];
                foreach ($matches as $match) {
                    $tableData[] = [
                        $match->getId(),
                        $match->getTeamA()->getName(),
                        $match->getTeamB()->getName(),
                        $match->getRngSeed(),
                        $match->getStatus()
                    ];
                    
                    $io->writeln(sprintf(
                        '  Match #%d créé: %s vs %s (Seed: %d)',
                        $match->getId(),
                        $match->getTeamA()->getName(),
                        $match->getTeamB()->getName(),
                        $match->getRngSeed()
                    ));
                }
                
                // Tableau récapitulatif
                $io->table(
                    ['ID', 'Équipe A', 'Équipe B', 'Seed', 'Status'],
                    $tableData
                );
                
            } else {
                $io->note(sprintf('[%s]   Aucun match créé cette fois', $endTimestamp));
                $io->writeln(' Raisons possibles:');
                $io->listing([
                    'Pas assez de joueurs en queue (minimum 2 requis)',
                    'Aucun joueur avec MMR compatible (écart max: 200 points)',
                    'Tous les joueurs déjà appariés dans des matchs en cours'
                ]);
            }
            
            $io->writeln(sprintf('[%s] Traitement terminé avec succès\n', $endTimestamp));
            
            return Command::SUCCESS;
            
        } catch (\Exception $e) {
            $errorTimestamp = (new \DateTime())->format('H:i:s');
            $io->error(sprintf('[%s] Erreur lors du traitement: %s', $errorTimestamp, $e->getMessage()));
            
            if ($output->isVeryVerbose()) {
                $io->writeln('Stack trace détaillée:');
                $io->writeln($e->getTraceAsString());
            }
            
            return Command::FAILURE;
        }
    }
}