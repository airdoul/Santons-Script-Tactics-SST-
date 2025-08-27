// =============== SYSTÈME DE GESTION D'ÉQUIPE - SANTONS SCRIPT TACTICS ===============

class TeamManagement {
    constructor() {
        this.currentTab = 'team';
        this.playerTeam = null;
        this.availableCharacters = [];
        this.selectedSlot = null;
        this.init();
    }

    async init() {

        this.setupTabs();
        await this.loadPlayerTeam();
        await this.loadCharacters();
    }

    // =============== GESTION DES ONGLETS ===============
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
        // Désactiver tous les onglets
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
        
        // Activer l'onglet sélectionné
        const activeButton = document.querySelector(`[data-tab="${tabName}"]`);
        const activePanel = document.getElementById(`${tabName}-panel`);
        
        if (activeButton) activeButton.classList.add('active');
        if (activePanel) activePanel.classList.add('active');
        
        this.currentTab = tabName;

        
        // Actions spécifiques par onglet
        if (tabName === 'characters') {
            this.displayCharacters();
        } else if (tabName === 'battle') {
            this.updateBattleTab();
        }
    }

    // =============== GESTION DE L'ÉQUIPE ===============
    async loadPlayerTeam() {
        try {
            const response = await fetch('/api/matchmaking/team');
            const data = await response.json();
            
            console.log('loadPlayerTeam response:', data);
            
            this.playerTeam = data.team;
            this.updateTeamDisplay(data.characters);
            
            if (!this.playerTeam) {
                console.log('No team found, creating automatically...');
                await this.createTeamAutomatically();
            }
        } catch (error) {
            console.error('Erreur lors du chargement de l\'équipe:', error);
        }
    }

    async createTeamAutomatically() {
        try {
            const response = await fetch('/api/matchmaking/team/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({})
            });
            
            const data = await response.json();
            if (data.success) {
                this.playerTeam = data.team;
                this.showNotification('Équipe créée automatiquement !', 'success');

            }
        } catch (error) {
            console.error('Erreur lors de la création d\'équipe:', error);
        }
    }

    updateTeamDisplay(teamCharacters = []) {
        const slots = document.querySelectorAll('.character-slot');
        
        slots.forEach((slot, index) => {
            const character = teamCharacters[index] || null;
            const placeholder = slot.querySelector('.slot-placeholder');
            
            if (character) {
                placeholder.innerHTML = `
                    <div class="character-info">
                        <h4>${character.name}</h4>
                        <span class="character-role">${character.role}</span>
                        <div class="character-stats">
                            <small>HP: ${character.hp} | ATK: ${character.atk} | DEF: ${character.def}</small>
                        </div>
                        <button class="remove-character" data-character-id="${character.id}">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                `;
                
                slot.classList.add('occupied');
                
                // Événement de suppression
                const removeBtn = slot.querySelector('.remove-character');
                removeBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.removeCharacter(character.id);
                });
            } else {
                placeholder.innerHTML = `
                    <i class="fas fa-plus"></i>
                    <span>Héros ${index + 1}</span>
                `;
                slot.classList.remove('occupied');
                
                // Événement d'ajout
                slot.onclick = () => {
                    this.selectedSlot = index;
                    this.switchTab('characters');
                    this.showNotification('Sélectionnez un personnage à ajouter', 'info');
                };
            }
        });
        
        // Forcer la mise à jour du bouton bataille avec un délai plus long
        this.updateBattleTab();
        setTimeout(() => {
            this.updateBattleTab();
        }, 200);
        setTimeout(() => {
            this.updateBattleTab();
        }, 500);
    }

    // =============== GESTION DES PERSONNAGES ===============
    async loadCharacters() {
        try {
            const response = await fetch('/api/matchmaking/characters');
            this.availableCharacters = await response.json();

        } catch (error) {
            console.error('Erreur lors du chargement des personnages:', error);
        }
    }

    displayCharacters() {
        const container = document.querySelector('.characters-grid');
        if (!container || !this.availableCharacters.length) return;
        
        container.innerHTML = '';
        
        this.availableCharacters.forEach(character => {
            const card = document.createElement('div');
            card.className = 'character-card';
            card.innerHTML = `
                <div class="character-header">
                    <h3>${character.name}</h3>
                    <span class="character-role role-${character.role.toLowerCase()}">${character.role}</span>
                </div>
                <div class="character-stats">
                    <div class="stat-row">
                        <span>❤️ ${character.hp}</span>
                        <span>⚔️ ${character.atk}</span>
                        <span>🛡️ ${character.def}</span>
                    </div>
                    <div class="stat-row">
                        <span>💨 ${character.spd}</span>
                        <span>🔥 ${character.crit}%</span>
                        <span>💚 ${character.heal || 0}</span>
                    </div>
                </div>
                <button class="add-character-btn" data-character-id="${character.id}">
                    <i class="fas fa-plus"></i> Ajouter
                </button>
            `;
            
            // Événement d'ajout
            const addBtn = card.querySelector('.add-character-btn');
            addBtn.addEventListener('click', () => {
                this.addCharacter(character.id);
            });
            
            container.appendChild(card);
        });
    }

    async addCharacter(characterId) {
        try {
            const response = await fetch('/api/matchmaking/team/add-character', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ character_id: characterId })
            });
            
            const data = await response.json();
            
            if (data.success) {
                this.showNotification(data.message, 'success');
                await this.loadPlayerTeam(); // Recharger l'équipe
                this.switchTab('team'); // Retourner à l'onglet équipe
                
                // Forcer la mise à jour du bouton bataille après un délai
                setTimeout(() => {
                    this.updateBattleTab();
                }, 100);
            } else {
                this.showNotification(data.error, 'error');
            }
        } catch (error) {
            console.error('Erreur lors de l\'ajout du personnage:', error);
            this.showNotification('Erreur de connexion', 'error');
        }
    }

    async removeCharacter(characterId) {
        try {
            const response = await fetch('/api/matchmaking/team/remove-character', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ character_id: characterId })
            });
            
            const data = await response.json();
            
            if (data.success) {
                this.showNotification(data.message, 'info');
                await this.loadPlayerTeam(); // Recharger l'équipe
                
                // Forcer la mise à jour du bouton bataille après un délai
                setTimeout(() => {
                    this.updateBattleTab();
                }, 100);
            } else {
                this.showNotification(data.error, 'error');
            }
        } catch (error) {
            console.error('Erreur lors de la suppression du personnage:', error);
        }
    }

    // =============== COMBAT ===============
    updateBattleTab() {
        const searchBtn = document.getElementById('search-battle-btn');
        const infoText = document.querySelector('.battle-search .info-text');
        
        if (!searchBtn || !infoText) return;
        
        // Compter les personnages dans l'équipe
        const teamSize = document.querySelectorAll('.character-slot.occupied').length;
        
        if (teamSize === 3 && this.playerTeam) {
            console.log('ENABLING BUTTON: teamSize=3, playerTeam exists');
            searchBtn.disabled = false;
            searchBtn.classList.remove('disabled');
            searchBtn.removeAttribute('disabled');
            searchBtn.dataset.teamId = this.playerTeam.id;
            infoText.textContent = 'Votre équipe est prête ! Trouvez un adversaire.';
            console.log('Button state after enabling:', {
                disabled: searchBtn.disabled,
                hasDisabledAttr: searchBtn.hasAttribute('disabled'),
                hasDisabledClass: searchBtn.classList.contains('disabled')
            });
        } else {
            console.log('DISABLING BUTTON: teamSize=' + teamSize + ', hasPlayerTeam=' + !!this.playerTeam);
            searchBtn.disabled = true;
            searchBtn.classList.add('disabled');
            searchBtn.setAttribute('disabled', 'disabled');
            if (!this.playerTeam) {
                infoText.textContent = 'Chargement de votre équipe...';
            } else {
                infoText.textContent = `Ajoutez ${3 - teamSize} personnage(s) pour commencer`;
            }
        }
    }

    // =============== NOTIFICATIONS ===============
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas fa-${this.getNotificationIcon(type)}"></i>
            <span>${message}</span>
        `;
        
        // Styles inline pour assurer l'affichage
        notification.style.cssText = `
            position: fixed; top: 20px; right: 20px; z-index: 1000;
            padding: 12px 20px; border-radius: 5px; color: white;
            background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            transform: translateX(100%); transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Animation d'entrée
        setTimeout(() => notification.style.transform = 'translateX(0)', 10);
        
        // Suppression automatique
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    getNotificationIcon(type) {
        const icons = {
            'success': 'check-circle',
            'error': 'times-circle',
            'info': 'info-circle'
        };
        return icons[type] || 'info-circle';
    }
}

// Initialisation automatique
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.game-interface')) {
        window.teamManagement = new TeamManagement();

    }
});