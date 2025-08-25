// // =============== SYSTÈME DE CLASSEMENT - SANTONS SCRIPT TACTICS ===============

// class RankingSystem {
//     constructor() {
//         this.currentFilter = 'global';
//         this.currentPage = 1;
//         this.playersPerPage = 10;
//         this.userRank = 42; // Position du joueur (sera récupérée via API)
//         this.userName = 'VotreNom';
//         this.init();
//     }

//     init() {
//         try {
//             this.getUserInfo();
//             this.attachEventListeners();
//             this.loadRankingData();
//             console.log('🏆 Système de classement initialisé');
//         } catch (error) {
//             console.warn('Erreur lors de l\'initialisation du classement:', error);
//         }
//     }

//     getUserInfo() {
//         // Récupère les informations utilisateur depuis les données globales
//         if (window.userInfo && window.userInfo.username) {
//             this.userName = window.userInfo.username;
//         }
//     }

//     attachEventListeners() {
//         try {
//             // Boutons de filtre
//             const filterButtons = document.querySelectorAll('.ranking-btn');
//             filterButtons.forEach(btn => {
//                 btn.addEventListener('click', (e) => {
//                     const filter = e.target.closest('.ranking-btn').dataset.filter;
//                     this.changeFilter(filter);
//                 });
//             });

//             // Bouton "Voir plus"
//             const loadMoreBtn = document.querySelector('.load-more-btn');
//             if (loadMoreBtn) {
//                 loadMoreBtn.addEventListener('click', () => {
//                     this.loadMorePlayers();
//                 });
//             }

//             // Écouter les changements d'onglets pour rafraîchir les données
//             document.addEventListener('tabChange', () => {
//                 this.refreshRanking();
//             });

//         } catch (error) {
//             console.warn('Erreur lors de l\'attachement des événements:', error);
//         }
//     }

//     changeFilter(filter) {
//         try {
//             // Mise à jour de l'interface
//             document.querySelectorAll('.ranking-btn').forEach(btn => btn.classList.remove('active'));
//             document.querySelector(`[data-filter="${filter}"]`).classList.add('active');

//             // Mise à jour des données
//             this.currentFilter = filter;
//             this.currentPage = 1;
//             this.loadRankingData();

//         } catch (error) {
//             console.warn('Erreur lors du changement de filtre:', error);
//         }
//     }

//     loadRankingData() {
//         try {
//             // Simulation de données (à remplacer par un appel API)
//             const mockData = this.getMockRankingData();
//             this.displayRanking(mockData);
//             this.updateUserPosition();

//         } catch (error) {
//             console.warn('Erreur lors du chargement des données:', error);
//         }
//     }

//     getMockRankingData() {
//         // Données simulées - à remplacer par de vrais appels API
//         const baseData = {
//             global: [
//                 { rank: 1, name: 'ChampionSST', rating: 2150, wins: 87, losses: 13, change: 12 },
//                 { rank: 2, name: 'TacticalMaster', rating: 2050, wins: 76, losses: 24, change: -5 },
//                 { rank: 3, name: 'StrategicLord', rating: 1980, wins: 65, losses: 35, change: 18 },
//                 { rank: 4, name: 'BattleExpert', rating: 1920, wins: 58, losses: 42, change: 8 },
//                 { rank: 5, name: 'GuildWarrior', rating: 1875, wins: 52, losses: 38, change: -15 },
//                 { rank: 6, name: 'SantonMaster', rating: 1820, wins: 47, losses: 33, change: 22 },
//                 { rank: 7, name: 'TacticsPro', rating: 1765, wins: 41, losses: 29, change: -3 },
//                 { rank: 8, name: 'WarriorKing', rating: 1710, wins: 38, losses: 32, change: 15 },
//                 { rank: 9, name: 'ProGamer', rating: 1680, wins: 35, losses: 30, change: 7 },
//                 { rank: 10, name: 'ElitePlayer', rating: 1650, wins: 32, losses: 28, change: -8 },
//                 { rank: 11, name: 'ShadowFighter', rating: 1620, wins: 30, losses: 25, change: 12 },
//                 { rank: 12, name: 'LegendHunter', rating: 1590, wins: 28, losses: 22, change: -6 },
//                 { rank: 13, name: 'MysticWarrior', rating: 1560, wins: 25, losses: 20, change: 9 },
//                 { rank: 14, name: 'DragonSlayer', rating: 1530, wins: 23, losses: 18, change: -11 },
//                 { rank: 15, name: 'PhoenixRider', rating: 1500, wins: 20, losses: 15, change: 14 },
//                 { rank: 16, name: 'IronKnight', rating: 1480, wins: 18, losses: 12, change: 8 },
//                 { rank: 17, name: 'StormMage', rating: 1460, wins: 16, losses: 14, change: -4 },
//                 { rank: 18, name: 'FrostGuardian', rating: 1440, wins: 15, losses: 13, change: 6 },
//                 { rank: 19, name: 'FireBlade', rating: 1420, wins: 14, losses: 11, change: -9 },
//                 { rank: 20, name: 'ThunderStrike', rating: 1400, wins: 13, losses: 10, change: 11 },
//                 // Plus de joueurs pour arriver jusqu'à la position de l'utilisateur
//                 { rank: 35, name: 'PlayerAlpha', rating: 1300, wins: 20, losses: 15, change: 5 },
//                 { rank: 36, name: 'PlayerBeta', rating: 1290, wins: 19, losses: 14, change: -2 },
//                 { rank: 37, name: 'PlayerGamma', rating: 1280, wins: 18, losses: 13, change: 8 },
//                 { rank: 38, name: 'PlayerDelta', rating: 1270, wins: 17, losses: 12, change: -6 },
//                 { rank: 39, name: 'PlayerEpsilon', rating: 1260, wins: 16, losses: 11, change: 3 },
//                 { rank: 40, name: 'PlayerZeta', rating: 1255, wins: 15, losses: 10, change: -4 },
//                 { rank: 41, name: 'PlayerEta', rating: 1252, wins: 15, losses: 9, change: 2 },
//                 // L'utilisateur à sa position
//                 { rank: this.userRank, name: this.userName, rating: 1250, wins: 15, losses: 8, change: 25 },
//                 // Joueurs après l'utilisateur
//                 { rank: 43, name: 'PlayerTheta', rating: 1248, wins: 14, losses: 9, change: -1 },
//                 { rank: 44, name: 'PlayerIota', rating: 1245, wins: 14, losses: 8, change: 4 },
//                 { rank: 45, name: 'PlayerKappa', rating: 1240, wins: 13, losses: 7, change: -3 }
//             ],
//             weekly: [
//                 { rank: 1, name: 'TacticalMaster', rating: 2050, wins: 12, losses: 2, change: 45 },
//                 { rank: 2, name: 'StrategicLord', rating: 1980, wins: 10, losses: 3, change: 38 },
//                 { rank: 3, name: 'ChampionSST', rating: 2150, wins: 8, losses: 1, change: 32 },
//                 { rank: this.userRank, name: this.userName, rating: 1250, wins: 3, losses: 1, change: 25 }
//             ],
//             monthly: [
//                 { rank: 1, name: 'ChampionSST', rating: 2150, wins: 35, losses: 5, change: 125 },
//                 { rank: 2, name: 'BattleExpert', rating: 1920, wins: 28, losses: 12, change: 89 },
//                 { rank: 3, name: 'TacticalMaster', rating: 2050, wins: 25, losses: 8, change: 76 },
//                 { rank: this.userRank, name: this.userName, rating: 1250, wins: 15, losses: 8, change: 25 }
//             ]
//         };

//         return baseData[this.currentFilter] || baseData.global;
//     }

//     displayRanking(players) {
//         try {
//             const topPlayersContainer = document.querySelector('.top-players');
//             const otherPlayersContainer = document.querySelector('.other-players');

//             if (!topPlayersContainer || !otherPlayersContainer) return;

//             // Afficher tous les joueurs dans la liste normale (pas de séparation top 3)
//             const allPlayersHTML = players.map(player => 
//                 this.createRankingEntryHTML(player)
//             ).join('');

//             // Mettre tout dans le container "other-players" 
//             otherPlayersContainer.innerHTML = allPlayersHTML + `
//                 <div class="ranking-more">
//                     <button class="load-more-btn">
//                         <i class="fas fa-chevron-down"></i> Voir plus de joueurs
//                     </button>
//                 </div>
//             `;

//             // Vider le container top players
//             topPlayersContainer.innerHTML = '';

//             // Réattacher l'événement du bouton "Voir plus"
//             const loadMoreBtn = otherPlayersContainer.querySelector('.load-more-btn');
//             if (loadMoreBtn) {
//                 loadMoreBtn.addEventListener('click', () => this.loadMorePlayers());
//             }

//         } catch (error) {
//             console.warn('Erreur lors de l\'affichage du classement:', error);
//         }
//     }

//     createRankingEntryHTML(player) {
//         const changeClass = player.change > 0 ? 'positive' : player.change < 0 ? 'negative' : 'neutral';
        
//         // Vérifier si c'est l'utilisateur actuel
//         const isCurrentUser = player.rank === this.userRank || player.name === this.userName;
//         const userClass = isCurrentUser ? 'user-entry' : '';
        
//         let rankDisplay = `#${player.rank}`;
//         if (player.rank === 1) rankDisplay = '<i class="fas fa-crown"></i> 1';
//         else if (player.rank === 2) rankDisplay = '<i class="fas fa-medal"></i> 2';
//         else if (player.rank === 3) rankDisplay = '<i class="fas fa-award"></i> 3';

//         const rankClass = player.rank === 1 ? 'gold' : player.rank === 2 ? 'silver' : player.rank === 3 ? 'bronze' : '';

//         // Générer le tooltip explicatif pour les points
//         let tooltipText = '';
//         let displayValue = '';
        
//         if (player.change > 0) {
//             tooltipText = `+${player.change} pts (dernière victoire)`;
//             displayValue = `+${player.change}`;
//         } else if (player.change < 0) {
//             tooltipText = `${player.change} pts (dernière défaite)`;
//             displayValue = `${player.change}`;
//         } else {
//             tooltipText = 'Aucun changement de points';
//             displayValue = '0';
//         }

//         return `
//             <div class="ranking-entry ${userClass}">
//                 <span class="rank ${rankClass}">${rankDisplay}</span>
//                 <div class="player-info">
//                     <span class="player-name">${player.name}</span>
//                     <div class="player-stats">
//                         <span class="rating"><i class="fas fa-star"></i> ${player.rating}</span>
//                         <span class="wins"><i class="fas fa-trophy"></i> ${player.wins}V</span>
//                         <span class="losses"><i class="fas fa-times"></i> ${player.losses}D</span>
//                     </div>
//                 </div>
//                 <span class="rating-change ${changeClass}" data-tooltip="${tooltipText}">${displayValue}</span>
//             </div>
//         `;
//     }

//     updateUserPosition() {
//         try {
//             // Mise à jour de l'indicateur sticky
//             const stickyIndicator = document.querySelector('.user-ranking-sticky .position-number');
//             if (stickyIndicator) {
//                 stickyIndicator.textContent = `#${this.userRank}`;
//             }

//             const ratingText = document.querySelector('.user-ranking-sticky .rating-text');
//             if (ratingText) {
//                 ratingText.textContent = '1250 pts';
//             }

//         } catch (error) {
//             console.warn('Erreur lors de la mise à jour de la position utilisateur:', error);
//         }
//     }

//     loadMorePlayers() {
//         try {
//             this.currentPage++;
//             // Simulation - charger plus de joueurs
//             console.log(`Chargement de la page ${this.currentPage}`);
            
//             // Ici vous feriez un appel API pour charger plus de données
//             // Pour l'instant, on simule avec un message
//             const loadMoreBtn = document.querySelector('.load-more-btn');
//             if (loadMoreBtn) {
//                 loadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Chargement...';
                
//                 setTimeout(() => {
//                     loadMoreBtn.innerHTML = '<i class="fas fa-chevron-down"></i> Voir plus de joueurs';
//                 }, 1000);
//             }

//         } catch (error) {
//             console.warn('Erreur lors du chargement de plus de joueurs:', error);
//         }
//     }

//     refreshRanking() {
//         try {
//             this.loadRankingData();
//             console.log('Classement rafraîchi');
//         } catch (error) {
//             console.warn('Erreur lors du rafraîchissement:', error);
//         }
//     }

//     // Méthodes pour intégration API future
//     async fetchRankingFromAPI(filter, page = 1) {
//         try {
//             // const response = await fetch(`/api/ranking?filter=${filter}&page=${page}`);
//             // const data = await response.json();
//             // return data.players;
            
//             // Pour l'instant, retourner les données simulées
//             return this.getMockRankingData();
//         } catch (error) {
//             console.warn('Erreur API classement:', error);
//             return this.getMockRankingData();
//         }
//     }

//     async fetchUserRank() {
//         try {
//             // const response = await fetch('/api/user/rank');
//             // const data = await response.json();
//             // this.userRank = data.rank;
//             // this.updateUserPosition();
//         } catch (error) {
//             console.warn('Erreur récupération rang utilisateur:', error);
//         }
//     }
// }

// // Initialisation
// window.rankingSystem = null;
// document.addEventListener('DOMContentLoaded', function() {
//     try {
//         window.rankingSystem = new RankingSystem();
//     } catch (error) {
//         console.warn('Erreur lors de l\'initialisation du système de classement:', error);
//     }
// });
