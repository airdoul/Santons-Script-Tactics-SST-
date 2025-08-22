<?php

namespace App\Controller\Admin;

use App\Entity\SSTMatch;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;

class SSTMatchCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return SSTMatch::class;
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions
            ->disable(Action::NEW, Action::EDIT, Action::DELETE);
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id', 'ID'),
            AssociationField::new('teamA', 'Équipe A'),
            AssociationField::new('teamB', 'Équipe B'),
            AssociationField::new('winnerTeam', 'Vainqueur'),
            TextField::new('status', 'Statut'),
            NumberField::new('teamAPower', 'Puissance A'),
            NumberField::new('teamBPower', 'Puissance B'),
            NumberField::new('teamAPercent', 'Chances A'),
            IntegerField::new('rngSeed', 'Seed'),
            DateTimeField::new('startedAt', 'Début'),
            DateTimeField::new('finishedAt', 'Fin'),
            BooleanField::new('randomDraw', 'Match nul')
        ];
    }
}