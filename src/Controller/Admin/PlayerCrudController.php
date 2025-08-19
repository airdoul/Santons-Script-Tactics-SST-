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
            EmailField::new('email'),
            TextField::new('username'),
        ];

        if (Crud::PAGE_INDEX === $pageName) {
            $fields[] = IdField::new('id');
            $fields[] = DateTimeField::new('createdAt');
            $fields[] = AssociationField::new('teams');
        }

        if (Crud::PAGE_NEW === $pageName || Crud::PAGE_EDIT === $pageName) {
            $fields[] = TextField::new('password');
        }

        return $fields;
    }
}
