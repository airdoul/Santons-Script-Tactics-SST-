<?php

namespace App\Entity;

use App\Repository\CharacterTemplateRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CharacterTemplateRepository::class)]
class CharacterTemplate
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 64)]
    private ?string $name = null;

    #[ORM\Column(length: 32)]
    private ?string $role = null;

    #[ORM\Column]
    private ?int $baseHP = null;

    #[ORM\Column]
    private ?int $baseAtk = null;

    #[ORM\Column]
    private ?float $baseDef = null;

    #[ORM\Column]
    private ?int $baseSpd = null;

    #[ORM\Column(nullable: true)]
    private ?int $baseHeal = null;

    #[ORM\Column]
    private ?float $baseCrit = null;

    #[ORM\Column]
    private ?float $baseCritDmg = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $artworkUrl = null;

    /**
     * @var Collection<int, CharacterInstance>
     */
    #[ORM\OneToMany(targetEntity: CharacterInstance::class, mappedBy: 'template')]
    private Collection $characterInstances;

    public function __construct()
    {
        $this->characterInstances = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getRole(): ?string
    {
        return $this->role;
    }

    public function setRole(string $role): static
    {
        $this->role = $role;

        return $this;
    }

    public function getBaseHP(): ?int
    {
        return $this->baseHP;
    }

    public function setBaseHP(int $baseHP): static
    {
        $this->baseHP = $baseHP;

        return $this;
    }

    public function getBaseAtk(): ?int
    {
        return $this->baseAtk;
    }

    public function setBaseAtk(int $baseAtk): static
    {
        $this->baseAtk = $baseAtk;

        return $this;
    }

    public function getBaseDef(): ?float
    {
        return $this->baseDef;
    }

    public function setBaseDef(float $baseDef): static
    {
        $this->baseDef = $baseDef;

        return $this;
    }

    public function getBaseSpd(): ?int
    {
        return $this->baseSpd;
    }

    public function setBaseSpd(int $baseSpd): static
    {
        $this->baseSpd = $baseSpd;

        return $this;
    }

    public function getBaseHeal(): ?int
    {
        return $this->baseHeal;
    }

    public function setBaseHeal(?int $baseHeal): static
    {
        $this->baseHeal = $baseHeal;

        return $this;
    }

    public function getBaseCrit(): ?float
    {
        return $this->baseCrit;
    }

    public function setBaseCrit(float $baseCrit): static
    {
        $this->baseCrit = $baseCrit;

        return $this;
    }

    public function getBaseCritDmg(): ?float
    {
        return $this->baseCritDmg;
    }

    public function setBaseCritDmg(float $baseCritDmg): static
    {
        $this->baseCritDmg = $baseCritDmg;

        return $this;
    }

    public function getArtworkUrl(): ?string
    {
        return $this->artworkUrl;
    }

    public function setArtworkUrl(?string $artworkUrl): static
    {
        $this->artworkUrl = $artworkUrl;

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
            $characterInstance->setTemplate($this);
        }

        return $this;
    }

    public function removeCharacterInstance(CharacterInstance $characterInstance): static
    {
        if ($this->characterInstances->removeElement($characterInstance)) {
            // set the owning side to null (unless already changed)
            if ($characterInstance->getTemplate() === $this) {
                $characterInstance->setTemplate(null);
            }
        }

        return $this;
    }
    public function __toString(): string
    {
        return $this->name ?? 'Character #' . $this->id;
    }
}
