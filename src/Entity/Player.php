<?php

namespace App\Entity;

use App\Repository\PlayerRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

#[ORM\Entity(repositoryClass: PlayerRepository::class)]
#[UniqueEntity(fields: ['email'], message: 'There is already an account with this email')]
class Player implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, unique: true)]
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

    #[ORM\Column]
    private array $roles = [];

    #[ORM\Column]
    private ?int $MMR = null;

    public function __construct()
    {
        $this->teams = new ArrayCollection();
        $this->queueTickets = new ArrayCollection();
        $this->ratingHistories = new ArrayCollection();
        $this->createdAt = new \DateTimeImmutable();
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

    // Méthodes UserInterface
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    public function getRoles(): array
    {
        $roles = $this->roles;
        // On ajoute ROLE_USER par défaut
        $roles[] = 'ROLE_USER';
        return array_unique($roles);
    }

    public function eraseCredentials(): void
    {
        // pour supp des données sensible si il faut
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
            if ($ratingHistory->getPlayer() === $this) {
                $ratingHistory->setPlayer(null);
            }
        }
        return $this;
    }

    public function __toString(): string
    {
        return $this->username ?? $this->email ?? 'Player #' . $this->id;
    }

    public function setRoles(array $roles): static
    {
        $this->roles = $roles;

        return $this;
    }

    public function getMMR(): ?int
    {
        return $this->MMR;
    }

    public function setMMR(int $MMR): static
    {
        $this->MMR = $MMR;

        return $this;
    }
}