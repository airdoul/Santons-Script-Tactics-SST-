<?php

namespace App\Entity;

use App\Repository\MatchEventRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MatchEventRepository::class)]
class MatchEvent
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'matchEvents')]
    #[ORM\JoinColumn(nullable: false)]
    private ?SSTmatch $sstmatch = null;

    #[ORM\Column]
    private ?int $turn = null;

    #[ORM\Column(length: 32)]
    private ?string $action = null;

    #[ORM\Column(length: 64)]
    private ?string $actorName = null;

    #[ORM\Column(length: 64, nullable: true)]
    private ?string $targetName = null;

    #[ORM\Column(nullable: true)]
    private ?int $amount = null;

    #[ORM\Column]
    private ?bool $isCrit = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSstmatch(): ?SSTmatch
    {
        return $this->sstmatch;
    }

    public function setSstmatch(?SSTmatch $sstmatch): static
    {
        $this->sstmatch = $sstmatch;

        return $this;
    }

    public function getTurn(): ?int
    {
        return $this->turn;
    }

    public function setTurn(int $turn): static
    {
        $this->turn = $turn;

        return $this;
    }

    public function getAction(): ?string
    {
        return $this->action;
    }

    public function setAction(string $action): static
    {
        $this->action = $action;

        return $this;
    }

    public function getActorName(): ?string
    {
        return $this->actorName;
    }

    public function setActorName(string $actorName): static
    {
        $this->actorName = $actorName;

        return $this;
    }

    public function getTargetName(): ?string
    {
        return $this->targetName;
    }

    public function setTargetName(?string $targetName): static
    {
        $this->targetName = $targetName;

        return $this;
    }

    public function getAmount(): ?int
    {
        return $this->amount;
    }

    public function setAmount(?int $amount): static
    {
        $this->amount = $amount;

        return $this;
    }

    public function isCrit(): ?bool
    {
        return $this->isCrit;
    }

    public function setIsCrit(bool $isCrit): static
    {
        $this->isCrit = $isCrit;

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
