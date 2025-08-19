<?php

namespace App\Entity;

use App\Repository\PlayerRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PlayerRepository::class)]
class Player
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $email = null;

    #[ORM\Column(length: 64)]
    private ?string $username = null;

    #[ORM\Column(length: 255)]
    private ?string $password = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    /**
     * @var Collection<int, Team>
     */
    #[ORM\OneToMany(targetEntity: Team::class, mappedBy: 'player')]
    private Collection $teams;

    /**
     * @var Collection<int, QueueTicket>
     */
    #[ORM\OneToMany(targetEntity: QueueTicket::class, mappedBy: 'player')]
    private Collection $queueTickets;

    /**
     * @var Collection<int, RatingHistory>
     */
    #[ORM\OneToMany(targetEntity: RatingHistory::class, mappedBy: 'player', orphanRemoval: true)]
    private Collection $ratingHistories;

    public function __construct()
    {
        $this->teams = new ArrayCollection();
        $this->queueTickets = new ArrayCollection();
        $this->ratingHistories = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): static
    {
        $this->username = $username;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;

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

    /**
     * @return Collection<int, Team>
     */
    public function getTeams(): Collection
    {
        return $this->teams;
    }

    public function addTeam(Team $team): static
    {
        if (!$this->teams->contains($team)) {
            $this->teams->add($team);
            $team->setPlayer($this);
        }

        return $this;
    }

    public function removeTeam(Team $team): static
    {
        if ($this->teams->removeElement($team)) {
            // set the owning side to null (unless already changed)
            if ($team->getPlayer() === $this) {
                $team->setPlayer(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, QueueTicket>
     */
    public function getQueueTickets(): Collection
    {
        return $this->queueTickets;
    }

    public function addQueueTicket(QueueTicket $queueTicket): static
    {
        if (!$this->queueTickets->contains($queueTicket)) {
            $this->queueTickets->add($queueTicket);
            $queueTicket->setPlayer($this);
        }

        return $this;
    }

    public function removeQueueTicket(QueueTicket $queueTicket): static
    {
        if ($this->queueTickets->removeElement($queueTicket)) {
            // set the owning side to null (unless already changed)
            if ($queueTicket->getPlayer() === $this) {
                $queueTicket->setPlayer(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, RatingHistory>
     */
    public function getRatingHistories(): Collection
    {
        return $this->ratingHistories;
    }

    public function addRatingHistory(RatingHistory $ratingHistory): static
    {
        if (!$this->ratingHistories->contains($ratingHistory)) {
            $this->ratingHistories->add($ratingHistory);
            $ratingHistory->setPlayer($this);
        }

        return $this;
    }

    public function removeRatingHistory(RatingHistory $ratingHistory): static
    {
        if ($this->ratingHistories->removeElement($ratingHistory)) {
            // set the owning side to null (unless already changed)
            if ($ratingHistory->getPlayer() === $this) {
                $ratingHistory->setPlayer(null);
            }
        }

        return $this;
    }
}
