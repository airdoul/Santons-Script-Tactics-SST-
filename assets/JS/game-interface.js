// =============== INTERFACE DE JEU - SANTONS SCRIPT TACTICS ===============

class GameInterface {
    constructor() {
        this.currentTab = 'team';
        this.team = [null, null, null];
        this.init();
    }

    init() {
        this.setupTabs();
        this.loadCharacters();
        this.updateTeamDisplay();
    }

    // =============== SYSTÈME D'ONGLETS ===============
    setupTabs() {
        const tabButtons = document.querySelectorAll('.tab-button');
        
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tabName = button.dataset.tab;
                this.switchTab(tabName);
            });
        });
    }

    switchTab(tabName) {
        // Désactiver l'onglet actuel
        document.querySelector('.tab-button.active')?.classList.remove('active');
        document.querySelector('.tab-panel.active')?.classList.remove('active');

        // Activer le nouvel onglet
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
        document.getElementById(`${tabName}-panel`).classList.add('active');

        this.currentTab = tabName;

        // Actions spécifiques par onglet
        switch(tabName) {
            case 'characters':
                this.loadCharacters();
                break;
            case 'battle':
                this.updateBattleTab();
                break;
            case 'history':
                this.loadMatchHistory();
                break;
        }
    }

    // =============== GESTION DE L'ÉQUIPE ===============
    updateTeamDisplay() {
        const slots = document.querySelectorAll('.character-slot');
        
        slots.forEach((slot, index) => {
            const character = this.team[index];
            const placeholder = slot.querySelector('.slot-placeholder');
            
            if (character) {
                // Afficher le personnage sélectionné
                placeholder.innerHTML = `
                    <div class="character-info">
                        <img src="/images/characters/${character.image}" alt="${character.name}" class="character-avatar">
                        <h4>${character.name}</h4>
                        <span class="character-role">${character.role}</span>
                        <button class="remove-character" data-slot="${index}">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                `;
                
                slot.classList.add('occupied');
                
                // Ajouter l'événement de suppression
                const removeBtn = slot.querySelector('.remove-character');
                removeBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.removeFromTeam(index);
                });
            } else {
                // Afficher le placeholder
                placeholder.innerHTML = `
                    <i class="fas fa-plus"></i>
                    <span>Héros ${index + 1}</span>
                `;
                slot.classList.remove('occupied');
                
                // Ajouter l'événement d'ajout
                slot.addEventListener('click', () => {
                    this.openCharacterSelection(index);
                });
            }
        });

        this.updateBattleTab();
    }

    addToTeam(character, slotIndex) {
        // Vérifier si le personnage n'est pas déjà dans l'équipe
        if (this.team.includes(character)) {
            this.showNotification('Ce personnage est déjà dans votre équipe !', 'warning');
            return;
        }

        this.team[slotIndex] = character;
        this.updateTeamDisplay();
        this.showNotification(`${character.name} ajouté à votre équipe !`, 'success');
    }

    removeFromTeam(slotIndex) {
        const character = this.team[slotIndex];
        this.team[slotIndex] = null;
        this.updateTeamDisplay();
        this.showNotification(`${character.name} retiré de votre équipe`, 'info');
    }

    // =============== CHARGEMENT DES PERSONNAGES ===============
    loadCharacters() {
        const grid = document.querySelector('.characters-grid');
        
        // Simuler le chargement des personnages
        setTimeout(() => {
            const characters = this.getAvailableCharacters();
            
            grid.innerHTML = '';
            characters.forEach(character => {
                const card = this.createCharacterCard(character);
                grid.appendChild(card);
            });
        }, 500);
    }

    getAvailableCharacters() {
        // Données temporaires - à remplacer par un appel API
        return [
            { id: 1, name: 'Guerrier', role: 'Tank', health: 100, attack: 70, defense: 90, image: 'warrior.png' },
            { id: 2, name: 'Mage', role: 'DPS', health: 60, attack: 95, defense: 40, image: 'mage.png' },
            { id: 3, name: 'Archer', role: 'DPS', health: 70, attack: 85, defense: 50, image: 'archer.png' },
            { id: 4, name: 'Prêtre', role: 'Soigneur', health: 80, attack: 50, defense: 60, image: 'priest.png' },
            { id: 5, name: 'Assassin', role: 'DPS', health: 55, attack: 100, defense: 30, image: 'assassin.png' },
            { id: 6, name: 'Paladin', role: 'Tank', health: 95, attack: 75, defense: 85, image: 'paladin.png' }
        ];
    }

    createCharacterCard(character) {
        const card = document.createElement('div');
        card.className = 'character-card';
        card.innerHTML = `
            <div class="character-avatar">
                <img src="/images/characters/${character.image}" alt="${character.name}" onerror="this.src='/images/placeholder.png'">
            </div>
            <h4>${character.name}</h4>
            <span class="character-role role-${character.role.toLowerCase()}">${character.role}</span>
            <div class="character-stats">
                <div class="stat">
                    <i class="fas fa-heart"></i> ${character.health}
                </div>
                <div class="stat">
                    <i class="fas fa-sword"></i> ${character.attack}
                </div>
                <div class="stat">
                    <i class="fas fa-shield-alt"></i> ${character.defense}
                </div>
            </div>
            <button class="select-character-btn" data-character="${character.id}">
                Sélectionner
            </button>
        `;

        // Ajouter l'événement de sélection
        const selectBtn = card.querySelector('.select-character-btn');
        selectBtn.addEventListener('click', () => {
            if (this.hasEmptySlot()) {
                const emptySlot = this.getFirstEmptySlot();
                this.addToTeam(character, emptySlot);
                this.switchTab('team');
            } else {
                this.showNotification('Votre équipe est complète !', 'warning');
            }
        });

        return card;
    }

    // =============== COMBAT ===============
    updateBattleTab() {
        const searchBtn = document.querySelector('.search-battle-btn');
        const infoText = document.querySelector('.battle-search .info-text');
        
        const teamSize = this.team.filter(char => char !== null).length;
        
        if (teamSize === 3) {
            searchBtn.disabled = false;
            infoText.textContent = 'Votre équipe est prête ! Trouvez un adversaire.';
        } else {
            searchBtn.disabled = true;
            infoText.textContent = `Sélectionnez ${3 - teamSize} personnage(s) de plus pour commencer`;
        }

        searchBtn.addEventListener('click', () => {
            if (!searchBtn.disabled) {
                this.startMatchmaking();
            }
        });
    }

    startMatchmaking() {
        this.showNotification('Recherche d\'un adversaire en cours...', 'info');
        
        // Simuler la recherche de match
        setTimeout(() => {
            this.showNotification('Adversaire trouvé ! Combat en cours...', 'success');
            // Ici on pourrait rediriger vers une page de combat
        }, 2000);
    }

    // =============== HISTORIQUE ===============
    loadMatchHistory() {
        const historyContainer = document.querySelector('.match-history');
        
        // Simuler le chargement de l'historique
        setTimeout(() => {
            // Pour l'instant, afficher un message vide
            historyContainer.innerHTML = '<p class="empty-history">Aucun combat joué pour le moment</p>';
        }, 300);
    }

    // =============== UTILITAIRES ===============
    hasEmptySlot() {
        return this.team.includes(null);
    }

    getFirstEmptySlot() {
        return this.team.indexOf(null);
    }

    openCharacterSelection(slotIndex) {
        // Basculer vers l'onglet personnages pour la sélection
        this.switchTab('characters');
        this.showNotification(`Sélectionnez un personnage pour la position ${slotIndex + 1}`, 'info');
    }

    showNotification(message, type = 'info') {
        // Créer une notification temporaire
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas fa-${this.getNotificationIcon(type)}"></i>
            <span>${message}</span>
        `;

        document.body.appendChild(notification);

        // Animation d'entrée
        setTimeout(() => notification.classList.add('show'), 10);

        // Suppression automatique
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => document.body.removeChild(notification), 300);
        }, 3000);
    }

    getNotificationIcon(type) {
        const icons = {
            'success': 'check-circle',
            'warning': 'exclamation-triangle',
            'error': 'times-circle',
            'info': 'info-circle'
        };
        return icons[type] || 'info-circle';
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    try {
        if (document.querySelector('.game-interface')) {
            window.gameInterface = new GameInterface();
            console.log('🎮 Interface de jeu Santons Script Tactics initialisée');
        }
    } catch (error) {
        console.warn('Erreur lors de l\'initialisation de l\'interface de jeu:', error);
    }
});
