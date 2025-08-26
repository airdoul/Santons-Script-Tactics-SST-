<?php

namespace App\Controller\Admin;

use App\Entity\Team;
use App\Entity\Player;
use App\Entity\SSTMatch;
use App\Entity\QueueTicket;
use App\Entity\CharacterInstance;
use App\Entity\CharacterTemplate;
use Symfony\Component\HttpFoundation\Response;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use EasyCorp\Bundle\EasyAdminBundle\Attribute\AdminDashboard;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;

#[AdminDashboard(routePath: '/admin', routeName: 'admin')]
class DashboardController extends AbstractDashboardController
{
    public function index(): Response
    {
        $user = $this->getUser();
        
        // Vérifier si l'utilisateur a le droit d'accéder à l'admin
        if (!$user || !$this->isGranted('ROLE_ADMIN')) {
            return $this->render('admin/access_denied.html.twig');
        }
        
        return $this->render('admin/dashboard.html.twig');
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Hackathon');
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToDashboard('Dashboard', 'fa fa-home');
        yield MenuItem::linkToUrl('Retour à l\'accueil', 'fas fa-sign-out-alt', $this->generateUrl('app_homepage'));

        yield MenuItem::section('Gestion des joueurs');
        yield MenuItem::linkToCrud('Players', 'fas fa-users', Player::class);
        yield MenuItem::linkToCrud('Teams', 'fas fa-users-cog', Team::class);
        
        yield MenuItem::section('Characters');
        yield MenuItem::linkToCrud('Character Templates', 'fas fa-chess-knight', CharacterTemplate::class);
        yield MenuItem::linkToCrud('Character Instances', 'fas fa-chess-pawn', CharacterInstance::class);
        
        yield MenuItem::section('Matchmaking');
        yield MenuItem::linkToCrud('Matches', 'fas fa-battle-net', SSTMatch::class);
        yield MenuItem::linkToCrud('Queue Tickets', 'fas fa-clock', QueueTicket::class);
    }
}
