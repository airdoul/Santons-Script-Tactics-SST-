<?php

namespace App\Controller\Admin;

use App\Entity\CharacterTemplate;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\UrlField;

class CharacterTemplateCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return CharacterTemplate::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('name'),
            TextField::new('role'),
            IntegerField::new('baseHP'),
            IntegerField::new('baseAtk'),
            NumberField::new('baseDef'),
            IntegerField::new('baseSpd'),
            IntegerField::new('baseHeal'),
            NumberField::new('baseCrit'),
            NumberField::new('baseCritDmg'),
            UrlField::new('artworkUrl')
        ];
    }
}