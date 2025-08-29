// =============== SYSTÈME DE COMBAT 3D AVANCÉ ===============

class Combat3DSystem {
    constructor() {
        this.characters = new Map();
        this.animations = [];
        this.actionQueue = [];
        this.battleState = 'preparing'; // preparing, active, finished
        this.speedMultiplier = 1;
        this.pauseBackgroundVideos();
    }

    // =============== CRÉATION DE PERSONNAGES 3D ===============
    
    create3DCharacter(characterData, teamType, position) {
        const characterId = `${teamType}-${characterData.name}-${Date.now()}`;
        
        // Définir le style 3D selon la classe
        const characterStyle = this.get3DCharacterStyle(characterData.role || characterData.class);
        
        const characterElement = document.createElement('div');
        characterElement.className = `combat-character-3d ${teamType}-character-3d ${characterStyle.class}`;
        characterElement.id = characterId;
        characterElement.style.cssText = `
            position: absolute;
            width: 80px;
            height: 120px;
            transform-style: preserve-3d;
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
            z-index: 100;
        `;
        
        characterElement.innerHTML = `
            <div class="character-3d-container">
                <div class="character-body ${characterStyle.bodyClass}">
                    <div class="character-head ${characterStyle.headClass}">
                        <div class="character-face"></div>
                        ${characterStyle.headAccessory}
                    </div>
                    <div class="character-torso ${characterStyle.torsoClass}"></div>
                    <div class="character-arms ${characterStyle.armsClass}">
                        <div class="left-arm">
                            <div class="weapon-slot left-weapon">${characterStyle.leftWeapon}</div>
                        </div>
                        <div class="right-arm">
                            <div class="weapon-slot right-weapon">${characterStyle.rightWeapon}</div>
                        </div>
                    </div>
                    <div class="character-legs ${characterStyle.legsClass}"></div>
                </div>
                
                <div class="character-effects">
                    <div class="aura ${teamType}-aura"></div>
                    <div class="action-indicator"></div>
                </div>
                
                <div class="character-ui">
                    <div class="name-plate">${characterData.name}</div>
                    <div class="health-bar">
                        <div class="health-fill" style="width: 100%"></div>
                        <div class="health-text">${characterData.hp || 150}</div>
                    </div>
                    <div class="role-indicator">
                        <i class="${this.getRoleIcon(characterData.role || characterData.class)}"></i>
                    </div>
                </div>
            </div>
        `;
        
        // Positionner le personnage
        this.positionCharacter(characterElement, position, teamType);
        
        // Ajouter la position dans les data attributes pour les animations
        characterElement.dataset.position = position;
        characterElement.dataset.teamType = teamType;
        
        console.log(`🔧 DATASET SET: position=${position}, teamType=${teamType} pour ${characterData.name}`);
        
        // Stocker les données du personnage
        this.characters.set(characterId, {
            element: characterElement,
            data: characterData,
            team: teamType,
            position: position,
            currentHp: characterData.hp || 150,
            maxHp: characterData.hp || 150,
            isAlive: true,
            actionCooldown: 0
        });
        
        return characterElement;
    }
    
    get3DCharacterStyle(role) {
        const styles = {
            tank: {
                class: 'tank-character',
                bodyClass: 'warrior-body muscular',
                headClass: 'warrior-head bearded',
                headAccessory: '<div class="helmet warrior-helmet"></div>',
                torsoClass: 'heavy-armor plated',
                armsClass: 'muscular-arms',
                legsClass: 'armored-legs',
                leftWeapon: '<div class="shield large-shield">🛡️</div>',
                rightWeapon: '<div class="sword broadsword">⚔️</div>'
            },
            dps: {
                class: 'dps-character',
                bodyClass: 'elf-body agile',
                headClass: 'elf-head pointed-ears',
                headAccessory: '<div class="hood elf-hood"></div>',
                torsoClass: 'leather-armor flexible',
                armsClass: 'agile-arms',
                legsClass: 'light-boots',
                leftWeapon: '<div class="bow elven-bow">🏹</div>',
                rightWeapon: '<div class="dagger swift-blade">🗡️</div>'
            },
            support: {
                class: 'support-character',
                bodyClass: 'mage-body scholarly',
                headClass: 'mage-head wise',
                headAccessory: '<div class="wizard-hat pointy-hat">🎩</div>',
                torsoClass: 'mage-robes flowing',
                armsClass: 'scholarly-arms',
                legsClass: 'robe-bottom',
                leftWeapon: '<div class="tome spell-book">📚</div>',
                rightWeapon: '<div class="staff gandalf-staff">🪄</div>'
            }
        };
        
        return styles[role] || styles.tank;
    }
    
    positionCharacter(characterElement, position, teamType) {
        const battlefield = document.querySelector('.battlefield-arena');
        if (!battlefield) return;
        
        const battlefieldRect = battlefield.getBoundingClientRect();
        
        // Positions fixes avec espacement pour éviter les superpositions
        const positions = {
            player: [
                { x: 15, y: 75, name: 'front-left' },   // Avant-gauche joueur
                { x: 45, y: 85, name: 'back-center' },  // Arrière-centre joueur  
                { x: 75, y: 75, name: 'front-right' }   // Avant-droite joueur
            ],
            enemy: [
                { x: 25, y: 25, name: 'front-left' },   // Avant-gauche ennemi
                { x: 55, y: 15, name: 'back-center' },  // Arrière-centre ennemi
                { x: 85, y: 25, name: 'front-right' }   // Avant-droite ennemi
            ]
        };
        
        // Sécurité pour la position
        const maxPos = positions[teamType].length - 1;
        const safePosition = Math.min(position, maxPos);
        const pos = positions[teamType][safePosition];
        
        console.log(`📍 Positionnement ${teamType} position ${safePosition}: x=${pos.x}%, y=${pos.y}% (${pos.name})`);
        
        // Positionner le personnage
        characterElement.style.left = `${pos.x}%`;
        characterElement.style.top = `${pos.y}%`;
        characterElement.style.position = 'absolute';
        characterElement.style.zIndex = '100';
        
        // Animation d'entrée décalée
        characterElement.style.opacity = '0';
        characterElement.style.transform = 'translateY(50px) scale(0.8)';
        
        setTimeout(() => {
            characterElement.style.opacity = '1';
            characterElement.style.transform = 'translateY(0) scale(1)';
            characterElement.style.transition = 'all 0.5s ease';
        }, position * 400); // Plus de délai entre les apparitions
    }
    
    // =============== ANIMATIONS DE COMBAT AVANCÉES ===============
    
    async animateCharacterAction(attackerElement, targetElement, actionType) {
        const attacker = this.characters.get(attackerElement.id);
        const target = this.characters.get(targetElement.id);
        
        if (!attacker || !target) return;
        
        // Animation selon le type d'action
        switch (actionType) {
            case 'physical_attack':
                await this.animatePhysicalAttack(attackerElement, targetElement);
                break;
            case 'magic_spell':
                await this.animateMagicSpell(attackerElement, targetElement);
                break;
            case 'heal':
                await this.animateHeal(attackerElement, targetElement);
                break;
            case 'defend':
                await this.animateDefense(attackerElement);
                break;
        }
        
        // Mettre à jour l'interface après l'animation
        this.updateCharacterUI(target);
    }
    
    async animatePhysicalAttack(attacker, target) {
        const attackerRect = attacker.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        
        // Phase 1: Préparation
        attacker.classList.add('preparing-attack');
        await this.wait(500);
        
        // Phase 2: Charge vers la cible
        const deltaX = targetRect.left - attackerRect.left;
        const deltaY = targetRect.top - attackerRect.top;
        
        attacker.style.transform = `translate(${deltaX * 0.7}px, ${deltaY * 0.7}px) scale(1.1)`;
        attacker.classList.add('charging');
        
        await this.wait(400);
        
        // Phase 3: Impact
        this.createImpactEffect(target, '⚔️');
        target.classList.add('taking-damage');
        this.shakeElement(target);
        
        await this.wait(300);
        
        // Phase 4: Retour en position
        attacker.style.transform = '';
        attacker.classList.remove('preparing-attack', 'charging');
        target.classList.remove('taking-damage');
        
        await this.wait(300);
    }
    
    async animateMagicSpell(attacker, target) {
        // Phase 1: Incantation
        attacker.classList.add('casting-spell');
        this.createMagicAura(attacker);
        
        await this.wait(800);
        
        // Phase 2: Projectile magique
        const spellProjectile = this.createSpellProjectile(attacker, target);
        
        await this.wait(600);
        
        // Phase 3: Impact magique
        this.createMagicImpact(target);
        target.classList.add('magic-hit');
        
        spellProjectile.remove();
        attacker.classList.remove('casting-spell');
        
        await this.wait(500);
        
        target.classList.remove('magic-hit');
    }
    
    async animateHeal(caster, target) {
        caster.classList.add('casting-heal');
        
        // Effet de soin
        const healEffect = document.createElement('div');
        healEffect.className = 'heal-effect';
        healEffect.innerHTML = '💚✨🌱';
        healEffect.style.cssText = `
            position: absolute;
            top: -20px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 24px;
            animation: healFloat 2s ease-out forwards;
            pointer-events: none;
            z-index: 1000;
        `;
        
        target.appendChild(healEffect);
        target.classList.add('being-healed');
        
        await this.wait(2000);
        
        caster.classList.remove('casting-heal');
        target.classList.remove('being-healed');
        healEffect.remove();
    }
    
    async animateDefense(defender) {
        // Animation de défense
        defender.classList.add('defending');
        
        // Effet de bouclier
        const shieldEffect = document.createElement('div');
        shieldEffect.className = 'defense-effect';
        shieldEffect.innerHTML = '🛡️✨';
        shieldEffect.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 32px;
            animation: shieldPulse 1.5s ease-out forwards;
            pointer-events: none;
            z-index: 1000;
        `;
        
        defender.appendChild(shieldEffect);
        
        // Animation du personnage qui se met en position défensive
        defender.style.transform = 'scale(0.95) translateY(5px)';
        
        await this.wait(1500);
        
        defender.classList.remove('defending');
        defender.style.transform = 'scale(1) translateY(0)';
        shieldEffect.remove();
    }
    
    // =============== EFFETS VISUELS AVANCÉS ===============
    
    createImpactEffect(target, icon) {
        const effect = document.createElement('div');
        effect.className = 'impact-effect';
        effect.innerHTML = icon;
        effect.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 36px;
            animation: impactBurst 0.8s ease-out forwards;
            pointer-events: none;
            z-index: 1000;
        `;
        
        target.appendChild(effect);
        
        setTimeout(() => effect.remove(), 800);
    }
    
    createMagicAura(character) {
        const aura = character.querySelector('.aura');
        if (aura) {
            aura.style.animation = 'magicPulse 0.8s infinite';
            setTimeout(() => {
                aura.style.animation = '';
            }, 2000);
        }
    }
    
    createSpellProjectile(attacker, target) {
        const projectile = document.createElement('div');
        projectile.className = 'spell-projectile';
        projectile.innerHTML = '⚡';
        projectile.style.cssText = `
            position: fixed;
            font-size: 24px;
            z-index: 999;
            animation: spellTravel 0.6s linear forwards;
            pointer-events: none;
        `;
        
        const attackerRect = attacker.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        
        projectile.style.left = attackerRect.left + attackerRect.width / 2 + 'px';
        projectile.style.top = attackerRect.top + attackerRect.height / 2 + 'px';
        
        document.body.appendChild(projectile);
        
        // Animer vers la cible
        setTimeout(() => {
            projectile.style.left = targetRect.left + targetRect.width / 2 + 'px';
            projectile.style.top = targetRect.top + targetRect.height / 2 + 'px';
        }, 50);
        
        return projectile;
    }
    
    createMagicImpact(target) {
        const impact = document.createElement('div');
        impact.className = 'magic-impact';
        impact.innerHTML = '💥⚡🔥';
        impact.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 28px;
            animation: magicBurst 1s ease-out forwards;
            pointer-events: none;
            z-index: 1000;
        `;
        
        target.appendChild(impact);
        setTimeout(() => impact.remove(), 1000);
    }
    
    shakeElement(element) {
        element.style.animation = 'damageShake 0.4s ease-in-out';
        setTimeout(() => {
            element.style.animation = '';
        }, 400);
    }
    
    // =============== GESTION DE L'ÉTAT ===============
    
    updateCharacterUI(character) {
        const characterData = this.characters.get(character.element.id);
        if (!characterData) return;
        
        const healthBar = character.element.querySelector('.health-fill');
        const healthText = character.element.querySelector('.health-text');
        
        if (healthBar && healthText) {
            const healthPercent = (characterData.currentHp / characterData.maxHp) * 100;
            healthBar.style.width = `${healthPercent}%`;
            healthText.textContent = characterData.currentHp;
            
            // Couleur de la barre de vie selon le pourcentage
            if (healthPercent > 60) {
                healthBar.style.backgroundColor = '#4CAF50';
            } else if (healthPercent > 30) {
                healthBar.style.backgroundColor = '#FF9800';
            } else {
                healthBar.style.backgroundColor = '#F44336';
            }
        }
    }
    
    pauseBackgroundVideos() {
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            if (!video.paused) {
                video.pause();
                video.dataset.wasPlaying = 'true';
            }
        });
    }
    
    resumeBackgroundVideos() {
        const videos = document.querySelectorAll('video[data-was-playing="true"]');
        videos.forEach(video => {
            video.play();
            video.removeAttribute('data-was-playing');
        });
    }
    
    // =============== UTILITAIRES ===============
    
    wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms / this.speedMultiplier));
    }
    
    getRoleIcon(role) {
        const icons = {
            tank: 'fas fa-shield-alt',
            dps: 'fas fa-sword',
            support: 'fas fa-magic'
        };
        return icons[role] || icons.tank;
    }
    
    cleanup() {
        this.characters.clear();
        this.animations.forEach(animation => clearTimeout(animation));
        this.animations = [];
        this.resumeBackgroundVideos();
    }
}

// Export pour utilisation ES6 et global
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Combat3DSystem;
}

// Rendre disponible globalement
window.Combat3DSystem = Combat3DSystem;
