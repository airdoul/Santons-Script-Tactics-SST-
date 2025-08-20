<?php

namespace App\Entity;

use App\Repository\TeamRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TeamRepository::class)]
class Team
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'teams')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Player $player = null;

    #[ORM\Column(length: 64)]
    private ?string $name = null;

    #[ORM\Column]
    private ?bool $isLocked = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    /**
     * @var Collection<int, CharacterInstance>
     */
    #[ORM\OneToMany(targetEntity: CharacterInstance::class, mappedBy: 'team')]
    private Collection $characterInstances;

    /**
     * @var Collection<int, QueueTicket>
     */
    #[ORM\OneToMany(targetEntity: QueueTicket::class, mappedBy: 'team')]
    private Collection $yes;

    public function __construct()
    {
        $this->characterInstances = new ArrayCollection();
        $this->yes = new ArrayCollection();
    }

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

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function isLocked(): ?bool
    {
        return $this->isLocked;
    }

    public function setIsLocked(bool $isLocked): static
    {
        $this->isLocked = $isLocked;

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
     * @return Collection<int, CharacterInstance>
     */
    public function getCharacterInstances(): Collection
    {
        return $this->characterInstances;
    }

    public function addCharacterInstance(CharacterInstance $characterInstance): static
    {
        if (!$this->characterInstances->contains($characterInstance)) {
            $this->characterInstances->add($characterInstance);
            $characterInstance->setTeam($this);
        }

        return $this;
    }

    public function removeCharacterInstance(CharacterInstance $characterInstance): static
    {
        if ($this->characterInstances->removeElement($characterInstance)) {
            // set the owning side to null (unless already changed)
            if ($characterInstance->getTeam() === $this) {
                $characterInstance->setTeam(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, QueueTicket>
     */
    public function getYes(): Collection
    {
        return $this->yes;
    }

    public function addYe(QueueTicket $ye): static
    {
        if (!$this->yes->contains($ye)) {
            $this->yes->add($ye);
            $ye->setTeam($this);
        }

        return $this;
    }

    public function removeYe(QueueTicket $ye): static
    {
        if ($this->yes->removeElement($ye)) {
            // set the owning side to null (unless already changed)
            if ($ye->getTeam() === $this) {
                $ye->setTeam(null);
            }
        }

        return $this;
    }
        public function __toString(): string
    {
        return $this->name ?? 'Team #' . $this->id;
    }
}
