<?php

namespace App\Entity;

use App\Repository\RatingHistoryRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: RatingHistoryRepository::class)]
class RatingHistory
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'ratingHistories')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Player $player = null;

    #[ORM\Column]
    private ?int $delta = null;

    #[ORM\Column]
    private ?int $mmrAfter = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPlayer(): ?Player
    {
        return $this->player;
    }

    public function setPlayer(?Player $player): static
    {
        $this->player = $player;

        return $this;
    }

    public function getDelta(): ?int
    {
        return $this->delta;
    }

    public function setDelta(int $delta): static
    {
        $this->delta = $delta;

        return $this;
    }

    public function getMmrAfter(): ?int
    {
        return $this->mmrAfter;
    }

    public function setMmrAfter(int $mmrAfter): static
    {
        $this->mmrAfter = $mmrAfter;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): static
    {
        $this->createdAt = $createdAt;

        return $this;
    }
}
