// =============== INTERFACE DE JEU - SANTONS SCRIPT TACTICS ===============

class GameInterface {
    constructor() {
        this.currentTab = 'team';
        this.init();
    }

    init() {
        this.setupTabs();
        this.setupRankingFilters();
        this.loadCharacters();
        this.checkUrlTab(); // Vérifier si un onglet est spécifié dans l'URL
    }

    // =============== SYSTÈME D'ONGLETS ===============
    checkUrlTab() {
        // Vérifier si un onglet est spécifié dans l'URL (fragment ou paramètre)
        const urlFragment = window.location.hash.replace('#', '');
        const urlParams = new URLSearchParams(window.location.search);
        const tabParam = urlParams.get('tab');
        
        const targetTab = urlFragment || tabParam;
        
        if (targetTab && ['team', 'characters', 'battle', 'ranking', 'history'].includes(targetTab)) {
            this.switchTab(targetTab);
        }
    }
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

        if (tabName === 'ranking') {
            this.loadRanking(); // AJOUTEZ CETTE LIGNE
        }
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

    // =============== PERSONNAGES ===============
    loadCharacters() {
        const container = document.querySelector('.characters-grid');
        if (!container) return;

        // Simuler le chargement
        container.innerHTML = '<p class="loading-text">Chargement des personnages...</p>';

        // Personnages d'exemple
        const sampleCharacters = [
            { id: 1, name: 'Garde Royal', role: 'Tank', power: 150,  },
            { id: 2, name: 'Archer Mystique', role: 'DPS', power: 180,  },
            { id: 3, name: 'Clerc Divin', role: 'Support', power: 120,  },
            { id: 4, name: 'Mage de Bataille', role: 'DPS', power: 200,  },
            { id: 5, name: 'Paladin', role: 'Tank', power: 170,  },
            { id: 6, name: 'Druide', role: 'Support', power: 140,  }
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
        `;

        return card;
    }

    // =============== COMBAT ===============
    // updateBattleTab() {
    //     const searchBtn = document.querySelector('.search-battle-btn');
    //     const infoText = document.querySelector('.battle-search .info-text');
        
    //     if (!searchBtn || !infoText) return;
        
        
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
                            <div class="match-info">
                                <span class="match-date">${match.finished_at}</span>
                                <span class="match-duration">${match.duration}</span>
                            </div>
                            <div class="match-actions">
                                <button class="btn btn-recap" onclick="gameInterface.showMatchRecap(${match.id})" title="Voir le recap du combat">
                                    <i class="fas fa-eye"></i>
                                    <span>Recap</span>
                                </button>
                            </div>
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

    // =============== CLASSEMENT ===============

    setupRankingFilters() {
        const filterButtons = document.querySelectorAll('.ranking-btn');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Désactiver tous les boutons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Activer le bouton cliqué
                button.classList.add('active');
                
                // Charger le classement avec le filtre
                const filter = button.dataset.filter;
                this.loadRanking(filter);
            });
        });
    }

    async loadRanking(filter = 'global') {
        const rankingContainer = document.querySelector('#ranking-list');
        if (!rankingContainer) return;
        
        // Afficher un indicateur de chargement
        rankingContainer.innerHTML = '<p class="loading-text"><i class="fas fa-spinner fa-spin"></i> Chargement du classement...</p>';
        
        try {
            const response = await fetch(`/api/matchmaking/ranking?filter=${filter}`);
            const data = await response.json();
            
            if (!data.success || data.ranking.length === 0) {
                let emptyMessage = 'Aucun joueur classé pour le moment';
                if (filter === 'weekly') emptyMessage = 'Aucun match joué cette semaine';
                if (filter === 'monthly') emptyMessage = 'Aucun match joué ce mois-ci';
                
                rankingContainer.innerHTML = `<p class="empty-ranking">${emptyMessage}</p>`;
                return;
            }
            
            // Mettre à jour la position du joueur actuel
            this.updateUserPosition(data.current_player_position, data.current_player_mmr);
            
            // Construire le classement
            let rankingHTML = `<div class="top-players">`;
            
            // Top 3 avec design spécial
            for (let i = 0; i < Math.min(3, data.ranking.length); i++) {
                const player = data.ranking[i];
                const topClass = i === 0 ? 'top-1' : i === 1 ? 'top-2' : 'top-3';
                const rankClass = i === 0 ? 'gold' : i === 1 ? 'silver' : 'bronze';
                const rankIcon = i === 0 ? 'crown' : i === 1 ? 'medal' : 'award';
                const changeClass = player.mmr_change >= 0 ? 'positive' : 'negative';
                const changeSign = player.mmr_change >= 0 ? '+' : '';
                
                rankingHTML += `
                    <div class="ranking-entry ${topClass} ${player.is_current_player ? 'current-player' : ''}">
                        <span class="rank ${rankClass}"><i class="fas fa-${rankIcon}"></i> ${player.position}</span>
                        <div class="player-info">
                            <span class="player-name">${player.username}</span>
                            <div class="player-stats">
                                <span class="rating"><i class="fas fa-star"></i> ${player.mmr}</span>
                                <span class="wins"><i class="fas fa-trophy"></i> ${player.wins}V</span>
                                <span class="losses"><i class="fas fa-times"></i> ${player.losses}D</span>
                            </div>
                        </div>
                        <span class="rating-change ${changeClass}">${changeSign}${player.mmr_change}</span>
                    </div>
                `;
            }
            
            rankingHTML += '</div><div class="other-players">';
            
            // Autres joueurs (position 4+)
            for (let i = 3; i < data.ranking.length; i++) {
                const player = data.ranking[i];
                const changeClass = player.mmr_change >= 0 ? 'positive' : 'negative';
                const changeSign = player.mmr_change >= 0 ? '+' : '';
                
                rankingHTML += `
                    <div class="ranking-entry ${player.is_current_player ? 'current-player' : ''}">
                        <span class="rank">#${player.position}</span>
                        <div class="player-info">
                            <span class="player-name">${player.username}</span>
                            <div class="player-stats">
                                <span class="rating"><i class="fas fa-star"></i> ${player.mmr}</span>
                                <span class="wins"><i class="fas fa-trophy"></i> ${player.wins}V</span>
                                <span class="losses"><i class="fas fa-times"></i> ${player.losses}D</span>
                            </div>
                        </div>
                        <span class="rating-change ${changeClass}">${changeSign}${player.mmr_change}</span>
                    </div>
                `;
                
                // Afficher seulement les 10 premiers, puis un bouton "Voir plus"
                if (i >= 9) {
                    rankingHTML += `
                        <div class="ranking-more">
                            <button class="load-more-btn" onclick="gameInterface.loadMoreRanking(${i + 1})">
                                <i class="fas fa-chevron-down"></i> Voir plus de joueurs
                            </button>
                        </div>
                    `;
                    break;
                }
            }
            
            rankingHTML += '</div>';
            rankingContainer.innerHTML = rankingHTML;
            
        } catch (error) {
            console.error('Erreur lors du chargement du classement:', error);
            rankingContainer.innerHTML = '<p class="error-text">Erreur lors du chargement du classement</p>';
        }
    }

    updateUserPosition(position, mmr) {
        const userPositionElement = document.querySelector('.position-number');
        const userRatingElement = document.querySelector('.rating-text');
        
        if (userPositionElement) {
            userPositionElement.textContent = `#${position || '?'}`;
        }
        
        if (userRatingElement) {
            userRatingElement.textContent = `${mmr || 1200} pts`;
        }
    }

    loadMoreRanking(startIndex) {
        console.log('Charger plus de joueurs à partir de:', startIndex);
        this.showNotification('Fonctionnalité bientôt disponible !', 'info');
    }

    // =============== SYSTÈME DE RECAP DE COMBAT ===============
    async showMatchRecap(matchId) {
        try {
            const response = await fetch(`/api/matchmaking/match/${matchId}/events`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const matchData = await response.json();
            this.displayMatchRecapModal(matchData);
            
        } catch (error) {
            console.error('Erreur lors du chargement du recap:', error);
            this.showNotification('Erreur lors du chargement du recap du combat', 'error');
        }
    }

    displayMatchRecapModal(matchData) {
        // Créer le contenu du modal
        const modalHTML = `
            <div class="modal-overlay" id="match-recap-modal">
                <div class="modal-content match-recap-modal">
                    <div class="modal-header">
                        <h2><i class="fas fa-scroll"></i> Recap du Combat</h2>
                        <button class="modal-close" id="modal-close-btn">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    
                    <div class="modal-body">
                        <div class="match-summary">
                            <div class="teams-overview">
                                <div class="team-card ${matchData.winner_team === matchData.team_a.name ? 'winner' : 'loser'}">
                                    <div class="team-name">${matchData.team_a.name}</div>
                                    <div class="player-name">${matchData.team_a.player}</div>
                                    <div class="team-mmr">${matchData.team_a.mmr} MMR</div>
                                    ${matchData.winner_team === matchData.team_a.name ? '<div class="victory-badge"><i class="fas fa-crown"></i> VICTOIRE</div>' : ''}
                                </div>
                                
                                <div class="vs-separator">
                                    <span>VS</span>
                                </div>
                                
                                <div class="team-card ${matchData.winner_team === matchData.team_b.name ? 'winner' : 'loser'}">
                                    <div class="team-name">${matchData.team_b.name}</div>
                                    <div class="player-name">${matchData.team_b.player}</div>
                                    <div class="team-mmr">${matchData.team_b.mmr} MMR</div>
                                    ${matchData.winner_team === matchData.team_b.name ? '<div class="victory-badge"><i class="fas fa-crown"></i> VICTOIRE</div>' : ''}
                                </div>
                            </div>
                            
                            <div class="match-info">
                                <div class="info-item">
                                    <i class="fas fa-calendar"></i>
                                    <span>Début: ${matchData.started_at || 'N/A'}</span>
                                </div>
                                <div class="info-item">
                                    <i class="fas fa-flag-checkered"></i>
                                    <span>Fin: ${matchData.finished_at || 'N/A'}</span>
                                </div>
                                <div class="info-item">
                                    <i class="fas fa-info-circle"></i>
                                    <span>Statut: ${matchData.status}</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="combat-events">
                            <h3><i class="fas fa-list"></i> Déroulement du Combat</h3>
                            <div class="events-timeline">
                                ${this.generateEventsHTML(matchData.events)}
                            </div>
                        </div>
                    </div>
                    
                    <div class="modal-footer">
                        <button class="btn btn-secondary" id="modal-fermer-btn">
                            <i class="fas fa-times"></i> Fermer
                        </button>
                        <button class="btn btn-primary" id="modal-partager-btn" data-match-id="${matchData.id}">
                            <i class="fas fa-share"></i> Partager
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        // Ajouter le modal au DOM
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        // Récupérer les éléments du modal
        const modal = document.getElementById('match-recap-modal');
        const closeBtn = document.getElementById('modal-close-btn');
        const fermerBtn = document.getElementById('modal-fermer-btn');
        const partagerBtn = document.getElementById('modal-partager-btn');
        
        // Event listeners pour fermer la modal
        const closeModal = () => this.closeMatchRecap();
        
        // Fermer en cliquant sur la croix
        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }
        
        // Fermer en cliquant sur le bouton "Fermer"
        if (fermerBtn) {
            fermerBtn.addEventListener('click', closeModal);
        }
        
        // Partager le match
        if (partagerBtn) {
            partagerBtn.addEventListener('click', () => {
                const matchId = partagerBtn.getAttribute('data-match-id');
                this.shareMatchRecap(matchId);
            });
        }
        
        // Fermer en cliquant sur l'overlay (fond noir)
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal();
                }
            });
        }
        
        // Fermer avec la touche Escape
        const escapeHandler = (e) => {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', escapeHandler);
            }
        };
        document.addEventListener('keydown', escapeHandler);
    }

    generateEventsHTML(events) {
        let eventsHTML = '';
        
        events.forEach((event, index) => {
            let eventClass = 'event-item';
            let eventIcon = 'fas fa-circle';
            
            // Définir l'icône et la classe selon le type d'action
            switch (event.action) {
                case 'COMBAT_START':
                    eventIcon = 'fas fa-play';
                    eventClass += ' event-start';
                    break;
                case 'TEAM_PRESENTATION':
                    eventIcon = 'fas fa-users';
                    eventClass += ' event-info';
                    break;
                case 'ROUND_START':
                    eventIcon = 'fas fa-sword';
                    eventClass += ' event-round';
                    break;
                case 'ATTACK':
                    eventIcon = 'fas fa-fist-raised';
                    eventClass += ' event-attack';
                    break;
                case 'DEFENSE':
                    eventIcon = 'fas fa-shield-alt';
                    eventClass += ' event-defense';
                    break;
                case 'HEALING':
                    eventIcon = 'fas fa-heart';
                    eventClass += ' event-heal';
                    break;
                case 'VICTORY':
                    eventIcon = 'fas fa-trophy';
                    eventClass += ' event-victory';
                    break;
                case 'MMR_UPDATE':
                    eventIcon = 'fas fa-chart-line';
                    eventClass += ' event-mmr';
                    break;
                case 'COMBAT_END':
                    eventIcon = 'fas fa-stop';
                    eventClass += ' event-end';
                    break;
                default:
                    eventIcon = 'fas fa-info';
                    eventClass += ' event-default';
            }
            
            // Formatage spécial pour les critiques
            if (event.is_crit) {
                eventClass += ' event-crit';
            }
            
            // Formatage du montant s'il existe
            let amountText = '';
            if (event.amount !== null) {
                amountText = ` (${event.amount})`;
            }
            
            eventsHTML += `
                <div class="${eventClass}" data-event-index="${index}">
                    <div class="event-icon">
                        <i class="${eventIcon}"></i>
                    </div>
                    <div class="event-content">
                        <div class="event-header">
                            <span class="event-actor">${event.actor_name}</span>
                            <span class="event-time">${event.created_at}</span>
                        </div>
                        <div class="event-description">
                            ${event.target_name}${amountText}
                            ${event.is_crit ? ' <span class="crit-indicator">CRITIQUE!</span>' : ''}
                        </div>
                    </div>
                </div>
            `;
        });
        
        return eventsHTML;
    }

    closeMatchRecap() {
        const modal = document.getElementById('match-recap-modal');
        if (modal) {
            modal.remove();
        }
    }

    shareMatchRecap(matchId) {
        // Copier le lien vers le presse-papier
        const shareUrl = `${window.location.origin}/match/${matchId}/recap`;
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(shareUrl).then(() => {
                this.showNotification('Lien de partage copié !', 'success');
            }).catch(() => {
                this.showNotification('Erreur lors de la copie', 'error');
            });
        } else {
            // Fallback pour les navigateurs plus anciens
            const textArea = document.createElement('textarea');
            textArea.value = shareUrl;
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                this.showNotification('Lien de partage copié !', 'success');
            } catch (err) {
                this.showNotification('Erreur lors de la copie', 'error');
            }
            document.body.removeChild(textArea);
        }
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Attendre un peu que le DOM soit complètement chargé
        setTimeout(() => {
            const gameInterfaceElement = document.querySelector('.game-interface');
            console.log('Élément game-interface trouvé:', gameInterfaceElement);
            
            if (gameInterfaceElement) {
                window.gameInterface = new GameInterface();
                console.log(' Interface de jeu Santons Script Tactics initialisée');
                console.log('Instance créée:', window.gameInterface);
            } else {
                console.warn(' Élément .game-interface non trouvé dans le DOM');
                // Créer l'instance quand même pour les fonctions globales
                window.gameInterface = new GameInterface();
                console.log('Instance créée sans vérification DOM');
            }
        }, 100);
    } catch (error) {
        console.error('Erreur lors de l\'initialisation de l\'interface de jeu:', error);
    }
});