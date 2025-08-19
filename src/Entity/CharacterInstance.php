<?php

namespace App\Entity;

use App\Repository\CharacterInstanceRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CharacterInstanceRepository::class)]
class CharacterInstance
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'characterInstances')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Team $team = null;

    #[ORM\ManyToOne(inversedBy: 'characterInstances')]
    #[ORM\JoinColumn(nullable: false)]
    private ?CharacterTemplate $template = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTeam(): ?Team
    {
        return $this->team;
    }

    public function setTeam(?Team $team): static
    {
        $this->team = $team;

        return $this;
    }

    public function getTemplate(): ?CharacterTemplate
    {
        return $this->template;
    }

    public function setTemplate(?CharacterTemplate $template): static
    {
        $this->template = $template;

        return $this;
    }
}
