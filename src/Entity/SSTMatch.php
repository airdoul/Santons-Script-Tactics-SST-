<?php

namespace App\Entity;

use App\Repository\SSTMatchRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SSTMatchRepository::class)]
class SSTMatch
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?Team $teamA = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?Team $teamB = null;

    #[ORM\ManyToOne]
    private ?Team $winnerTeam = null;

    #[ORM\Column(length: 32)]
    private ?string $status = null;

    #[ORM\Column(nullable: true)]
    private ?int $rngSeed = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $startedAt = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $finishedAt = null;

    #[ORM\Column(nullable: true)]
    private ?float $teamAPower = null;

    #[ORM\Column(nullable: true)]
    private ?float $teamBPower = null;

    #[ORM\Column(nullable: true)]
    private ?float $teamAPercent = null;

    #[ORM\Column(nullable: true)]
    private ?bool $randomDraw = null;

    /**
     * @var Collection<int, MatchEvent>
     */
    #[ORM\OneToMany(targetEntity: MatchEvent::class, mappedBy: 'sstmatch', orphanRemoval: true)]
    private Collection $matchEvents;

    public function __construct()
    {
        $this->matchEvents = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTeamA(): ?Team
    {
        return $this->teamA;
    }

    public function setTeamA(?Team $teamA): static
    {
        $this->teamA = $teamA;

        return $this;
    }

    public function getTeamB(): ?Team
    {
        return $this->teamB;
    }

    public function setTeamB(?Team $teamB): static
    {
        $this->teamB = $teamB;

        return $this;
    }

    public function getWinnerTeam(): ?Team
    {
        return $this->winnerTeam;
    }

    public function setWinnerTeam(?Team $winnerTeam): static
    {
        $this->winnerTeam = $winnerTeam;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): static
    {
        $this->status = $status;

        return $this;
    }

    public function getRngSeed(): ?int
    {
        return $this->rngSeed;
    }

    public function setRngSeed(?int $rngSeed): static
    {
        $this->rngSeed = $rngSeed;

        return $this;
    }

    public function getStartedAt(): ?\DateTimeImmutable
    {
        return $this->startedAt;
    }

    public function setStartedAt(?\DateTimeImmutable $startedAt): static
    {
        $this->startedAt = $startedAt;

        return $this;
    }

    public function getFinishedAt(): ?\DateTimeImmutable
    {
        return $this->finishedAt;
    }

    public function setFinishedAt(?\DateTimeImmutable $finishedAt): static
    {
        $this->finishedAt = $finishedAt;

        return $this;
    }

    public function getTeamAPower(): ?float
    {
        return $this->teamAPower;
    }

    public function setTeamAPower(?float $teamAPower): static
    {
        $this->teamAPower = $teamAPower;

        return $this;
    }

    public function getTeamBPower(): ?float
    {
        return $this->teamBPower;
    }

    public function setTeamBPower(?float $teamBPower): static
    {
        $this->teamBPower = $teamBPower;

        return $this;
    }

    public function getTeamAPercent(): ?float
    {
        return $this->teamAPercent;
    }

    public function setTeamAPercent(?float $teamAPercent): static
    {
        $this->teamAPercent = $teamAPercent;

        return $this;
    }

    public function isRandomDraw(): ?bool
    {
        return $this->randomDraw;
    }

    public function setRandomDraw(?bool $randomDraw): static
    {
        $this->randomDraw = $randomDraw;

        return $this;
    }

    /**
     * @return Collection<int, MatchEvent>
     */
    public function getMatchEvents(): Collection
    {
        return $this->matchEvents;
    }

    public function addMatchEvent(MatchEvent $matchEvent): static
    {
        if (!$this->matchEvents->contains($matchEvent)) {
            $this->matchEvents->add($matchEvent);
            $matchEvent->setSstmatch($this);
        }

        return $this;
    }

    public function removeMatchEvent(MatchEvent $matchEvent): static
    {
        if ($this->matchEvents->removeElement($matchEvent)) {
            // set the owning side to null (unless already changed)
            if ($matchEvent->getSstmatch() === $this) {
                $matchEvent->setSstmatch(null);
            }
        }

        return $this;
    }
}
