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
        document.querySelector(`[data-tab="${tabName}"]`)?.classList.add('active');
        document.getElementById(`${tabName}-panel`)?.classList.add('active');

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
    // updateTeamDisplay() {
    //     const slots = document.querySelectorAll('.character-slot');
        
    //     slots.forEach((slot, index) => {
    //         const character = this.team[index];
    //         const placeholder = slot.querySelector('.slot-placeholder');
            
    //         if (character) {
    //             placeholder.innerHTML = `
    //                 <div class="character-info">
    //                     <h4>${character.name}</h4>
    //                     <span class="character-role">${character.role}</span>
    //                     <button class="remove-character" data-slot="${index}">
    //                         <i class="fas fa-times"></i>
    //                     </button>
    //                 </div>
    //             `;
                
    //             slot.classList.add('occupied');
                
    //             const removeBtn = slot.querySelector('.remove-character');
    //             removeBtn?.addEventListener('click', (e) => {
    //                 e.stopPropagation();
    //                 this.removeFromTeam(index);
    //             });
    //         } else {
    //             placeholder.innerHTML = `
    //                 <i class="fas fa-plus"></i>
    //                 <span>Héros ${index + 1}</span>
    //             `;
    //             slot.classList.remove('occupied');
                
    //             // Ajouter l'événement d'ajout
    //             slot.onclick = () => this.openCharacterSelection(index);
    //         }
    //     });

    //     this.updateBattleTab();
    // }

    addToTeam(character, slotIndex) {
        if (this.team[slotIndex] === null) {
            this.team[slotIndex] = character;
            this.updateTeamDisplay();
            this.showNotification(`${character.name} ajouté à l'équipe !`, 'success');
        }
    }

    removeFromTeam(slotIndex) {
        if (this.team[slotIndex] !== null) {
            const character = this.team[slotIndex];
            this.team[slotIndex] = null;
            this.updateTeamDisplay();
            this.showNotification(`${character.name} retiré de l'équipe`, 'info');
        }
    }

    // =============== PERSONNAGES ===============
    loadCharacters() {
        const container = document.querySelector('.characters-grid');
        if (!container) return;

        // Simuler le chargement
        container.innerHTML = '<p class="loading-text">Chargement des personnages...</p>';

        // Personnages d'exemple
        const sampleCharacters = [
            { id: 1, name: 'Garde Royal', role: 'Tank', power: 150 },
            { id: 2, name: 'Archer Mystique', role: 'DPS', power: 180 },
            { id: 3, name: 'Clerc Divin', role: 'Support', power: 120 },
            { id: 4, name: 'Mage de Bataille', role: 'DPS', power: 200 },
            { id: 5, name: 'Paladin', role: 'Tank', power: 170 },
            { id: 6, name: 'Druide', role: 'Support', power: 140 }
        ];

        setTimeout(() => {
            container.innerHTML = '';
            sampleCharacters.forEach(character => {
                container.appendChild(this.createCharacterCard(character));
            });
        }, 500);
    }

    createCharacterCard(character) {
        const card = document.createElement('div');
        card.className = 'character-card';
        card.innerHTML = `
            <div class="character-header">
                <h3>${character.name}</h3>
                <span class="character-role role-${character.role.toLowerCase()}">${character.role}</span>
            </div>
            <div class="character-stats">
                <div class="stat">
                    <span class="stat-label">Puissance</span>
                    <span class="stat-value">${character.power}</span>
                </div>
            </div>
            <button class="add-character-btn" ${this.hasEmptySlot() ? '' : 'disabled'}>
                <i class="fas fa-plus"></i> Ajouter
            </button>
        `;

        const addBtn = card.querySelector('.add-character-btn');
        addBtn?.addEventListener('click', () => {
            if (this.hasEmptySlot()) {
                const slotIndex = this.getFirstEmptySlot();
                this.addToTeam(character, slotIndex);
            } else {
                this.showNotification('Votre équipe est complète !', 'warning');
            }
        });

        return card;
    }

    // =============== COMBAT ===============
    // updateBattleTab() {
    //     const searchBtn = document.querySelector('.search-battle-btn');
    //     const infoText = document.querySelector('.battle-search .info-text');
        
    //     if (!searchBtn || !infoText) return;
        
    //     const teamSize = this.team.filter(char => char !== null).length;
        
    //     if (teamSize === 3) {
    //         searchBtn.disabled = false;
    //         infoText.textContent = 'Votre équipe est prête ! Trouvez un adversaire.';
    //     } else {
    //         searchBtn.disabled = true;
    //         infoText.textContent = `Sélectionnez ${3 - teamSize} personnage(s) de plus pour commencer`;
    //     }
    // }

    // =============== HISTORIQUE ===============
    async loadMatchHistory() {
        const historyContainer = document.querySelector('.match-history');
        if (!historyContainer) return;
        
        // Afficher un indicateur de chargement
        historyContainer.innerHTML = '<p class="loading-text"><i class="fas fa-spinner fa-spin"></i> Chargement de l\'historique...</p>';
        
        try {
            const response = await fetch('/api/matchmaking/history');
            const data = await response.json();
            
            if (!data.success || data.matches.length === 0) {
                historyContainer.innerHTML = '<p class="empty-history">Aucun combat joué pour le moment</p>';
                return;
            }
            
            // Construire l'historique
            let historyHTML = `
                <div class="history-stats">
                    <div class="stat-item">
                        <span class="stat-label">Total</span>
                        <span class="stat-value">${data.total_matches}</span>
                    </div>
                    <div class="stat-item wins">
                        <span class="stat-label">Victoires</span>
                        <span class="stat-value">${data.wins}</span>
                    </div>
                    <div class="stat-item losses">
                        <span class="stat-label">Défaites</span>
                        <span class="stat-value">${data.losses}</span>
                    </div>
                    <div class="stat-item winrate">
                        <span class="stat-label">Taux de victoire</span>
                        <span class="stat-value">${data.total_matches > 0 ? Math.round((data.wins / data.total_matches) * 100) : 0}%</span>
                    </div>
                </div>
                <div class="history-list">
            `;
            
            data.matches.forEach(match => {
                const resultClass = match.is_winner ? 'victory' : 'defeat';
                const resultIcon = match.is_winner ? 'trophy' : 'times';
                const resultText = match.is_winner ? 'VICTOIRE' : 'DÉFAITE';
                
                historyHTML += `
                    <div class="match-item ${resultClass}">
                        <div class="match-result">
                            <i class="fas fa-${resultIcon}"></i>
                            <span class="result-text">${resultText}</span>
                        </div>
                        <div class="match-details">
                            <div class="teams">
                                <div class="team player-team">
                                    <span class="team-name">${match.player_team}</span>
                                    <span class="team-power">${Math.round(match.player_power)}</span>
                                </div>
                                <div class="vs">VS</div>
                                <div class="team opponent-team">
                                    <span class="team-name">${match.opponent_team}</span>
                                    <span class="team-power">${Math.round(match.opponent_power)}</span>
                                </div>
                            </div>
                            <div class="opponent-info">
                                <span class="opponent-name">${match.opponent_player}</span>
                            </div>
                        </div>
                        <div class="match-meta">
                            <span class="match-date">${match.finished_at}</span>
                            <span class="match-duration">${match.duration}</span>
                        </div>
                    </div>
                `;
            });
            
            historyHTML += '</div>';
            historyContainer.innerHTML = historyHTML;
            
        } catch (error) {
            console.error('Erreur lors du chargement de l\'historique:', error);
            historyContainer.innerHTML = '<p class="error-text">Erreur lors du chargement de l\'historique</p>';
        }
    }

    // =============== UTILITAIRES ===============
    hasEmptySlot() {
        return this.team.includes(null);
    }

    getFirstEmptySlot() {
        return this.team.indexOf(null);
    }

    openCharacterSelection(slotIndex) {
        this.switchTab('characters');
        this.showNotification(`Sélectionnez un personnage pour la position ${slotIndex + 1}`, 'info');
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas fa-${this.getNotificationIcon(type)}"></i>
            <span>${message}</span>
        `;

        document.body.appendChild(notification);

        setTimeout(() => notification.classList.add('show'), 10);

        setTimeout(() => {
            notification.classList.remove('show');
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
            console.log(' Interface de jeu Santons Script Tactics initialisée');
        }
    } catch (error) {
        console.warn('Erreur lors de l\'initialisation de l\'interface de jeu:', error);
    }
});