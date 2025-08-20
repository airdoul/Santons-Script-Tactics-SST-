<?php

namespace App;

use Symfony\Bundle\FrameworkBundle\Kernel\MicroKernelTrait;
use Symfony\Component\HttpKernel\Kernel as BaseKernel;

class Kernel extends BaseKernel
{
    use MicroKernelTrait;
        public function __construct(string $environment, bool $debug)
    {
        // Définir le fuseau horaire par défaut
        date_default_timezone_set('Europe/Paris');
        
        parent::__construct($environment, $debug);
    }
}
