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
        
        // msg de start
        $timestamp = (new \DateTime())->format('H:i:s');
        $io->writeln(sprintf(' [%s] MATCHMAKING PROCESSOR - Début du traitement', $timestamp));
        
        try {
            $io->writeln(' Recherche de joueurs en file d\'attente...');
            
            $result = $this->matchmakingService->processQueue();

            $endTimestamp = (new \DateTime())->format('H:i:s');

            if ($result['matches_created'] > 0) {
                $io->success(sprintf('[%s]  %d nouveaux matchs créés !', $endTimestamp, $result['matches_created']));
                
                $io->writeln(sprintf(
                    '  Temps de traitement: %.3fs | Joueurs en attente: %d',
                    $result['processing_time'],
                    $result['players_waiting']
                ));
                
            } else {
                if ($result['players_waiting'] > 0) {
                    $io->note(sprintf('[%s]   %d joueur(s) en attente, pas assez pour créer un match', 
                        $endTimestamp, 
                        $result['players_waiting']
                    ));
                } else {
                    $io->note(sprintf('[%s]   Aucun joueur en queue', $endTimestamp));
                }
                
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