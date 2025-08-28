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
                // Également appeler la méthode de team-management si elle existe
                if (window.teamManagement && typeof window.teamManagement.updateBattleTab === 'function') {
                    window.teamManagement.updateBattleTab();
                }
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
    updateBattleTab() {
        const searchBtn = document.querySelector('.search-battle-btn');
        const infoText = document.querySelector('.battle-search .info-text');
        
        if (!searchBtn || !infoText) return;
        
        // Vérifier le nombre de personnages sélectionnés
        const selectedCharacters = document.querySelectorAll('.character-card.selected');
        const teamSize = selectedCharacters.length;
        
        if (teamSize === 3) {
            searchBtn.disabled = false;
            infoText.textContent = 'Votre équipe est prête ! Trouvez un adversaire.';
        } else {
            searchBtn.disabled = true;
            infoText.textContent = `Sélectionnez ${3 - teamSize} personnage(s) de plus pour commencer`;
        }
    }

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
                            <span class="player-name" style="color: ${player.username === window.userInfo.username ? window.userInfo.usernameColor : 'inherit'}">${player.username}</span>
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
                            <span class="player-name" style="color: ${player.is_current_player ? window.userInfo.usernameColor : 'inherit'}">${player.username}</span>
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

    // =============== SYSTÈME DE VISUALISATION DE COMBAT ===============
    async showCombatVisualization(matchId) {
        try {
            const response = await fetch(`/api/matchmaking/match/${matchId}/events`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const matchData = await response.json();
            this.displayCombatVisualizationModal(matchData);
            
        } catch (error) {
            console.error('Erreur lors du chargement de la visualisation:', error);
            this.showNotification('Erreur lors du chargement du combat', 'error');
        }
    }

    displayCombatVisualizationModal(matchData) {
        // Créer le modal de visualisation de combat
        const modalHTML = `
            <div class="modal-overlay" id="combat-visualization-modal">
                <div class="combat-visualization-container">
                    <!-- Header avec contrôles -->
                    <div class="combat-header">
                        <div class="combat-title">
                            <h2><i class="fas fa-swords"></i> Combat vs ${matchData.team_b.player}</h2>
                        </div>
                        <div class="combat-controls">
                            <div class="speed-controls">
                                <span>Vitesse:</span>
                                <button class="speed-btn" data-speed="0.5">x0.5</button>
                                <button class="speed-btn active" data-speed="1">x1</button>
                                <button class="speed-btn" data-speed="2">x2</button>
                                <button class="speed-btn" data-speed="5">x5</button>
                                <button class="speed-btn" data-speed="10">x10</button>
                            </div>
                            <button class="combat-close-btn" id="combat-close-btn">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                    
                    <!-- Guild Guide positionné à gauche et au milieu -->
                    <div class="guild-guide-container">
                        <div class="guild-guide" id="guild-guide">
                            <div class="guild-guide-avatar">
                                <img src="/images/guild-guide.png" alt="Guild Guide" />
                            </div>
                            <div class="guild-guide-commentary" id="guild-guide-commentary">
                                <div class="commentary-bubble">
                                    <p>Que le combat commence !</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Zone de combat principale -->
                    <div class="combat-battlefield" id="combat-battlefield">
                        <!-- Équipe adverse (haut) -->
                        <div class="team-zone enemy-zone">
                            <div class="team-characters centered-characters" id="enemy-characters">
                                ${this.generateTeamCharacters(matchData.team_b, 'enemy')}
                            </div>
                        </div>
                        
                        <!-- Zone centrale pour les animations -->
                        <div class="combat-center" id="combat-center">
                            <div class="center-animation" id="center-animation"></div>
                        </div>
                        
                        <!-- Équipe du joueur (bas) -->
                        <div class="team-zone player-zone">
                            <div class="team-characters centered-characters" id="player-characters">
                                ${this.generateTeamCharacters(matchData.team_a, 'player')}
                            </div>
                        </div>
                        
                        <!-- Info équipe joueur en bas -->
                        <div class="team-info-bottom player-info-bottom" id="player-info">
                            ${matchData.team_a.name}
                        </div>
                    </div>
                    
                    <!-- Zone de narration en bas -->
                    <div class="combat-narration" id="combat-narration">
                        <div class="narration-text" id="narration-text">
                            En attente du début du combat...
                        </div>
                        
                        <button class="start-combat-btn" id="start-combat-btn">
                            <i class="fas fa-play"></i> Démarrer le combat
                        </button>
                    </div>
                </div>
            </div>
        `;

        // Injecter le modal dans le DOM
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        // Initialiser les contrôles et animations
        this.initCombatVisualization(matchData);
        
        // Définir le background aléatoire
        const battlefield = document.getElementById('combat-battlefield');
        if (battlefield) {
            const randomBg = this.getRandomBattlefield();
            battlefield.style.backgroundImage = `url('/images/${randomBg}')`;
        }
    }

    getRandomBattlefield() {
        const battlefields = [
            // Plateaux Dystopiques
            'plateauxDysto/champ de bataille dysto.png',
            'plateauxDysto/cours moderne.png',
            'plateauxDysto/place village moderne.png',
            // Plateaux Médiévaux
            'plateauxMedieval/cimetière.png',
            'plateauxMedieval/cours du chateau.png',
            'plateauxMedieval/place du village.png'
        ];
        
        return battlefields[Math.floor(Math.random() * battlefields.length)];
    }

    generateTeamCharacters(team, teamType) {
        let charactersHTML = '';
        
        // Si on a les vraies données des personnages, on les utilise
        if (team.characters && team.characters.length > 0) {
            team.characters.forEach((character, index) => {
                const roleIcon = this.getRoleIcon(character.role);
                const characterImage = this.getCharacterImage(character);
                charactersHTML += `
                    <div class="character modern-card" id="${teamType}-char-${index}">
                        <div class="character-image">
                            <img src="${characterImage}" alt="${character.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                            <div class="character-fallback" style="display: none;">
                                <i class="${roleIcon}"></i>
                            </div>
                        </div>
                        <div class="character-info">
                            <div class="character-name">${character.name}</div>
                            <div class="character-role ${character.role}">${this.getRoleName(character.role)}</div>
                            <div class="character-stats">
                                <span class="stat hp" title="HP">❤️ ${character.hp}</span>
                                <span class="stat atk" title="ATK">⚔️ ${character.atk}</span>
                            </div>
                        </div>
                        <div class="character-effects" id="${teamType}-effects-${index}"></div>
                        <div class="character-glow"></div>
                    </div>
                `;
            });
        } else {
            // Fallback avec des personnages par défaut
            for (let i = 0; i < 3; i++) {
                const defaultImage = '/images/characters/placeholder.png';
                charactersHTML += `
                    <div class="character modern-card" id="${teamType}-char-${i}">
                        <div class="character-image">
                            <img src="${defaultImage}" alt="Héros ${i + 1}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                            <div class="character-fallback" style="display: none;">
                                <i class="fas fa-sword"></i>
                            </div>
                        </div>
                        <div class="character-info">
                            <div class="character-name">Héros ${i + 1}</div>
                            <div class="character-role fighter">Combattant</div>
                            <div class="character-stats">
                                <span class="stat hp">❤️ 100</span>
                                <span class="stat atk">⚔️ 50</span>
                            </div>
                        </div>
                        <div class="character-effects" id="${teamType}-effects-${i}"></div>
                        <div class="character-glow"></div>
                    </div>
                `;
            }
        }
        
        return charactersHTML;
    }

    getCharacterImage(character) {
        // Si le personnage a une artworkUrl, l'utiliser en priorité
        if (character && character.artworkUrl) {
            return character.artworkUrl;
        }
        
        // Sinon, utiliser le système de mapping existant
        const characterName = typeof character === 'string' ? character : character?.name;
        
        // Mapper les noms des personnages vers leurs images
        const characterImages = {
            'default': '/images/characters/warrior.png',
            'warrior': '/images/characters/warrior.png',
            'mage': '/images/characters/mage.png',
            'archer': '/images/characters/archer.png',
            'priest': '/images/characters/priest.png',
            'healer': '/images/characters/priest.png',
            'paladin': '/images/characters/paladin.png',
            'tank': '/images/characters/paladin.png',
            'assassin': '/images/characters/assassin.png',
            'fighter': '/images/characters/warrior.png'
        };
        
        // Essayer plusieurs approches pour matcher l'image
        let imagePath = characterImages['default'];
        
        if (characterName) {
            const normalizedName = characterName.toLowerCase().replace(/\s+/g, '');
            
            // Essayer par nom exact
            if (characterImages[characterName.toLowerCase()]) {
                imagePath = characterImages[characterName.toLowerCase()];
            }
            // Essayer par nom sans espaces
            else if (characterImages[normalizedName]) {
                imagePath = characterImages[normalizedName];
            }
            // Essayer de deviner par le rôle dans le nom
            else if (normalizedName.includes('guerrier') || normalizedName.includes('warrior')) {
                imagePath = characterImages['warrior'];
            }
            else if (normalizedName.includes('mage') || normalizedName.includes('wizard')) {
                imagePath = characterImages['mage'];
            }
            else if (normalizedName.includes('archer') || normalizedName.includes('bow')) {
                imagePath = characterImages['archer'];
            }
            else if (normalizedName.includes('pretre') || normalizedName.includes('priest') || normalizedName.includes('healer')) {
                imagePath = characterImages['priest'];
            }
            else if (normalizedName.includes('paladin') || normalizedName.includes('tank')) {
                imagePath = characterImages['paladin'];
            }
            else if (normalizedName.includes('assassin') || normalizedName.includes('rogue')) {
                imagePath = characterImages['assassin'];
            }
        }
        
        console.log(`🖼️ Image pour "${characterName}": ${imagePath}`);
        return imagePath;
    }

    getRoleName(role) {
        const roleNames = {
            'tank': 'Tank',
            'healer': 'Soigneur',
            'mage': 'Mage',
            'assassin': 'Assassin',
            'archer': 'Archer',
            'fighter': 'Combattant'
        };
        return roleNames[role] || 'Combattant';
    }

    getRoleIcon(role) {
        switch (role) {
            case 'tank':
                return 'fas fa-shield-alt';
            case 'healer':
                return 'fas fa-heart';
            case 'mage':
                return 'fas fa-magic';
            case 'assassin':
                return 'fas fa-dagger';
            case 'archer':
                return 'fas fa-bow-arrow';
            default:
                return 'fas fa-sword';
        }
    }

    initCombatVisualization(matchData) {
        const modal = document.getElementById('combat-visualization-modal');
        const closeBtn = document.getElementById('combat-close-btn');
        const startBtn = document.getElementById('start-combat-btn');
        const speedBtns = document.querySelectorAll('.speed-btn');
        const currentSpeedSpan = document.querySelector('.current-speed');
        
        let currentSpeed = 1;
        let isPlaying = false;
        
        // Initialiser le guild guide
        this.initGuildGuide();
        
        // Fermer le modal
        const closeModal = () => {
            if (modal) {
                modal.remove();
            }
        };
        
        closeBtn?.addEventListener('click', closeModal);
        
        // Fermer avec Escape
        const escapeHandler = (e) => {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', escapeHandler);
            }
        };
        document.addEventListener('keydown', escapeHandler);
        
        // Fermer en cliquant sur l'overlay
        modal?.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
        
        // Contrôles de vitesse améliorés
        speedBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                speedBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentSpeed = parseFloat(btn.dataset.speed);
                currentSpeedSpan.textContent = `x${currentSpeed}`;
                
                // Commentaire du guild guide sur la vitesse
                const speedComments = {
                    0.5: "Très bien ! Prenons le temps d'analyser chaque mouvement...",
                    1: "Vitesse normale, parfait pour bien suivre l'action !",
                    2: "On accélère un peu ! Gardez les yeux ouverts...",
                    5: "Ça va vite maintenant ! Concentration maximum !",
                    10: "Mode éclair activé ! Blink et vous ratez tout !"
                };
                
                this.showGuildGuideComment(speedComments[currentSpeed] || "Vitesse ajustée !", '⚡');
                console.log('🎮 Vitesse changée:', currentSpeed);
            });
        });
        
        // Démarrer le combat
        startBtn?.addEventListener('click', () => {
            if (!isPlaying) {
                isPlaying = true;
                startBtn.style.display = 'none';
                this.showGuildGuideComment("Le combat commence ! Que le meilleur gagne !", '⚔️');
                this.playCombatAnimation(matchData.events, currentSpeed, () => {
                    isPlaying = false;
                    startBtn.style.display = 'flex';
                    startBtn.innerHTML = '<i class="fas fa-redo"></i> Rejouer le combat';
                });
            }
        });
    }

    // =============== GUILD GUIDE SYSTEM ===============
    initGuildGuide() {
        this.guildGuideComments = [
            // Commentaires de début
            "Mes champions, le combat va commencer !",
            "Analysons les forces en présence...",
            "Que la stratégie l'emporte sur la force brute !",
            
            // Commentaires d'action
            "Excellente attaque ! L'adversaire recule !",
            "Une défense exemplaire ! Bien joué !",
            "Attention ! Cette attaque semble critique !",
            "Magnifique coordination d'équipe !",
            "La magie opère ! L'avantage change de camp !",
            "Quel retournement de situation !",
            "Les soins arrivent à temps !",
            "Une stratégie payante !",
            
            // Commentaires d'avantage
            "Bel avantage pour l'équipe bleue !",
            "L'équipe rouge prend l'ascendant !",
            "L'équilibre des forces bascule !",
            "La victoire se dessine !",
            
            // Commentaires critiques
            "Coup critique ! Quel impact !",
            "Une blessure grave ! La situation devient critique !",
            "L'issue du combat se joue maintenant !",
            "Dernière chance pour renverser la vapeur !"
        ];
        
        this.lastCommentTime = 0;
        this.commentCooldown = 2000; // 2 secondes entre les commentaires
    }

    showGuildGuideComment(text, emoji = '💬') {
        const commentaryText = document.getElementById('commentary-text');
        const guideStatus = document.getElementById('guide-status');
        const bubble = document.querySelector('.commentary-bubble');
        
        if (commentaryText && guideStatus && bubble) {
            // Mettre à jour le contenu
            commentaryText.textContent = text;
            guideStatus.textContent = emoji;
            
            // Animation d'apparition
            bubble.classList.add('guide-speaking');
            
            // Retirer l'animation après un délai
            setTimeout(() => {
                bubble.classList.remove('guide-speaking');
            }, 3000);
            
            console.log('🗣️ Guild Guide:', text);
        }
    }

    getRandomGuildComment(type = 'action') {
        const now = Date.now();
        if (now - this.lastCommentTime < this.commentCooldown) {
            return null; // Pas de commentaire si trop récent
        }
        
        let comments;
        switch (type) {
            case 'advantage':
                comments = [
                    "Bel avantage pour cette équipe !",
                    "L'ascendant se dessine !",
                    "Une stratégie payante !",
                    "L'équilibre bascule !"
                ];
                break;
            case 'critical':
                comments = [
                    "Attention ! Cette attaque peut être critique !",
                    "Coup puissant en préparation !",
                    "Une attaque décisive approche !",
                    "Moment critique du combat !"
                ];
                break;
            case 'heal':
                comments = [
                    "Les soins arrivent à temps !",
                    "Excellente récupération !",
                    "La magie curative opère !",
                    "Retour en force !"
                ];
                break;
            default:
                comments = [
                    "Excellente manœuvre !",
                    "Magnifique coordination !",
                    "Quelle technique !",
                    "Bien joué !",
                    "L'action s'intensifie !",
                    "Le combat bat son plein !"
                ];
        }
        
        this.lastCommentTime = now;
        return comments[Math.floor(Math.random() * comments.length)];
    }

    async playCombatAnimation(events, speed, onComplete) {
        const centerAnimation = document.getElementById('center-animation');
        const playerInfo = document.getElementById('player-info');
        const enemyInfo = document.querySelector('.enemy-info-header');
        
        // Base de temps adaptée à la vitesse
        const baseDelay = 1000 / Math.max(speed, 0.5); // Minimum 0.5 pour éviter les vitesses trop lentes
        const animationDelay = Math.max(baseDelay * 0.8, 200); // Minimum 200ms
        
        console.log(`🎮 Animation avec vitesse x${speed}, délai: ${animationDelay}ms`);
        
        // Commentaire initial du guild guide
        this.showGuildGuideComment("Le combat commence ! Observez bien chaque mouvement !", '⚔️');
        
        for (let i = 0; i < events.length; i++) {
            const event = events[i];
            
            // Commentaires dynamiques du guild guide
            await this.addGuildGuideCommentary(event, i, events.length);
            
            // Animer selon le type d'événement
            await this.animateEvent(event, centerAnimation, playerInfo, enemyInfo);
            
            // Ajouter des actions aléatoires pour plus de dynamisme
            if (event.action === 'ATTACK' || event.action === 'ROUND_START') {
                // 30% de chance d'avoir une action défensive/soin aléatoire
                if (Math.random() < 0.3) {
                    await this.sleep(animationDelay * 0.3);
                    const randomAction = Math.random() < 0.5 ? 'HEAL' : 'DEFENSE';
                    await this.animateRandomCharacterAction(randomAction);
                    
                    // Commentaire sur l'action aléatoire
                    const randomComment = this.getRandomGuildComment(randomAction === 'HEAL' ? 'heal' : 'action');
                    if (randomComment) {
                        this.showGuildGuideComment(randomComment, randomAction === 'HEAL' ? '💚' : '🛡️');
                    }
                }
            }
            
            // Attendre selon la vitesse
            await this.sleep(animationDelay);
        }
        
        // Animation finale
        const winner = events.find(e => e.action === 'VICTORY');
        if (winner) {
            this.showGuildGuideComment("Le combat touche à sa fin ! Qui l'emportera ?", '🏆');
            await this.animateVictory(winner, centerAnimation);
        }
        
        onComplete();
    }

    async addGuildGuideCommentary(event, eventIndex, totalEvents) {
        let comment = null;
        let emoji = '💬';
        
        // Commentaires basés sur l'action
        switch (event.action) {
            case 'COMBAT_START':
                comment = "Voici nos combattants ! Que le spectacle commence !";
                emoji = '🎭';
                break;
                
            case 'ROUND_START':
                comment = `Round ${eventIndex + 1} ! L'intensité monte !`;
                emoji = '🔥';
                break;
                
            case 'ATTACK':
                if (Math.random() < 0.7) { // 70% de chance de commenter
                    const attackComments = [
                        "Attention ! Cette attaque peut être critique !",
                        "Excellente technique ! L'adversaire recule !",
                        "Une frappe puissante ! Ça va faire mal !",
                        "Magnifique coordination d'équipe !",
                        "L'action s'intensifie !"
                    ];
                    comment = attackComments[Math.floor(Math.random() * attackComments.length)];
                    emoji = '⚔️';
                }
                break;
                
            case 'TEAM_PRESENTATION':
                if (event.target_name.includes('Équipe')) {
                    comment = `${event.target_name} entre en lice ! Quelle puissance !`;
                    emoji = '👥';
                }
                break;
                
            case 'VICTORY':
                comment = "Et voilà ! Le combat est terminé ! Quelle bataille épique !";
                emoji = '🏆';
                break;
        }
        
        // Commentaires basés sur la progression
        const progress = eventIndex / totalEvents;
        if (!comment) {
            if (progress < 0.2) {
                comment = this.getRandomGuildComment('action');
                emoji = '👀';
            } else if (progress < 0.5) {
                comment = this.getRandomGuildComment('advantage');
                emoji = '💪';
            } else if (progress < 0.8) {
                comment = this.getRandomGuildComment('critical');
                emoji = '⚡';
            }
        }
        
        if (comment) {
            this.showGuildGuideComment(comment, emoji);
        }
    }

    async animateRandomCharacterAction(actionType) {
        // Action aléatoire sur un personnage aléatoire
        const teams = ['player', 'enemy'];
        const randomTeam = teams[Math.floor(Math.random() * teams.length)];
        const randomCharIndex = Math.floor(Math.random() * 3);
        
        const characterElement = document.getElementById(`${randomTeam}-char-${randomCharIndex}`);
        const effectsElement = document.getElementById(`${randomTeam}-effects-${randomCharIndex}`);
        
        if (characterElement && effectsElement) {
            characterElement.classList.add('character-acting');
            
            let effectHTML = '';
            let effectClass = '';
            
            if (actionType === 'HEAL') {
                effectHTML = '<div class="heal-effect"><i class="fas fa-heart"></i></div>';
                effectClass = 'effect-heal';
            } else if (actionType === 'DEFENSE') {
                effectHTML = '<div class="defense-effect"><i class="fas fa-shield"></i></div>';
                effectClass = 'effect-defense';
            }
            
            effectsElement.innerHTML = effectHTML;
            effectsElement.classList.add(effectClass);
            
            await this.sleep(400);
            
            characterElement.classList.remove('character-acting');
            effectsElement.classList.remove(effectClass);
            effectsElement.innerHTML = '';
        }
    }

    async animateEvent(event, centerElement, playerInfo, enemyInfo) {
        const action = event.action;
        
        switch (action) {
            case 'COMBAT_START':
                await this.animateCombatStart(centerElement);
                break;
                
            case 'TEAM_PRESENTATION':
                await this.animateTeamPresentation(event, playerInfo, enemyInfo);
                break;
                
            case 'ROUND_START':
                await this.animateRoundStart(centerElement, event);
                break;
                
            case 'ATTACK':
            case 'HEAL':
            case 'DEFENSE':
                await this.animateCharacterAction(event, action);
                break;
                
            case 'ROUND_END':
                await this.animateRoundEnd(centerElement);
                break;
                
            case 'VICTORY':
                await this.animateVictory(event, centerElement);
                break;
        }
    }

    async animateCombatStart(centerElement) {
        centerElement.innerHTML = `
            <div class="combat-start-animation">
                <div class="halo-effect"></div>
                <div class="combat-text">Début du Combat!</div>
            </div>
        `;
        centerElement.classList.add('animate-glow');
        
        await this.sleep(1000);
        
        centerElement.classList.remove('animate-glow');
        centerElement.innerHTML = '';
    }

    async animateTeamPresentation(event, playerInfo, enemyInfo) {
        const isTeamA = event.target_name.includes('Équipe A') || event.target_name.includes(document.querySelector('.player-info .team-name')?.textContent || '');
        const targetElement = isTeamA ? playerInfo : enemyInfo;
        
        targetElement.classList.add('team-highlight');
        
        await this.sleep(800);
        
        targetElement.classList.remove('team-highlight');
    }

    async animateRoundStart(centerElement, event) {
        centerElement.innerHTML = `
            <div class="round-start-modern">
                <div class="round-girl">
                    <img src="/images/plateauxMedieval/guildGuide.jpg" alt="Annonceur" class="round-announcer">
                    <div class="speech-bubble">
                        <div class="round-text">${event.target_name || 'Nouveau Round !'}</div>
                    </div>
                </div>
            </div>
        `;
        centerElement.classList.add('animate-round-start');
        
        await this.sleep(1200);
        
        centerElement.classList.remove('animate-round-start');
        centerElement.innerHTML = '';
    }

    async animateCharacterAction(event, actionType) {
        // Déterminer quel personnage agit basé sur les données de l'événement
        let teamType, charIndex;
        
        // Essayer de déterminer l'équipe et le personnage basé sur les données de l'événement
        if (event.target_name && event.target_name.includes('🔵')) {
            teamType = 'player';
        } else if (event.target_name && event.target_name.includes('�')) {
            teamType = 'enemy';
        } else {
            // Fallback aléatoire
            teamType = Math.random() > 0.5 ? 'player' : 'enemy';
        }
        
        charIndex = Math.floor(Math.random() * 3);
        
        const characterElement = document.getElementById(`${teamType}-char-${charIndex}`);
        const effectsElement = document.getElementById(`${teamType}-effects-${charIndex}`);
        
        if (characterElement && effectsElement) {
            // Animation du personnage
            characterElement.classList.add('character-acting');
            
            // Animation de l'effet selon l'action
            let effectHTML = '';
            let effectClass = '';
            
            switch (actionType) {
                case 'ATTACK':
                    effectHTML = '<div class="attack-effect"><i class="fas fa-fist-raised"></i></div>';
                    effectClass = 'effect-attack';
                    break;
                case 'HEAL':
                    effectHTML = '<div class="heal-effect"><i class="fas fa-heart"></i></div>';
                    effectClass = 'effect-heal';
                    break;
                case 'DEFENSE':
                    effectHTML = '<div class="defense-effect"><i class="fas fa-shield"></i></div>';
                    effectClass = 'effect-defense';
                    break;
                default:
                    // Actions aléatoires pour plus de variété
                    const randomActions = [
                        { html: '<div class="magic-effect"><i class="fas fa-magic"></i></div>', class: 'effect-magic' },
                        { html: '<div class="speed-effect"><i class="fas fa-bolt"></i></div>', class: 'effect-speed' },
                        { html: '<div class="attack-effect"><i class="fas fa-sword"></i></div>', class: 'effect-attack' }
                    ];
                    const randomAction = randomActions[Math.floor(Math.random() * randomActions.length)];
                    effectHTML = randomAction.html;
                    effectClass = randomAction.class;
            }
            
            effectsElement.innerHTML = effectHTML;
            effectsElement.classList.add(effectClass);
            
            await this.sleep(800);
            
            characterElement.classList.remove('character-acting');
            effectsElement.classList.remove(effectClass);
            effectsElement.innerHTML = '';
        }
    }

    async animateRoundEnd(centerElement) {
        centerElement.innerHTML = `
            <div class="round-end-animation">
                <div class="hourglass-icon">
                    <i class="fas fa-hourglass-end"></i>
                </div>
                <div class="end-text">Fin du tour</div>
            </div>
        `;
        centerElement.classList.add('animate-fade');
        
        await this.sleep(800);
        
        centerElement.classList.remove('animate-fade');
        centerElement.innerHTML = '';
    }

    async animateVictory(event, centerElement) {
        const isPlayerVictory = event.target_name.includes(document.querySelector('.team-info-bottom')?.textContent || '');
        
        centerElement.innerHTML = `
            <div class="victory-modern ${isPlayerVictory ? 'player-victory' : 'enemy-victory'}">
                <div class="guild-guide-announce">
                    <img src="/images/plateauxMedieval/guildGuide.jpg" alt="Guild Guide" class="guild-guide">
                    <div class="victory-speech-bubble">
                        <div class="victory-announcement">
                            ${isPlayerVictory ? 'Oyé Oyé ! Vous avez remporté cette victoire !' : 'Oyé Oyé ! Vous avez subi une défaite...'}
                        </div>
                    </div>
                </div>
                <div class="victory-effects">
                    ${isPlayerVictory ? 
                        '<div class="confetti"></div><div class="sparkles"></div>' : 
                        '<div class="defeat-smoke"></div>'
                    }
                </div>
            </div>
        `;
        centerElement.classList.add('animate-victory-modern');
        
        await this.sleep(2500);
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
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