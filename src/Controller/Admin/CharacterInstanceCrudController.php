<?php

namespace App\Controller\Admin;

use App\Entity\CharacterInstance;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;

class CharacterInstanceCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return CharacterInstance::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            AssociationField::new('team', 'Équipe'),
            AssociationField::new('template', 'Personnage')
        ];
    }
}