// =============== INTERFACE DE JEU - SANTONS SCRIPT TACTICS ===============

class GameInterface {
    constructor() {
        this.currentTab = 'team';
        
        // Initialisation des images du guild guide
        this.guildImages = [
            '/images/guild1.png',
            '/images/guild2.png', 
            '/images/guild3.png',
            '/images/guild4.png'
        ];
        this.currentGuildImageIndex = 0;
        this.guildGuideInitAttempts = 0; // Compteur pour éviter les boucles infinies
        
        // S'assurer que le DOM est chargé avant d'initialiser
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
        
        // Ajouter une fonction globale pour tester le battlefield
        window.testBattlefield = () => this.testBattlefieldVisualization();
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
        // Désactiver l'onglet actuel avec vérifications plus robustes
        const currentActiveButton = document.querySelector('.tab-button.active');
        if (currentActiveButton) {
            currentActiveButton.classList.remove('active');
        }
        
        const currentActivePanel = document.querySelector('.tab-panel.active');
        if (currentActivePanel) {
            currentActivePanel.classList.remove('active');
        }

        // Activer le nouvel onglet avec vérifications
        const newTabButton = document.querySelector(`[data-tab="${tabName}"]`);
        if (newTabButton) {
            newTabButton.classList.add('active');
        }
        
        const newTabPanel = document.getElementById(`${tabName}-panel`);
        if (newTabPanel) {
            newTabPanel.classList.add('active');
        }

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
        if (!container) {
            console.warn('Conteneur de personnages introuvable');
            return;
        }

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
        
        if (!searchBtn) {
            console.warn('Bouton de recherche de bataille introuvable');
            return;
        }
        if (!infoText) {
            console.warn('Texte d\'information de bataille introuvable');
            return;
        }
        
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
        if (!historyContainer) {
            console.warn('Conteneur d\'historique introuvable');
            return;
        }
        
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
        if (!rankingContainer) {
            console.warn('Conteneur de classement introuvable');
            return;
        }
        
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
        } else {
            console.warn('Élément de position utilisateur introuvable');
        }
        
        if (userRatingElement) {
            userRatingElement.textContent = `${mmr || 1200} pts`;
        } else {
            console.warn('Élément de score utilisateur introuvable');
        }
    }

    loadMoreRanking(startIndex) {
        console.log('Charger plus de joueurs à partir de:', startIndex);
        this.showNotification('Fonctionnalité bientôt disponible !', 'info');
    }

    // =============== SYSTÈME DE VISUALISATION DE COMBAT ===============
    async showCombatVisualization(matchId) {
        try {
            // Vérifications de sécurité pour l'ID de match
            if (!matchId) {
                throw new Error('ID de match manquant');
            }
            
            const response = await fetch(`/api/matchmaking/match/${matchId}/events`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const matchData = await response.json();
            
            // Vérifications additionnelles des données
            if (!matchData) {
                throw new Error('Données de match vides');
            }
            
            console.log('📊 Données de match reçues:', matchData);
            this.displayCombatVisualizationModal(matchData);
            
        } catch (error) {
            console.error('Erreur lors du chargement de la visualisation:', error);
            this.showNotification('Erreur lors du chargement du combat: ' + error.message, 'error');
        }
    }

    determinePlateauType(matchData) {
        // Aléatoirement choisir entre medieval et dystopian
        const plateauTypes = ['medieval', 'dystopian'];
        return plateauTypes[Math.floor(Math.random() * plateauTypes.length)];
    }
    
    displayCombatVisualizationModal(matchData) {
        try {
            console.log('🔍 DEBUG: matchData complet =', JSON.stringify(matchData, null, 2));
            // Récupérer les vraies données des équipes
            const teamA = matchData.teamA || matchData.team_a || matchData.playerTeam;
            const teamB = matchData.teamB || matchData.team_b || matchData.enemyTeam;
            const currentUser = matchData.currentUser || window.userInfo?.username || 
                               document.querySelector('[data-username]')?.dataset.username || 'bambam';
            
            // Vérifications de sécurité
            if (!teamA || !teamB) {
                console.error('Équipes manquantes:', { teamA, teamB });
                this.showNotification('Erreur: données d\'équipe manquantes', 'error');
                return;
            }
            
            // Déterminer quelle équipe appartient au joueur actuel de manière sécurisée
            let playerTeam, enemyTeam;
            if (teamA && teamA.player === currentUser) {
                playerTeam = teamA;
                enemyTeam = teamB;
            } else if (teamB && teamB.player === currentUser) {
                playerTeam = teamB;
                enemyTeam = teamA;
            } else {
                // Par défaut, assigner teamA comme équipe du joueur
                playerTeam = teamA;
                enemyTeam = teamB;
            }
            
            console.log('� Teams Debug:', {
                currentUser,
                teamA: teamA.player,
                teamB: teamB.player,
                playerTeam: playerTeam.player,
                enemyTeam: enemyTeam.player
            });
            
            // Vérifier si les éléments nécessaires existent
            let modal = document.querySelector('.battlefield-modal');
            if (modal) {
                modal.remove();
            }
            
            // Déterminer le type de plateau selon le match
            const plateauType = this.determinePlateauType(matchData);
            
            modal = document.createElement('div');
            modal.className = 'battlefield-modal show';
            modal.innerHTML = `
                <div class="battlefield-container">
                    <!-- Guide de Guilde à gauche -->
                    <div class="battlefield-guild-guide">
                        <div class="guild-guide-avatar">
                            <img src="/images/guild1.png" alt="Guide de Guilde" class="guide-avatar" id="guild-avatar-combat">
                        </div>
                        <div class="guild-guide-bubble">
                            <div class="bubble-arrow"></div>
                            <p id="guide-text-combat">⚔️ Que le combat commence ! Montrez-leur de quoi vous êtes capable !</p>
                        </div>
                    </div>
                    
                    <!-- Contenu principal du battlefield à droite -->
                    <div class="battlefield-main-content">
                        <div class="battlefield-header">
                            <h2>⚔️ Combat Épique en Cours ⚔️</h2>
                            <button class="close-battlefield">×</button>
                        </div>
                        
                        <!-- Zone des cartes ennemies (EN HAUT DU PLATEAU) -->
                        <div class="enemy-cards-zone">
                            <h3>🔴 Équipe Adverse</h3>
                            <div class="battlefield-cards enemy-cards">
                                ${this.generateBattlefieldCards(enemyTeam, 'enemy')}
                            </div>
                        </div>
                        
                        <!-- Arène de combat centrale -->
                        <div class="battlefield-arena ${plateauType}">
                            <div class="combat-zone-3d">
                                <!-- Les personnages 3D apparaîtront ici -->
                            </div>
                            
                            <!-- Zone d'animation spectaculaire centrale -->
                            <div class="action-animation-zone">
                                <div class="action-display"></div>
                                <div class="combat-effects"></div>
                            </div>
                            
                            <!-- Contrôles de vitesse repositionnés -->
                            <div class="speed-controls">
                                <button class="speed-btn active" data-speed="1">x1</button>
                                <button class="speed-btn" data-speed="2">x2</button>
                                <button class="speed-btn" data-speed="5">x5</button>
                                <button class="speed-btn" data-speed="10">x10</button>
                            </div>
                        </div>
                        
                        <!-- Zone des cartes du joueur (EN BAS DU PLATEAU) -->
                        <div class="player-cards-zone">
                            <h3>🟢 Votre Équipe</h3>
                            <div class="battlefield-cards player-cards">
                                ${this.generateBattlefieldCards(playerTeam, 'player')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            // Appliquer le background aléatoire à l'arène
            const arena = modal.querySelector('.battlefield-arena');
            if (arena) {
                const randomBackground = this.getRandomBattlefieldBackground();
                console.log(`🎨 Background appliqué: ${randomBackground}`);
                arena.style.backgroundImage = `url('/images/${randomBackground}')`;
                arena.style.backgroundSize = 'cover';
                arena.style.backgroundPosition = 'center';
                arena.style.backgroundRepeat = 'no-repeat';
            }
            
            // Initialiser le système 3D
            this.combat3D = new Combat3DSystem();
            this.initCombat3DSystem(matchData);
            
            // Fermeture du modal
            const closeBtn = modal.querySelector('.close-battlefield');
            closeBtn?.addEventListener('click', () => {
                this.closeBattlefieldModal();
                this.resumeBackgroundVideo();
                this.combat3D?.cleanup();
            });
            
            // Gestionnaire d'échappement
            const escapeHandler = (e) => {
                if (e.key === 'Escape') {
                    this.closeBattlefieldModal();
                    this.resumeBackgroundVideo();
                    this.combat3D?.cleanup();
                    document.removeEventListener('keydown', escapeHandler);
                }
            };
            document.addEventListener('keydown', escapeHandler);
            
        } catch (error) {
            console.error('❌ Erreur lors de l\'affichage du combat:', error);
            console.error('Stack trace:', error.stack);
            // Ne pas bloquer l'interface, juste afficher l'erreur
            this.showNotification('Erreur lors de l\'affichage du combat: ' + error.message, 'error');
        }
    }

    generateBattlefieldCards(team, teamType) {
        // Utiliser les vraies données des personnages de la BDD
        const characters = team.characters || team || [];
        const teamColor = teamType === 'player' ? '#4CAF50' : '#F44336';
        const teamBorder = teamType === 'player' ? '#388E3C' : '#D32F2F';
        
        return characters.map((char, index) => {
            // Debug pour comprendre la structure des données
            console.log('🔍 Personnage:', char.name, 'Image:', char.imagePath || char.image, 'Role:', char.role || char.class);
            
            // Priorité: char.imagePath > char.image > par défaut selon le rôle
            let imageSrc = '';
            let fallbackImage = '';
            
            if (char.imagePath && char.imagePath !== 'placeholder.png') {
                // Nettoyer le chemin d'image s'il contient des chemins complets
                imageSrc = char.imagePath.replace(/^.*[\\\/]/, '').replace('/images/characters/', '');
            } else if (char.image && char.image !== 'placeholder.png') {
                // Nettoyer le chemin d'image s'il contient des chemins complets
                imageSrc = char.image.replace(/^.*[\\\/]/, '').replace('/images/characters/', '');
            } else {
                imageSrc = this.getCharacterImageByRole(char.role || char.class);
            }
            
            fallbackImage = this.getCharacterImageByRole(char.role || char.class);
            
            // Debug amélioré
            console.log(`🖼️ [${char.name}] Image finale: ${imageSrc}, Fallback: ${fallbackImage}, Original: ${char.imagePath || char.image}`);
            
            // Sécuriser les données JSON pour éviter l'erreur de parsing
            const safeCharData = {
                name: char.name || 'Inconnu',
                role: char.role || char.class || 'warrior',
                image: imageSrc,
                level: char.level || 1,
                hp: char.hp || 100,
                attack: char.attack || 50
            };
            
            return `
            <div class="battlefield-card ${teamType}-card" data-character-id="${index}" data-team="${teamType}" data-character='${JSON.stringify(safeCharData).replace(/'/g, "&apos;")}'>
                <div class="card-body">
                    <div class="character-avatar">
                        <img src="/images/characters/${imageSrc}" alt="${char.name}" 
                             onerror="this.src='/images/characters/${fallbackImage}'; console.warn('🖼️ Image non trouvée: ${imageSrc}, utilisation fallback: ${fallbackImage}');" />
                    </div>
                    <div class="character-name">${char.name}</div>
                    <div class="character-role">
                        <i class="${this.getRoleIcon(char.role || char.class)}"></i>
                        ${this.getRoleName(char.role || char.class)}
                    </div>
                </div>
            </div>
            `;
        }).join('');
    }

    getCharacterImageByRole(role) {
        const roleImages = {
            'tank': 'paladin.png',
            'mage': 'mage.png', 
            'archer': 'archer.png',
            'assassin': 'assassin.png',
            'priest': 'priest.png',
            'warrior': 'warrior.png'
        };
        return roleImages[role] || 'warrior.png';
    }

    getRandomBattlefieldBackground() {
        const medievalBgs = [
            'plateauxMedieval/cimetière.png',
            'plateauxMedieval/cours du chateau.png', 
            'plateauxMedieval/place du village.png'
        ];
        const dystoBgs = [
            'plateauxDysto/champ de bataille dysto.png',
            'plateauxDysto/cours moderne.png',
            'plateauxDysto/place village moderne.png'
        ];
        
        const allBgs = [...medievalBgs, ...dystoBgs];
        return allBgs[Math.floor(Math.random() * allBgs.length)];
    }

    getKaamelottPhrase(situation = 'general') {
        const phrases = {
            start: [
                "Ah ! Voilà qui va être intéressant !",
                "Bon, on va voir ce qu'on va voir !",
                "C'est parti mon kiki !",
                "Alors, on commence quand vous voulez !",
                "Ça va être du sport !",
                "C'est le moment de vérité !",
                "Allez-y, surprenez-moi !",
                "Que le meilleur gagne... enfin j'espère que c'est vous !",
                "C'est parti pour la baston !",
                "Bon, moi je dis : qu'est-ce qu'on attend ?"
            ],
            attack: [
                "Ça c'est du rentre-dedans !",
                "Ah, la vache ! Il y va franco !",
                "C'est ça ! Tapez sur tout ce qui bouge !",
                "Eh ben dis donc, il se gêne pas !",
                "Allez-y ! Mais allez-y donc !",
                "Alors là, chapeau ! Ça c'est de l'attaque !",
                "C'est beau ! C'est du grand art !",
                "Ça c'est envoyé ! Sans faire de détail !",
                "Oh là là ! Il l'a pas raté celui-là !",
                "Voilà ce que j'appelle de l'efficacité !",
                "C'est pas du cinéma ça ! C'est du concret !",
                "Il a pas fait dans la dentelle !",
                "Ça c'est du travail de professionnel !"
            ],
            defense: [
                "Eh ! Il a paré ! Comme un chef !",
                "Alors là, bravo ! Belle parade !",
                "C'est ça ! Restez sur vos gardes !",
                "Eh ben, il l'a vue venir celle-là !",
                "C'est de la défense ça ! Du béton !",
                "Ah ! Il s'y connaît en protection !",
                "Voilà un bouclier qui sert à quelque chose !",
                "C'est du solide ! Ça tient la route !",
                "Belle anticipation ! Très joli !",
                "C'est ça la vraie défense ! Du costaud !",
                "Il tient le choc ! Respect !",
                "Ça c'est de la résistance ! Impressionnant !"
            ],
            magic: [
                "Oh ! De la magie ! Ça c'est du spectacle !",
                "Alors là ! Ça c'est de l'artisanat !",
                "Eh ben ! Il sort le grand jeu !",
                "C'est de la belle ouvrage ça !",
                "Voilà ce que j'appelle un tour de maître !",
                "Ça c'est du niveau ! Du grand art !",
                "Oh là là ! Il connaît son affaire !",
                "C'est beau ! C'est lumineux !",
                "Alors ça ! C'est de la technique !",
                "Eh ben dis donc ! Il a des ressources !",
                "C'est ça les vrais sortilèges !",
                "Il maîtrise son sujet ! Chapeau !",
                "Voilà ce qu'on appelle avoir du métier !"
            ],
            heal: [
                "Ah ! Un petit coup de réparation !",
                "C'est ça ! On soigne ses petits bobos !",
                "Eh ! Il connaît les premiers secours !",
                "Voilà qui va faire du bien !",
                "C'est de la bonne médecine ça !",
                "Ah ! Il sait y faire avec les potions !",
                "C'est du travail de guérisseur ça !",
                "Eh ben ! Il a de la ressource !",
                "Voilà qui redonne la forme !",
                "C'est ça le vrai métier de soigneur !",
                "Ah ! On n'est jamais mieux soigné que par soi-même !",
                "Belle intervention ! C'est du professionnel !"
            ],
            victory: [
                "Alors là ! Bravo ! C'est du beau boulot !",
                "Eh ben voilà ! C'est ça qu'on appelle une victoire !",
                "Ah ! C'est fini ! Et bien joué !",
                "Voilà ! Mission accomplie ! Du grand art !",
                "C'est ça ! On a gagné ! Comme des chefs !",
                "Eh ben dis donc ! Ça c'est de la performance !",
                "Bravo ! C'est du travail de professionnel !",
                "Alors là, chapeau ! C'est mérité !",
                "Voilà ce que j'appelle une belle victoire !",
                "C'est fini ! Et c'est bien fini ! Bravo !",
                "Ah ! C'est ça qu'on voulait voir !",
                "Mission accomplie ! Du beau travail !"
            ],
            defeat: [
                "Ah ! Eh ben... c'est pas passé loin !",
                "Bon, on fera mieux la prochaine fois !",
                "C'est pas grave ! L'important c'est de participer !",
                "Eh ! On peut pas gagner à tous les coups !",
                "C'est ça ! On apprend de ses erreurs !",
                "Bon, on refera ça plus tard !",
                "C'est pas dramatique ! On s'en remettra !",
                "Eh ben ! Ça arrive aux meilleurs !",
                "C'est comme ça ! On gagne pas toujours !",
                "Bon, on dira que c'était un entraînement !",
                "C'est pas la fin du monde ! On recommencera !",
                "Eh ! L'adversaire était coriace !"
            ]
        };
        
        const situationPhrases = phrases[situation] || phrases.general || phrases.start;
        return situationPhrases[Math.floor(Math.random() * situationPhrases.length)];
    }

    showKaamelottComment(situation = 'general') {
        const phrase = this.getKaamelottPhrase(situation);
        const guideText = document.getElementById('guide-text');
        const commentary = document.getElementById('guild-guide-commentary');
        const avatar = document.querySelector('.guild-guide-avatar img');
        
        if (guideText) {
            guideText.textContent = phrase;
        }
        
        if (commentary) {
            commentary.classList.add('show');
            setTimeout(() => {
                commentary.classList.remove('show');
            }, 4000);
        }
        
        if (avatar) {
            avatar.src = this.getNextGuildImage();
        }
        
        console.log('🗣️ Guild Guide Kaamelott:', phrase);
    }

    initBattlefieldCombatVisualization(matchData) {
        // Initialiser le nouveau système de combat 3D
        this.initCombat3DSystem(matchData);
        
        // Setup des contrôles existants
        const modal = document.querySelector('.battlefield-modal');
        const closeBtn = document.getElementById('combat-close-btn');  
        const startBtn = document.getElementById('start-combat-btn');
        const speedBtns = document.querySelectorAll('.speed-btn');
        
        let isPlaying = false;
        let currentSpeed = 2; // Vitesse par défaut x2
        
        // Faire le modal plein écran
        if (modal) {
            modal.style.width = '100vw';
            modal.style.height = '100vh';
            document.body.classList.add('battlefield-active');
        }
        
        // Fonction de fermeture
        const closeModal = () => {
            if (modal) {
                this.resumeBackgroundVideo();
                document.body.classList.remove('battlefield-active');
                modal.remove();
                this.combat3D?.cleanup();
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
        
        // Contrôles de vitesse
        speedBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                speedBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentSpeed = parseFloat(btn.dataset.speed);
                
                // Mettre à jour la vitesse du système 3D
                if (this.combat3D) {
                    this.combat3D.speedMultiplier = currentSpeed;
                }
                
                console.log('🎮 Vitesse changée:', currentSpeed + 'x');
            });
        });
    }
    
    // =============== SYSTÈME DE COMBAT 3D ===============
    
    initCombat3DSystem(matchData) {
        // Récupérer les équipes avec différents formats possibles
        const teamA = matchData.teamA || matchData.team_a || matchData.playerTeam;
        const teamB = matchData.teamB || matchData.team_b || matchData.enemyTeam;
        // Utiliser l'utilisateur connecté depuis window.userInfo ou les données du match
        const currentUser = matchData.currentUser || window.userInfo?.username || 
                           document.querySelector('[data-username]')?.dataset.username || 'bambam';
        
        console.log('🔍 DEBUG initCombat3D:', {
            teamA: teamA,
            teamB: teamB,
            currentUser: currentUser,
            matchDataKeys: Object.keys(matchData)
        });
        
        // Vérifications de sécurité
        if (!teamA || !teamB) {
            console.error('❌ Équipes manquantes dans initCombat3D:', { teamA, teamB });
            return;
        }
        
        // Déterminer quelle équipe appartient au joueur actuel
        let playerTeam, enemyTeam;
        if (teamA && teamA.player === currentUser) {
            playerTeam = teamA;
            enemyTeam = teamB;
        } else if (teamB && teamB.player === currentUser) {
            playerTeam = teamB;
            enemyTeam = teamA;
        } else {
            // Par défaut, assigner teamA comme équipe du joueur
            playerTeam = teamA;
            enemyTeam = teamB;
        }
        
        console.log('🎯 Équipes assignées:', { 
            playerTeam: playerTeam?.name, 
            enemyTeam: enemyTeam?.name,
            playerCharacters: playerTeam?.characters?.length || 0,
            enemyCharacters: enemyTeam?.characters?.length || 0
        });
        
        // Attendre que le modal soit monté dans le DOM
        setTimeout(() => {
            if (playerTeam && enemyTeam) {
                this.setupCardTo3DTransition(playerTeam, enemyTeam);
                this.setupGuildGuideForCombat();
            } else {
                console.error('❌ Impossible de configurer le 3D - équipes invalides');
            }
        }, 500);
    }
    
    setupCardTo3DTransition(playerTeam, enemyTeam) {
        const combatZone = document.querySelector('.combat-zone-3d');
        if (!combatZone) {
            console.error('❌ Zone de combat 3D non trouvée !');
            return;
        }
        
        // Vérifications de sécurité
        if (!playerTeam || !enemyTeam) {
            console.error('❌ Équipes manquantes pour la transition 3D:', { playerTeam, enemyTeam });
            return;
        }
        
        // Créer les personnages 3D pour l'équipe du joueur
        const playerCards = document.querySelectorAll('.player-card');
        const playerCharacters = playerTeam.characters || [];
        
        console.log('🎮 Création des personnages joueur:', playerCharacters.length);
        
        playerCards.forEach((card, index) => {
            if (playerCharacters[index]) {
                const character3D = this.combat3D.create3DCharacter(
                    playerCharacters[index], 
                    'player', 
                    index
                );
                
                // Animation de sortie de la carte
                this.animateCharacterFromCard(card, character3D, 'player');
                combatZone.appendChild(character3D);
            }
        });
        
        // Créer les personnages 3D pour l'équipe adverse
        const enemyCards = document.querySelectorAll('.enemy-card');
        const enemyCharacters = enemyTeam.characters || [];
        
        console.log('⚔️ Création des personnages ennemis:', enemyCharacters.length);
        
        enemyCards.forEach((card, index) => {
            if (enemyCharacters[index]) {
                const character3D = this.combat3D.create3DCharacter(
                    enemyCharacters[index], 
                    'enemy', 
                    index
                );
                
                // Animation de sortie de la carte
                this.animateCharacterFromCard(card, character3D, 'enemy');
                combatZone.appendChild(character3D);
            }
        });
        
        // Démarrer le combat après les animations
        setTimeout(() => {
            this.startEpicCombat();
        }, 3000);
    }
    
    animateCharacterFromCard(card, character3D, teamType) {
        const cardRect = card.getBoundingClientRect();
        
        // Positionner le personnage 3D sur la carte initialement
        character3D.style.position = 'fixed';
        character3D.style.left = (cardRect.left + cardRect.width / 2 - 40) + 'px';
        character3D.style.top = (cardRect.top + cardRect.height / 2 - 60) + 'px';
        character3D.style.transform = 'scale(0.3) translateY(0)';
        character3D.style.opacity = '0';
        character3D.style.zIndex = '1000';
        
        // Animation d'apparition
        setTimeout(() => {
            character3D.style.opacity = '1';
            character3D.style.transform = 'scale(0.6) translateY(-30px)';
        }, 200);
        
        // Animation de sortie vers le battlefield
        setTimeout(() => {
            // Utiliser le système de positionnement 3D
            const position = parseInt(character3D.dataset.position) || 0;
            console.log(`🔧 ANIMATION: dataset.position=${character3D.dataset.position}, parsed=${position}, teamType=${teamType}`);
            this.combat3D.positionCharacter(character3D, position, teamType);
            
            character3D.style.position = 'absolute';
            character3D.style.transform = 'scale(1) translateY(0)';
            character3D.style.zIndex = '100';
            
            // Effet d'entrée spectaculaire
            character3D.classList.add('character-entrance');
            setTimeout(() => {
                character3D.classList.remove('character-entrance');
            }, 1000);
            
        }, 1200 + (Math.random() * 600)); // Délai aléatoire
    }
    
    startEpicCombat() {
        console.log('🔥 Démarrage du combat épique !');
        
        // Changer le texte du guild guide
        this.updateGuildGuideText("Le combat fait rage ! Regardez ces mouvements épiques !");
        
        // Commencer les actions de combat
        this.executeEpicCombatSequence();
    }
    
    executeEpicCombatSequence() {
        const playerCharacters = Array.from(document.querySelectorAll('.player-character-3d'));
        const enemyCharacters = Array.from(document.querySelectorAll('.enemy-character-3d'));
        
        if (playerCharacters.length === 0 || enemyCharacters.length === 0) {
            console.log('⚠️ Pas de personnages trouvés pour le combat');
            return;
        }
        
        let actionIndex = 0;
        
        const executeNextAction = () => {
            if (actionIndex >= 12) { // 12 actions de combat
                this.finishEpicCombat();
                return;
            }
            
            // Choisir un attaquant et une cible aléatoirement
            const allCharacters = [...playerCharacters, ...enemyCharacters];
            const attacker = allCharacters[Math.floor(Math.random() * allCharacters.length)];
            
            // Choisir une cible de l'équipe adverse
            const isPlayerAttacker = attacker.classList.contains('player-character-3d');
            const potentialTargets = isPlayerAttacker ? enemyCharacters : playerCharacters;
            const target = potentialTargets[Math.floor(Math.random() * potentialTargets.length)];
            
            if (attacker && target) {
                // Déterminer le type d'action selon le rôle
                const attackerRole = attacker.dataset.role || 'tank';
                const actionType = this.getActionTypeByRole(attackerRole);
                
                // Exécuter l'animation
                this.combat3D.animateCharacterAction(attacker, target, actionType);
                
                // Mettre à jour l'affichage d'action centrale
                this.updateCentralActionDisplay(attacker, target, actionType);
            }
            
            actionIndex++;
            
            // Programmer la prochaine action selon la vitesse
            const delay = 2500 / (this.combatSpeed || 2);
            setTimeout(executeNextAction, delay);
        };
        
        executeNextAction();
    }
    
    getActionTypeByRole(role) {
        const actions = {
            tank: ['physical_attack', 'defend'],
            dps: ['physical_attack', 'physical_attack'], // Plus d'attaques
            support: ['heal', 'magic_spell']
        };
        
        const roleActions = actions[role] || actions.tank;
        return roleActions[Math.floor(Math.random() * roleActions.length)];
    }
    
    updateCentralActionDisplay(attacker, target, actionType) {
        const actionDisplay = document.querySelector('.action-display');
        if (!actionDisplay) return;
        
        const attackerName = attacker.dataset.name || 'Combattant';
        const targetName = target.dataset.name || 'Cible';
        
        const actionText = this.getActionText(actionType, attackerName, targetName);
        const actionIcon = this.getActionIcon(actionType);
        
        actionDisplay.innerHTML = `
            <div class="action-announcement">
                <div class="action-icon">${actionIcon}</div>
                <div class="action-text">${actionText}</div>
            </div>
        `;
        
        actionDisplay.classList.add('show');
        
        setTimeout(() => {
            actionDisplay.classList.remove('show');
        }, 1800);
    }
    
    getActionText(actionType, attacker, target) {
        const texts = {
            physical_attack: `${attacker} attaque ${target} !`,
            magic_spell: `${attacker} lance un sort sur ${target} !`,
            heal: `${attacker} soigne ${target} !`,
            defend: `${attacker} se défend !`
        };
        
        return texts[actionType] || `${attacker} agit sur ${target} !`;
    }
    
    getActionIcon(actionType) {
        const icons = {
            physical_attack: '⚔️',
            magic_spell: '⚡',
            heal: '💚',
            defend: '🛡️'
        };
        
        return icons[actionType] || '⚔️';
    }
    
    finishEpicCombat() {
        // Déterminer le vainqueur aléatoirement pour la démo
        const isPlayerVictory = Math.random() > 0.5;
        
        this.showCombatResult(isPlayerVictory);
    }
    
    showCombatResult(isVictory) {
        const actionDisplay = document.querySelector('.action-display');
        if (!actionDisplay) return;
        
        const resultHTML = `
            <div class="combat-result ${isVictory ? 'victory' : 'defeat'}">
                <div class="result-icon">${isVictory ? '🏆' : '💀'}</div>
                <div class="result-title">${isVictory ? 'VICTOIRE!' : 'DÉFAITE'}</div>
                <div class="result-subtitle">${isVictory ? 'Vos champions triomphent !' : 'Vos champions sont tombés...'}</div>
            </div>
        `;
        
        actionDisplay.innerHTML = resultHTML;
        actionDisplay.classList.add('show', 'final-result');
        
        // Mettre à jour le guild guide
        this.updateGuildGuideText(isVictory ? 
            "Magnifique victoire ! Vos stratégies portent leurs fruits !" : 
            "Une défaite honorable... Analysez vos erreurs pour vous améliorer !"
        );
        
        // Afficher l'overlay de victoire ou défaite (SANS AUTO-FERMETURE)
        if (isVictory) {
            this.showBattlefieldVictory();
        } else {
            this.showBattlefieldDefeat();
        }
    }
    
    setupGuildGuideForCombat() {
        const guildGuide = document.querySelector('.battlefield-guild-guide');
        const guideText = document.querySelector('#guide-text-combat');
        const guildBubble = document.querySelector('.guild-guide-bubble');
        const guideAvatar = document.querySelector('#guild-avatar-combat');
        
        if (!guildGuide || !guideText) {
            console.warn('❌ Guide de guilde combat non trouvé');
            return;
        }
        
        // Images aléatoires pour le guide
        const guildImages = ['guild1.png', 'guild2.png', 'guild3.png', 'guild4.png'];
        let currentImageIndex = 0;
        
        // Fonction pour changer d'avatar
        const rotateAvatar = () => {
            if (guideAvatar) {
                currentImageIndex = (currentImageIndex + 1) % guildImages.length;
                guideAvatar.src = `/images/${guildImages[currentImageIndex]}`;
            }
        };
        
        // Phrases Kaamelott pour le combat
        const combatPhrases = [
            "⚔️ Que le combat commence ! Montrez-leur de quoi vous êtes capable !",
            "🛡️ C'est pas sorcier ! Il suffit de taper plus fort que l'ennemi !",
            "⚡ Attention ! Un sort puissant arrive !",
            "🩹 Ça c'est du bon soin ! Comme ma mère me faisait !",
            "🏹 Tir précis ! C'est ça l'expérience !",
            "⚔️ Combat épique en cours... Ne lâchez rien !",
            "🏆 Victoire ! Comme d'habitude, on a été brillants !",
            "💀 Défaite... C'est pas grave, on fera mieux la prochaine fois !",
            "🔥 Ça chauffe ! Le combat s'intensifie !",
            "⭐ Coup critique ! Ça c'est de la technique !"
        ];
        
        let phraseIndex = 0;
        
        // Commenter toutes les 3 secondes
        const commentInterval = setInterval(() => {
            if (phraseIndex < combatPhrases.length) {
                guideText.textContent = combatPhrases[phraseIndex];
                phraseIndex++;
                
                // Changer d'avatar à chaque commentaire
                rotateAvatar();
                
                // Animation de la bulle
                if (guildBubble) {
                    guildBubble.classList.add('show');
                    
                    // Animation de l'avatar
                    if (guideAvatar) {
                        guideAvatar.style.transform = 'scale(1.1)';
                        setTimeout(() => {
                            guideAvatar.style.transform = 'scale(1)';
                        }, 200);
                    }
                }
            } else {
                clearInterval(commentInterval);
            }
        }, 3000);
        
        // Stocker l'ID de l'intervalle dans le modal pour le nettoyer plus tard
        const modal = document.querySelector('.battlefield-modal');
        if (modal) {
            modal.dataset.commentInterval = commentInterval;
        }
        
        // Afficher la bulle dès le départ
        if (guildBubble) {
            setTimeout(() => {
                guildBubble.classList.add('show');
            }, 500);
        }
    }
    
    updateGuildGuideText(text) {
        const guideText = document.querySelector('#guide-text');
        if (guideText) {
            guideText.textContent = text;
        }
    }

    // =============== UTILITAIRES DE PLATEAU ===============
    
    determinePlateauType(matchData) {
        // Aléatoirement choisir entre medieval et dystopian
        const plateauTypes = ['medieval', 'dystopian'];
        return plateauTypes[Math.floor(Math.random() * plateauTypes.length)];
    }
    
    resumeBackgroundVideo() {
        const videos = document.querySelectorAll('video[data-was-playing="true"]');
        videos.forEach(video => {
            video.play();
            video.removeAttribute('data-was-playing');
        });
    }
    
    pauseBackgroundVideo() {
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            if (!video.paused) {
                video.pause();
                video.dataset.wasPlaying = 'true';
            }
        });
    }

    // =============== ANCIENNE MÉTHODE DE TEST (À CONSERVER) ===============
    testBattlefieldVisualization() {
        const nameElement = card.querySelector('.character-name');
        const name = nameElement ? nameElement.textContent : 'Fighter';
        const teamColor = teamType === 'player' ? '#4CAF50' : '#F44336';
        
        // Récupérer les données du personnage depuis la carte de manière sécurisée
        let characterData = {};
        try {
            characterData = JSON.parse(card.dataset.character || card.dataset.characterData || '{}');
        } catch (error) {
            console.warn('Erreur lors du parsing des données de personnage:', error);
            characterData = {
                name: nameElement?.textContent || 'Fighter',
                role: 'warrior',
                level: 1,
                hp: 100,
                attack: 50
            };
        }
        
        const role = characterData.role || 'warrior';
        const characterImage = card.querySelector('.character-avatar img');
        const imageSrc = characterImage ? characterImage.src : `/images/characters/${this.getCharacterImageByRole(role)}`;
        
        const character = document.createElement('div');
        character.className = `battlefield-character ${teamType}-character ${role}-character`;
        character.dataset.role = role;
        character.dataset.name = name;
        character.innerHTML = `
            <div class="character-model" style="border-color: ${teamColor}">
                <img src="${imageSrc}" alt="${name}" class="character-image" />
                <div class="character-name-tag">${name}</div>
            </div>
            <div class="character-health-bar">
                <div class="health-fill" style="background-color: ${teamColor}"></div>
                <div class="health-text">${characterData.hp || 150}</div>
            </div>
        `;
        
        return character;
    }

    animateCardToPosition(card, position, character) {
        // Obtenir les positions pour l'animation
        const cardRect = card.getBoundingClientRect();
        const positionRect = position.getBoundingClientRect();
        
        // Créer un clone pour l'animation
        const clone = card.cloneNode(true);
        clone.style.position = 'fixed';
        clone.style.top = cardRect.top + 'px';
        clone.style.left = cardRect.left + 'px';
        clone.style.width = cardRect.width + 'px';
        clone.style.height = cardRect.height + 'px';
        clone.style.zIndex = '9999';
        clone.style.transition = 'all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        
        document.body.appendChild(clone);
        
        // Masquer la carte originale
        card.style.opacity = '0.3';
        
        // Animer vers la position
        requestAnimationFrame(() => {
            clone.style.top = positionRect.top + positionRect.height / 2 - cardRect.height / 2 + 'px';
            clone.style.left = positionRect.left + positionRect.width / 2 - cardRect.width / 2 + 'px';
            clone.style.transform = 'scale(0.6)';
        });
        
        // Remplacer par le personnage après l'animation
        setTimeout(() => {
            clone.remove();
            position.appendChild(character);
            character.style.animation = 'character-appear 0.8s ease-out';
        }, 1500);
    }

    playBattlefieldCombat(matchData, speed) {
        // Simulation d'événements de combat avec animations épiques
        const events = matchData.events || this.generateEpicCombatEvents();
        
        console.log('🎮 Démarrage du combat épique sur le champ de bataille!');
        console.log('⚡ Vitesse:', speed + 'x');
        
        // Commentaire de début de combat
        this.showKaamelottComment('start');
        
        // Simuler le combat avec des effets visuels épiques
        this.simulateEpicBattlefieldEvents(events, speed);
    }

    simulateEpicBattlefieldEvents(events, speed) {
        const effectsContainer = document.getElementById('combat-effects');
        const animationsContainer = document.getElementById('combat-animations');
        let eventIndex = 0;
        
        const processNextEvent = () => {
            if (eventIndex >= events.length) {
                // Le combat est terminé, la fin sera gérée par finishEpicCombat()
                return;
            }
            
            const event = events[eventIndex];
            this.showEpicBattlefieldEffect(event, effectsContainer);
            this.playEpicAnimation(event, animationsContainer, speed);
            
            // Commentaire du Guild Guide selon l'action
            this.showKaamelottComment(event.type || 'attack');
            
            eventIndex++;
            setTimeout(processNextEvent, (2000 / speed));
        };
        
        processNextEvent();
    }

    // =============== FONCTIONS D'EFFETS SPÉCIAUX ===============
    
    createSlashEffect(target, container) {
        const slash = document.createElement('div');
        slash.className = 'slash-effect';
        slash.innerHTML = '⚡💥⚡';
        slash.style.position = 'absolute';
        slash.style.fontSize = '3rem';
        slash.style.color = '#ff6b6b';
        slash.style.animation = 'slashAnimation 0.5s ease-out';
        
        const rect = target.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        slash.style.left = (rect.left - containerRect.left) + 'px';
        slash.style.top = (rect.top - containerRect.top) + 'px';
        
        container.appendChild(slash);
        setTimeout(() => slash.remove(), 500);
    }

    createShieldEffect(defender, container) {
        const shield = document.createElement('div');
        shield.className = 'shield-effect';
        shield.innerHTML = '🛡️✨🛡️';
        shield.style.position = 'absolute';
        shield.style.fontSize = '2.5rem';
        shield.style.color = 'gold';
        shield.style.animation = 'shieldAnimation 0.8s ease-out';
        
        const rect = defender.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        shield.style.left = (rect.left - containerRect.left) + 'px';
        shield.style.top = (rect.top - containerRect.top) + 'px';
        
        container.appendChild(shield);
        setTimeout(() => shield.remove(), 800);
    }

    createMagicEffect(mage, container) {
        const magic = document.createElement('div');
        magic.className = 'magic-effect';
        magic.innerHTML = '⚡🔮✨🌟⚡';
        magic.style.position = 'absolute';
        magic.style.fontSize = '2rem';
        magic.style.color = '#9b59b6';
        magic.style.animation = 'magicAnimation 1s ease-out';
        
        const rect = mage.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        magic.style.left = (rect.left - containerRect.left) + 'px';
        magic.style.top = (rect.top - containerRect.top) + 'px';
        
        container.appendChild(magic);
        setTimeout(() => magic.remove(), 1000);
    }

    createHealEffect(healer, container) {
        const heal = document.createElement('div');
        heal.className = 'heal-effect';
        heal.innerHTML = '💚✨🌟✨💚';
        heal.style.position = 'absolute';
        heal.style.fontSize = '2rem';
        heal.style.color = '#2ecc71';
        heal.style.animation = 'healAnimation 1.2s ease-out';
        
        const rect = healer.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        heal.style.left = (rect.left - containerRect.left) + 'px';
        heal.style.top = (rect.top - containerRect.top) + 'px';
        
        container.appendChild(heal);
        setTimeout(() => heal.remove(), 1200);
    }

    getRandomCharacter(characters, team = null, role = null) {
        const filtered = Array.from(characters).filter(char => {
            const matchesTeam = !team || char.classList.contains(`${team}-character`);
            const matchesRole = !role || char.classList.contains(`${role}-character`);
            return matchesTeam && matchesRole;
        });
        
        return filtered[Math.floor(Math.random() * filtered.length)];
    }

    getEffectIcon(type) {
        const icons = {
            'attack': '⚔️💥',
            'defense': '🛡️✨',
            'magic': '🔮⚡',
            'heal': '💚✨',
            'critical': '💥🔥',
            'miss': '💨👻'
        };
        return icons[type] || '⚔️';
    }

    generateEpicCombatEvents() {
        return [
            { description: "⚔️ Le combat commence !", type: 'start' },
            { description: "🛡️ Le Paladin charge bravement !", type: 'attack' },
            { description: "🏹 L'Archer riposte avec précision !", type: 'attack' },
            { description: "⚡ Le Mage lance un sort dévastateur !", type: 'magic' },
            { description: "🛡️ Belle parade du défenseur !", type: 'defense' },
            { description: "🩹 Soins miraculeux du Guérisseur !", type: 'heal' },
            { description: "🔥 Le Berserker entre en rage !", type: 'attack' },
            { description: "🌟 Sort de protection magique !", type: 'magic' },
            { description: "⚔️ Combo d'attaques spectaculaires !", type: 'attack' },
            { description: "🏆 Combat épique terminé !", type: 'victory' }
        ];
    }

    showEpicBattlefieldEffect(event, container) {
        if (!container) return;
        
        const effectIcon = this.getEffectIcon(event.type);
        const effectClass = `effect-${event.type}`;
        
        const effect = document.createElement('div');
        effect.className = `combat-effect-animation ${effectClass}`;
        effect.innerHTML = `
            <div class="effect-icon">${effectIcon}</div>
            <div class="effect-text">${event.description}</div>
            <div class="effect-particles"></div>
        `;
        
        container.appendChild(effect);
        
        // Retirer l'effet après animation
        setTimeout(() => {
            if (effect.parentNode) {
                effect.remove();
            }
        }, 2500);
    }

    playEpicAnimation(event, container, speed) {
        if (!container) return;
        
        const characters = document.querySelectorAll('.battlefield-character');
        const animationType = event.type || 'attack';
        
        switch (animationType) {
            case 'attack':
                this.animateAttack(characters, container, speed);
                break;
            case 'defense':
                this.animateDefense(characters, container, speed);
                break;
            case 'magic':
                this.animateMagic(characters, container, speed);
                break;
            case 'heal':
                this.animateHeal(characters, container, speed);
                break;
            default:
                this.animateGeneric(characters, container, speed);
        }
    }

    animateAttack(characters, container, speed) {
        const attacker = this.getRandomCharacter(characters, 'player');
        const target = this.getRandomCharacter(characters, 'enemy');
        
        if (attacker && target) {
            // Animation d'attaque
            attacker.style.transform = 'scale(1.2) translateX(20px)';
            attacker.style.transition = `all ${0.3 / speed}s ease-out`;
            
            setTimeout(() => {
                target.style.transform = 'scale(0.9) translateX(-10px)';
                target.style.filter = 'brightness(0.7)';
                
                // Effet de coup
                this.createSlashEffect(target, container);
                
                setTimeout(() => {
                    attacker.style.transform = '';
                    target.style.transform = '';
                    target.style.filter = '';
                }, 500 / speed);
            }, 200 / speed);
        }
    }

    animateDefense(characters, container, speed) {
        const defender = this.getRandomCharacter(characters, 'player');
        
        if (defender) {
            // Animation de défense avec bouclier
            defender.style.transform = 'scale(1.1)';
            defender.style.filter = 'brightness(1.3) drop-shadow(0 0 20px gold)';
            
            this.createShieldEffect(defender, container);
            
            setTimeout(() => {
                defender.style.transform = '';
                defender.style.filter = '';
            }, 800 / speed);
        }
    }

    animateMagic(characters, container, speed) {
        const mage = this.getRandomCharacter(characters, null, 'mage');
        
        if (mage) {
            // Animation de magie
            mage.style.transform = 'scale(1.15) translateY(-10px)';
            mage.style.filter = 'brightness(1.5) drop-shadow(0 0 30px purple)';
            
            this.createMagicEffect(mage, container);
            
            setTimeout(() => {
                mage.style.transform = '';
                mage.style.filter = '';
            }, 1000 / speed);
        }
    }

    animateHeal(characters, container, speed) {
        const healer = this.getRandomCharacter(characters, 'player');
        
        if (healer) {
            // Animation de soin
            healer.style.filter = 'brightness(1.8) drop-shadow(0 0 25px lightgreen)';
            
            this.createHealEffect(healer, container);
            
            // Mettre à jour la barre de vie
            const healthBar = healer.querySelector('.health-fill');
            if (healthBar) {
                healthBar.style.width = '100%';
            }
            
            setTimeout(() => {
                healer.style.filter = '';
            }, 1200 / speed);
        }
    }

    animateGeneric(characters, container, speed) {
        const character = this.getRandomCharacter(characters);
        
        if (character) {
            character.style.transform = 'scale(1.1)';
            setTimeout(() => {
                character.style.transform = '';
            }, 400 / speed);
        }
    }

    generateDemoCombatEvents() {
        return [
            { description: "Le combat commence!" },
            { description: "Guerrier attaque avec son épée!" },
            { description: "Mage lance un sort de feu!" },
            { description: "L'archer vise avec précision!" },
            { description: "Combat épique en cours..." },
            { description: "Victoire!" }
        ];
    }

    showBattlefieldVictory() {
        const modal = document.querySelector('.battlefield-modal');
        if (!modal) return;
        
        const victoryOverlay = document.createElement('div');
        victoryOverlay.className = 'battlefield-victory-overlay';
        victoryOverlay.innerHTML = `
            <div class="victory-content">
                <h2>🏆 VICTOIRE! 🏆</h2>
                <p>Combat terminé avec succès!</p>
                <div class="victory-actions">
                    <button class="victory-btn primary" onclick="this.closest('.battlefield-modal').querySelector('.close-battlefield').click()">
                        ✅ Fermer
                    </button>
                    <button class="victory-btn secondary" onclick="runCompleteTest()">
                        🔄 Nouveau test
                    </button>
                </div>
            </div>
        `;
        
        modal.appendChild(victoryOverlay);
        
        // Commentaire de victoire
        this.showKaamelottComment('victory');
    }

    showBattlefieldDefeat() {
        const modal = document.querySelector('.battlefield-modal');
        if (!modal) return;
        
        const defeatOverlay = document.createElement('div');
        defeatOverlay.className = 'battlefield-defeat-overlay';
        defeatOverlay.innerHTML = `
            <div class="defeat-content">
                <h2>💀 DÉFAITE 💀</h2>
                <p>Ce n'est que partie remise !</p>
                <div class="defeat-actions">
                    <button class="defeat-btn primary" onclick="this.closest('.battlefield-modal').querySelector('.close-battlefield').click()">
                        ✅ Fermer
                    </button>
                    <button class="defeat-btn secondary" onclick="runCompleteTest()">
                        🔄 Nouveau test
                    </button>
                </div>
            </div>
        `;
        
        modal.appendChild(defeatOverlay);
        
        // Commentaire de défaite
        this.showKaamelottComment('defeat');
    }

    // =============== FONCTION DE TEST POUR LE BATTLEFIELD ===============
    testBattlefieldVisualization() {
        console.log('🎮 Test de la visualisation battlefield');
        
        // Données de test simulées avec vraies classes
        const mockMatchData = {
            id: 'test-123',
            team_a: {
                player: 'Vous',
                characters: [
                    { name: 'Paladin Divin', role: 'tank', level: 20, hp: 250, attack: 90, image: 'paladin.png' },
                    { name: 'Mage de Feu', role: 'mage', level: 18, hp: 150, attack: 180, image: 'mage.png' },
                    { name: 'Prêtre Guérisseur', role: 'priest', level: 16, hp: 130, attack: 70, image: 'priest.png' }
                ]
            },
            team_b: {
                player: 'Adversaire Redoutable',
                characters: [
                    { name: 'Guerrier Berserker', role: 'warrior', level: 19, hp: 200, attack: 160, image: 'warrior.png' },
                    { name: 'Archer Précis', role: 'archer', level: 17, hp: 140, attack: 130, image: 'archer.png' },
                    { name: 'Assassin Furtif', role: 'assassin', level: 21, hp: 180, attack: 100, image: 'assassin.png' }
                ]
            },
            events: [
                { description: "⚔️ Le combat commence !" },
                { description: "🛡️ Paladin charge vers l'ennemi !" },
                { description: "🏹 L'Archer riposte avec précision !" },
                { description: "⚡ Sorcier lance un sort dévastateur !" },
                { description: "🩹 Guérisseur soigne ses alliés !" },
                { description: "🔥 Berserker entre en rage !" },
                { description: "🌿 Druide invoque la nature !" },
                { description: "⚔️ Combat épique en cours..." },
                { description: "🏆 Victoire héroïque !" }
            ]
        };
        
        // Lancer la visualisation avec les données de test
        this.displayCombatVisualizationModal(mockMatchData);
    }

    pauseBackgroundVideo() {
        // Stopper toutes les vidéos de background
        const videos = document.querySelectorAll('video[autoplay]');
        videos.forEach(video => {
            video.pause();
        });
        
        // Stopper les animations CSS si nécessaire
        const animatedElements = document.querySelectorAll('.animated-bg, .gradient-animation');
        animatedElements.forEach(element => {
            element.style.animationPlayState = 'paused';
        });
    }

    resumeBackgroundVideo() {
        // Reprendre toutes les vidéos de background
        const videos = document.querySelectorAll('video[autoplay]');
        videos.forEach(video => {
            video.play();
        });
        
        // Reprendre les animations CSS
        const animatedElements = document.querySelectorAll('.animated-bg, .gradient-animation');
        animatedElements.forEach(element => {
            element.style.animationPlayState = 'running';
        });
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
        
        // Vérifications de sécurité pour l'objet team
        if (!team) {
            console.warn(`Équipe ${teamType} manquante, utilisation des données par défaut`);
            team = { characters: [] };
        }
        
        // Si on a les vraies données des personnages, on les utilise
        if (team.characters && Array.isArray(team.characters) && team.characters.length > 0) {
            team.characters.forEach((character, index) => {
                if (!character) {
                    console.warn(`Personnage ${index} manquant dans l'équipe ${teamType}`);
                    return;
                }
                
                const characterImage = this.getCharacterImage(character);
                const roleClass = character.role ? character.role.toLowerCase() : 'fighter';
                charactersHTML += `
                    <div class="fighter-card" id="${teamType}-char-${index}">
                        <div class="fighter-image">
                            <img src="${characterImage}" alt="${character.name || 'Personnage'}" />
                            <div class="class-overlay ${roleClass}">${this.getRoleName(character.role)}</div>
                            <div class="stats-overlay">
                                <div class="stat-item hp">
                                    <i class="fas fa-heart"></i>
                                    <span>${character.hp || 100}</span>
                                </div>
                                <div class="stat-item attack">
                                    <i class="fas fa-sword"></i>
                                    <span>${character.atk || 50}</span>
                                </div>
                            </div>
                        </div>
                        <div class="fighter-name">
                            <h4>${character.name || 'Héros'}</h4>
                        </div>
                        <div class="fighter-health">
                            <div class="health-bar" style="width: 100%"></div>
                        </div>
                    </div>
                `;
            });
        } else {
            // Fallback avec des personnages par défaut
            const defaultCharacters = [
                { name: 'Héros 1', role: 'warrior', hp: 100, atk: 50 },
                { name: 'Héros 2', role: 'mage', hp: 80, atk: 70 },
                { name: 'Héros 3', role: 'archer', hp: 90, atk: 60 }
            ];
            
            defaultCharacters.forEach((character, index) => {
                const characterImage = this.getCharacterImage(character);
                const roleClass = character.role.toLowerCase();
                charactersHTML += `
                    <div class="fighter-card" id="${teamType}-char-${index}">
                        <div class="fighter-image">
                            <img src="${characterImage}" alt="${character.name}" />
                            <div class="class-overlay ${roleClass}">${this.getRoleName(character.role)}</div>
                            <div class="stats-overlay">
                                <div class="stat-item hp">
                                    <i class="fas fa-heart"></i>
                                    <span>${character.hp}</span>
                                </div>
                                <div class="stat-item attack">
                                    <i class="fas fa-sword"></i>
                                    <span>${character.atk}</span>
                                </div>
                            </div>
                        </div>
                        <div class="fighter-name">
                            <h4>${character.name}</h4>
                        </div>
                        <div class="fighter-health">
                            <div class="health-bar" style="width: 100%"></div>
                        </div>
                    </div>
                `;
            });
        }
        
        return charactersHTML;
    }

    getCharacterImage(character) {
        // Vérifications de sécurité pour l'objet character
        if (!character) {
            console.warn('Personnage manquant, utilisation de l\'image par défaut');
            return '/images/characters/warrior.png';
        }
        
        // Si le personnage a une artworkUrl, l'utiliser en priorité
        if (character.artworkUrl) {
            return character.artworkUrl;
        }
        
        // Sinon, utiliser le système de mapping existant
        const characterName = typeof character === 'string' ? character : character.name;
        
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
            'fighter': '/images/characters/warrior.png',
            // Mapping pour les noms spécifiques
            'garde noir': '/images/characters/warrior.png',
            'dark guard': '/images/characters/warrior.png',
            'dark-guard': '/images/characters/warrior.png',
            'assassin ombre': '/images/characters/assassin.png',
            'shadow assassin': '/images/characters/assassin.png',
            'shadow-assassin': '/images/characters/assassin.png',
            'nécromant': '/images/characters/mage.png',
            'necromancer': '/images/characters/mage.png',
            'archer elfe': '/images/characters/archer.png',
            'elf archer': '/images/characters/archer.png',
            'elf-archer': '/images/characters/archer.png',
            'mage sage': '/images/characters/mage.png',
            'wise mage': '/images/characters/mage.png',
            'wise-mage': '/images/characters/mage.png'
        };
        
        // Essayer plusieurs approches pour matcher l'image
        let imagePath = characterImages['default'];
        
        if (characterName && typeof characterName === 'string') {
            const normalizedName = characterName.toLowerCase().replace(/\s+/g, '');
            const dashName = characterName.toLowerCase().replace(/\s+/g, '-');
            
            // Essayer par nom exact
            if (characterImages[characterName.toLowerCase()]) {
                imagePath = characterImages[characterName.toLowerCase()];
            }
            // Essayer par nom avec tirets
            else if (characterImages[dashName]) {
                imagePath = characterImages[dashName];
            }
            // Essayer par nom sans espaces
            else if (characterImages[normalizedName]) {
                imagePath = characterImages[normalizedName];
            }
            // Essayer de deviner par le rôle dans le nom
            else if (normalizedName.includes('guerrier') || normalizedName.includes('warrior') || normalizedName.includes('garde')) {
                imagePath = characterImages['warrior'];
            }
            else if (normalizedName.includes('mage') || normalizedName.includes('wizard') || normalizedName.includes('necro')) {
                imagePath = characterImages['mage'];
            }
            else if (normalizedName.includes('archer') || normalizedName.includes('bow') || normalizedName.includes('elfe')) {
                imagePath = characterImages['archer'];
            }
            else if (normalizedName.includes('pretre') || normalizedName.includes('priest') || normalizedName.includes('healer')) {
                imagePath = characterImages['priest'];
            }
            else if (normalizedName.includes('paladin') || normalizedName.includes('tank')) {
                imagePath = characterImages['paladin'];
            }
            else if (normalizedName.includes('assassin') || normalizedName.includes('rogue') || normalizedName.includes('ombre')) {
                imagePath = characterImages['assassin'];
            }
        }
        
        console.log(`🖼️ Image pour "${characterName}": ${imagePath}`);
        return imagePath;
    }

    getRoleName(role) {
        // Vérifications de sécurité pour le rôle
        if (!role || typeof role !== 'string') {
            return 'Combattant';
        }
        
        const roleNames = {
            'tank': 'Tank',
            'healer': 'Soigneur',
            'mage': 'Mage',
            'assassin': 'Assassin',
            'archer': 'Archer',
            'fighter': 'Combattant',
            'warrior': 'Guerrier',
            'priest': 'Prêtre',
            'paladin': 'Paladin'
        };
        return roleNames[role.toLowerCase()] || 'Combattant';
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
        const modal = document.querySelector('.battlefield-modal');
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
                // Reprendre la vidéo de background
                this.resumeBackgroundVideo();
                // Retirer la classe combat-active
                document.body.classList.remove('combat-active');
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
                if (currentSpeedSpan) {
                    currentSpeedSpan.textContent = `x${currentSpeed}`;
                }
                
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

    // =============== GUILD GUIDE SYSTEM AMÉLIORÉ ===============
    initGuildGuide() {
        // Limiter le nombre de tentatives pour éviter les boucles infinies
        this.guildGuideInitAttempts++;
        if (this.guildGuideInitAttempts > 50) {
            console.warn('🏰 Arrêt des tentatives d\'initialisation du Guild Guide après 50 essais');
            return;
        }
        
        // Vérification de l'existence de l'élément avant initialisation
        const guildGuideElement = document.querySelector('.guild-guide-container');
        if (!guildGuideElement) {
            console.log(`🏰 Guild Guide container non trouvé (tentative ${this.guildGuideInitAttempts}/50), initialisation différée`);
            // Réessayer après un court délai si l'élément n'existe pas encore
            setTimeout(() => this.initGuildGuide(), 100);
            return;
        }
        
        console.log('🏰 Guild Guide initialisé avec succès');
        
        // Initialiser les commentaires du guide (images déjà initialisées dans le constructeur)
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

    getNextGuildImage() {
        // Vérifier que les images sont initialisées
        if (!this.guildImages || !Array.isArray(this.guildImages) || this.guildImages.length === 0) {
            console.warn('Images du guild guide non initialisées, utilisation de l\'image par défaut');
            return '/images/guild1.png';
        }
        
        // Vérifier l'index
        if (typeof this.currentGuildImageIndex !== 'number' || this.currentGuildImageIndex < 0) {
            this.currentGuildImageIndex = 0;
        }
        
        const image = this.guildImages[this.currentGuildImageIndex];
        this.currentGuildImageIndex = (this.currentGuildImageIndex + 1) % this.guildImages.length;
        return image || '/images/guild1.png';
    }

    showGuildGuideComment(text, emoji = '💬') {
        const guildGuideAvatar = document.querySelector('.guild-guide-avatar img');
        const commentaryElement = document.querySelector('.guild-guide-commentary');
        const commentaryBubble = document.querySelector('.commentary-bubble p');
        
        // Vérifications robustes avant manipulation DOM
        if (!guildGuideAvatar) {
            console.warn('🏰 Guild guide avatar non trouvé');
            return;
        }
        
        if (!commentaryElement) {
            console.warn('🏰 Guild guide commentary element non trouvé');
            return;
        }
        
        if (!commentaryBubble) {
            console.warn('🏰 Guild guide commentary bubble non trouvé - tentative de création');
            // Essayer de créer l'élément manquant
            const bubbleContainer = document.querySelector('.commentary-bubble');
            if (bubbleContainer) {
                const pElement = document.createElement('p');
                bubbleContainer.appendChild(pElement);
                // Retry avec le nouvel élément
                setTimeout(() => this.showGuildGuideComment(text, emoji), 50);
                return;
            } else {
                console.warn('🏰 Conteneur commentary-bubble non trouvé - abandon');
                return;
            }
        }
        
        // Changer l'image du guild guide à chaque nouveau texte
        const nextImage = this.getNextGuildImage();
        if (nextImage && guildGuideAvatar) {
            try {
                guildGuideAvatar.src = nextImage;
            } catch (error) {
                console.error('Erreur lors du changement d\'image du guide:', error);
            }
        }
        
        // Mettre à jour le texte avec protection supplémentaire
        try {
            if (commentaryBubble && typeof commentaryBubble.textContent !== 'undefined') {
                commentaryBubble.textContent = `${emoji} ${text}`;
            }
        } catch (error) {
            console.error('Erreur lors de la mise à jour du texte:', error);
            return;
        }
        
        // Afficher le commentaire avec animation
        try {
            if (commentaryElement) {
                commentaryElement.classList.add('show');
                
                // Cacher après 4 secondes
                setTimeout(() => {
                    if (commentaryElement && commentaryElement.classList) {
                        commentaryElement.classList.remove('show');
                    }
                }, 4000);
            }
        } catch (error) {
            console.error('Erreur lors de l\'animation:', error);
        }
        
        console.log('🗣️ Guild Guide:', text);
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
        if (!centerElement) {
            console.warn('🎬 Élément central non trouvé pour l\'animation de début de round');
            return;
        }
        
        try {
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
        } catch (error) {
            console.error('Erreur lors de l\'animation de début de round:', error);
        }
    }

    async animateCharacterAction(event, actionType) {
        // Animation centrale d'action
        await this.showCentralAnimation(actionType);
        
        // Déterminer quel personnage agit basé sur les données de l'événement
        let teamType, charIndex;
        
        // Essayer de déterminer l'équipe et le personnage basé sur les données de l'événement
        if (event.target_name && event.target_name.includes('🔵')) {
            teamType = 'player';
        } else if (event.target_name && event.target_name.includes('🔴')) {
            teamType = 'enemy';
        } else {
            // Fallback aléatoire
            teamType = Math.random() > 0.5 ? 'player' : 'enemy';
        }
        
        charIndex = Math.floor(Math.random() * 3);
        
        const characterElement = document.getElementById(`${teamType}-char-${charIndex}`);
        
        if (characterElement) {
            // Animation du personnage selon l'action
            switch (actionType) {
                case 'ATTACK':
                    characterElement.classList.add('attacking');
                    setTimeout(() => characterElement.classList.remove('attacking'), 800);
                    break;
                case 'HEAL':
                    characterElement.classList.add('healing');
                    setTimeout(() => characterElement.classList.remove('healing'), 1000);
                    break;
                case 'DEFENSE':
                    characterElement.classList.add('defending');
                    setTimeout(() => characterElement.classList.remove('defending'), 600);
                    break;
            }
        }
    }

    async showCentralAnimation(actionType) {
        const animationElement = document.getElementById('combat-animation');
        if (!animationElement) return;

        let animationHTML = '';
        let animationClass = '';

        switch (actionType) {
            case 'ATTACK':
                const attackTypes = [
                    { html: '<i class="fas fa-sword"></i>', class: 'sword-attack', emoji: '⚔️' },
                    { html: '<i class="fas fa-bow-arrow"></i>', class: 'arrow-attack', emoji: '🏹' },
                    { html: '<i class="fas fa-fist-raised"></i>', class: 'punch-attack', emoji: '👊' }
                ];
                const attackType = attackTypes[Math.floor(Math.random() * attackTypes.length)];
                animationHTML = attackType.html;
                animationClass = attackType.class;
                break;
                
            case 'MAGIC':
                const magicTypes = [
                    { html: '<i class="fas fa-bolt"></i>', class: 'lightning-attack', emoji: '⚡' },
                    { html: '<i class="fas fa-fire"></i>', class: 'fire-attack', emoji: '🔥' },
                    { html: '<i class="fas fa-snowflake"></i>', class: 'ice-attack', emoji: '❄️' }
                ];
                const magicType = magicTypes[Math.floor(Math.random() * magicTypes.length)];
                animationHTML = magicType.html;
                animationClass = magicType.class;
                break;
                
            case 'HEAL':
                const healTypes = [
                    { html: '<i class="fas fa-heart"></i>', class: 'heart-heal', emoji: '💚' },
                    { html: '<i class="fas fa-seedling"></i>', class: 'nature-heal', emoji: '🌱' },
                    { html: '<i class="fas fa-plus-circle"></i>', class: 'potion-heal', emoji: '🧪' }
                ];
                const healType = healTypes[Math.floor(Math.random() * healTypes.length)];
                animationHTML = healType.html;
                animationClass = healType.class;
                break;
                
            case 'DEFENSE':
                const defenseTypes = [
                    { html: '<i class="fas fa-shield-alt"></i>', class: 'shield-block', emoji: '🛡️' },
                    { html: '<i class="fas fa-fist-raised"></i>', class: 'counter-attack', emoji: '🤜' }
                ];
                const defenseType = defenseTypes[Math.floor(Math.random() * defenseTypes.length)];
                animationHTML = defenseType.html;
                animationClass = defenseType.class;
                break;
                
            default:
                animationHTML = '<i class="fas fa-star"></i>';
                animationClass = 'default-action';
        }

        // Afficher l'animation avec protection
        try {
            if (!animationElement) {
                console.warn('🎬 Élément d\'animation non trouvé');
                return;
            }
            animationElement.innerHTML = animationHTML;
            animationElement.className = `combat-animation ${animationClass} show`;
        } catch (error) {
            console.error('Erreur lors de l\'affichage de l\'animation:', error);
            return;
        }
        
        await this.sleep(600);
        
        // Cacher l'animation avec protection
        try {
            if (animationElement) {
                animationElement.classList.remove('show');
                animationElement.classList.add('hide');
            }
        } catch (error) {
            console.error('Erreur lors de la suppression des classes:', error);
        }
        
        await this.sleep(200);
        
        try {
            if (animationElement) {
                animationElement.className = 'combat-animation';
                animationElement.innerHTML = '';
            }
        } catch (error) {
            console.error('Erreur lors du nettoyage de l\'animation:', error);
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

    closeBattlefieldModal() {
        const modal = document.querySelector('.battlefield-modal');
        if (modal) {
            // Nettoyer l'intervalle de commentaires
            const commentInterval = modal.dataset.commentInterval;
            if (commentInterval) {
                clearInterval(parseInt(commentInterval));
                delete modal.dataset.commentInterval;
            }
            
            // Arrêter les vidéos de background
            if (this.pauseBackgroundVideo) {
                this.pauseBackgroundVideo();
            }
            
            // Fermer le modal
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

// Export global pour les tests
window.GameInterface = GameInterface;

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