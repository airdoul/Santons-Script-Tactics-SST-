<?php

namespace App\Controller\Admin;

use App\Entity\Player;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;

class PlayerCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Player::class;
    }

    public function configureFields(string $pageName): iterable
    {
        $fields = [
            TextField::new('username'),
        ];

        // affichage des champs dans la page de la liste des joueurs
        if (Crud::PAGE_INDEX === $pageName || Crud::PAGE_DETAIL === $pageName) {
            $fields[] = IdField::new('id');
            $fields[] = EmailField::new('email');
            $fields[] = DateTimeField::new('createdAt');
            $fields[] = AssociationField::new('teams');
        }

        if (Crud::PAGE_NEW === $pageName) {
            $fields[] = EmailField::new('email');
            $fields[] = TextField::new('password');
        }


        return $fields;
    }
}