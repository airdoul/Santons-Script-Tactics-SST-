<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class TestController extends AbstractController
{
    #[Route('/test-combat', name: 'app_test_combat')]
    public function testCombat(): Response
    {
        return $this->render('test/combat.html.twig', [
            'controller_name' => 'TestController',
        ]);
    }
}
