// =============== GUIDE DE GUILDE - SANTONS SCRIPT TACTICS ===============

class GuildGuide {
    constructor() {
        this.currentGuildImage = 1;
        this.isLoggedIn = false;
        this.userName = '';
        this.dialogueState = 'welcome';
        this.init();
    }

    init() {
        try {
            this.checkUserStatus();
            this.createGuideInterface();
            this.startImageRotation();
            this.setupAutoDialogue(); // Fonctionnalité ajoutée - dialogue automatique
        } catch (error) {
            console.warn('Erreur lors de l\'initialisation du guide:', error);
        }
    }

    checkUserStatus() {
        // Utiliser les informations passées depuis Twig
        try {
            if (window.userInfo) {
                this.isLoggedIn = window.userInfo.isLoggedIn;
                this.userName = window.userInfo.username || 'Joueur';
                console.log('Statut utilisateur:', this.isLoggedIn ? `Connecté - ${this.userName}` : 'Non connecté');
            } else {
                console.warn('window.userInfo non disponible');
            }
        } catch (error) {
            console.warn('Erreur lors de la vérification du statut utilisateur:', error);
        }
    }

    createGuideInterface() {
        const guideHTML = `
            <div class="guild-guide-container" id="guild-guide">
                <div class="guild-avatar" id="guild-avatar">
                    <img src="images/guild1.png" alt="Guide de Guilde" id="guild-img">
                </div>
                
                <div class="guild-dialogue-box" id="guild-dialogue" style="display: none;">
                    <div class="dialogue-content">
                        <div class="dialogue-text" id="dialogue-text"></div>
                        <div class="dialogue-buttons" id="dialogue-buttons"></div>
                    </div>
                    <button class="dialogue-close" id="dialogue-close">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', guideHTML);
        this.attachEventListeners();
    }

    attachEventListeners() {
        try {
            const avatar = document.getElementById('guild-avatar');
            const dialogueBox = document.getElementById('guild-dialogue');
            const closeBtn = document.getElementById('dialogue-close');

            if (avatar) {
                // Le Guild Guide est TOUJOURS cliquable - Force le clic
                avatar.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('🏰 Clic sur Guild Guide détecté!');
                    this.openDialogue();
                }, true); // Mode capture pour priorité
                
                // Style visuel pour indiquer que c'est cliquable
                avatar.style.cursor = 'pointer';
                avatar.title = 'Cliquez pour parler au Guide de Guilde';
                
                // Effet visuel au survol
                avatar.addEventListener('mouseenter', () => {
                    avatar.style.transform = 'scale(1.1)';
                    avatar.style.transition = 'transform 0.3s ease';
                });
                
                avatar.addEventListener('mouseleave', () => {
                    avatar.style.transform = 'scale(1)';
                });
            } else {
                console.warn('⚠️ Element guild-avatar non trouvé');
            }

            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    this.closeDialogue();
                });
            }

            document.addEventListener('click', (e) => {
                // Ne fermer que si le clic est vraiment à l'extérieur ET que ce n'est pas un bouton du dialogue
                if (dialogueBox && 
                    !dialogueBox.contains(e.target) && 
                    !avatar?.contains(e.target) &&
                    !e.target.classList.contains('dialogue-btn')) {
                    this.closeDialogue();
                }
            });
        } catch (error) {
            console.warn('Erreur lors de l\'attachement des événements Guild Guide:', error);
        }
    }

    startImageRotation() {
        setInterval(() => {
            try {
                if (this.dialogueState !== 'response') {
                    this.currentGuildImage = (this.currentGuildImage % 3) + 1;
                    const imgElement = document.getElementById('guild-img');
                    if (imgElement) {
                        imgElement.src = `images/guild${this.currentGuildImage}.png`;
                    }
                }
            } catch (error) {
                console.warn('Erreur lors de la rotation d\'images:', error);
            }
        }, 3000);
    }

    setupAutoDialogue() {
        // Système d'auto-lancement UNIQUEMENT pour les utilisateurs non connectés
        if (!this.isLoggedIn) {
            // Première apparition automatique après 2 secondes
            setTimeout(() => {
                if (!this.isLoggedIn) { // Double vérification
                    this.openDialogue();
                }
            }, 2000);
            
            // Puis réapparition toutes les 30 secondes si pas connecté
            this.autoDialogueTimer = setInterval(() => {
                const dialogueBox = document.getElementById('guild-dialogue');
                if (!this.isLoggedIn && (!dialogueBox || dialogueBox.style.display === 'none')) {
                    this.openDialogue();
                }
            }, 30000);
        }
        // Pas de timer pour les utilisateurs connectés - ils doivent cliquer manuellement
    }

    openDialogue() {
        try {
            console.log('🏰 Ouverture du dialogue Guild Guide');
            const dialogueBox = document.getElementById('guild-dialogue');
            if (dialogueBox) {
                dialogueBox.style.display = 'block';
                setTimeout(() => {
                    dialogueBox.classList.add('active');
                }, 10);
                this.showWelcomeMessage();
            } else {
                console.warn('⚠️ Element guild-dialogue non trouvé');
            }
        } catch (error) {
            console.warn('Erreur lors de l\'ouverture du dialogue:', error);
        }
    }

    closeDialogue() {
        try {
            const dialogueBox = document.getElementById('guild-dialogue');
            if (dialogueBox) {
                dialogueBox.classList.remove('active');
                setTimeout(() => {
                    dialogueBox.style.display = 'none';
                    this.dialogueState = 'welcome';
                }, 300);
                
                // Si utilisateur non connecté, reprendre le timer après fermeture
                if (!this.isLoggedIn) {
                    // Nettoyer l'ancien timer
                    if (this.autoDialogueTimer) {
                        clearInterval(this.autoDialogueTimer);
                    }
                    // Redémarrer un nouveau timer pour 30 secondes
                    this.autoDialogueTimer = setTimeout(() => {
                        // Puis revenir au timer régulier
                        this.setupAutoDialogue();
                    }, 30000);
                }
            }
        } catch (error) {
            console.warn('Erreur lors de la fermeture du dialogue:', error);
        }
    }

    showWelcomeMessage() {
        try {
            const textEl = document.getElementById('dialogue-text');
            const buttonsEl = document.getElementById('dialogue-buttons');

            if (!textEl || !buttonsEl) return;

            if (!this.isLoggedIn) {
                textEl.innerHTML = `
                    <p>Bonjour noble étranger, bienvenue au <strong>Santons Script Tactics</strong> !</p>
                    <p>Créez votre équipe de 3 héros et affrontez d'autres joueurs dans des combats tactiques.</p>
                    <p>Pour commencer votre aventure :</p>
                `;
                
                buttonsEl.innerHTML = `
                    <button class="dialogue-btn primary" onclick="window.location.href='/register'">
                        <i class="fas fa-user-plus"></i> S'inscrire
                    </button>
                    <button class="dialogue-btn secondary" onclick="window.location.href='/login'">
                        <i class="fas fa-sign-in-alt"></i> Se connecter
                    </button>
                `;
            } else {
                textEl.innerHTML = `
                    <p>Bonjour <strong>${this.userName}</strong>, quelle est votre demande ?</p>
                `;
                
                buttonsEl.innerHTML = `
                    <button class="dialogue-btn" onclick="event.stopPropagation(); window.guildGuide.showGameplayHelp()">
                        <i class="fas fa-gamepad"></i> Comment Jouer
                    </button>
                    <button class="dialogue-btn" onclick="event.stopPropagation(); window.guildGuide.showCharacterRoles()">
                        <i class="fas fa-users"></i> Rôles des Personnages
                    </button>
                    <button class="dialogue-btn" onclick="event.stopPropagation(); window.guildGuide.showTeamStrategy()">
                        <i class="fas fa-chess"></i> Stratégies d'Équipe
                    </button>
                    <button class="dialogue-btn debug" onclick="event.stopPropagation(); window.guildGuide.showDebugMenu()" style="background: #ff6b6b;">
                        <i class="fas fa-bug"></i> Debug Outils
                    </button>
                `;
            }
        } catch (error) {
            console.warn('Erreur lors de l\'affichage du message de bienvenue:', error);
        }
    }

    showGameplayHelp() {
        try {
            const textEl = document.getElementById('dialogue-text');
            const buttonsEl = document.getElementById('dialogue-buttons');

            if (!textEl || !buttonsEl) return;

            textEl.innerHTML = `<p>Choisissez ce que vous souhaitez apprendre :</p>`;

            buttonsEl.innerHTML = `
                <button class="dialogue-btn" onclick="event.stopPropagation(); window.guildGuide.showTeamCreation()">
                    <i class="fas fa-plus-circle"></i> Créer votre Équipe
                </button>
                <button class="dialogue-btn" onclick="event.stopPropagation(); window.guildGuide.showFindBattle()">
                    <i class="fas fa-search"></i> Rechercher un Combat
                </button>
                <button class="dialogue-btn" onclick="event.stopPropagation(); window.guildGuide.showAutoBattle()">
                    <i class="fas fa-play"></i> Combat Automatique
                </button>
                <button class="dialogue-btn back" onclick="event.stopPropagation(); window.guildGuide.showWelcomeMessage()">
                    <i class="fas fa-arrow-left"></i> Retour
                </button>
            `;
        } catch (error) {
            console.warn('Erreur lors de l\'affichage de l\'aide gameplay:', error);
        }
    }

    showCharacterRoles() {
        const textEl = document.getElementById('dialogue-text');
        const buttonsEl = document.getElementById('dialogue-buttons');

        textEl.innerHTML = `<p>Découvrez les différents rôles de vos héros :</p>`;

        buttonsEl.innerHTML = `
            <button class="dialogue-btn" onclick="event.stopPropagation(); window.guildGuide.showTankRole()">
                <i class="fas fa-shield-alt"></i> Tank
            </button>
            <button class="dialogue-btn" onclick="event.stopPropagation(); window.guildGuide.showDPSRole()">
                <i class="fas fa-sword"></i> DPS
            </button>
            <button class="dialogue-btn" onclick="event.stopPropagation(); window.guildGuide.showHealerRole()">
                <i class="fas fa-heart"></i> Soigneur
            </button>
            <button class="dialogue-btn back" onclick="event.stopPropagation(); window.guildGuide.showWelcomeMessage()">
                <i class="fas fa-arrow-left"></i> Retour
            </button>
        `;
    }

    showTeamCreation() {
        this.showDetailedResponse(
            "Création d'Équipe",
            `<p><strong>Former votre équipe parfaite :</strong></p>
            <ul>
                <li>Choisissez <strong>3 personnages</strong> complémentaires</li>
                <li>Équilibrez Tank, DPS et Soigneur</li>
                <li>Consultez les statistiques totales</li>
                <li>Testez différentes combinaisons</li>
            </ul>`
        );
    }

    showFindBattle() {
        this.showDetailedResponse(
            "Recherche de Combat",
            `<p><strong>Trouver des adversaires :</strong></p>
            <ul>
                <li>Votre équipe doit être complète (3 héros)</li>
                <li>Le système trouve un adversaire équitable</li>
                <li>Attendez la confirmation de match</li>
            </ul>`
        );
    }

    showDetailedResponse(title, content) {
        this.dialogueState = 'response';
        const imgElement = document.getElementById('guild-img');
        if (imgElement) {
            imgElement.src = 'images/guild4.png';
        }

        const textEl = document.getElementById('dialogue-text');
        const buttonsEl = document.getElementById('dialogue-buttons');

        if (textEl) {
            textEl.innerHTML = `<h3>${title}</h3>${content}`;
        }

        if (buttonsEl) {
            buttonsEl.innerHTML = `
                <button class="dialogue-btn back" onclick="event.stopPropagation(); window.guildGuide.returnToPreviousMenu()">
                    <i class="fas fa-arrow-left"></i> Retour
                </button>
            `;
        }
    }

    returnToPreviousMenu() {
        try {
            this.dialogueState = 'menu';
            this.currentGuildImage = 1;
            const imgElement = document.getElementById('guild-img');
            if (imgElement) {
                imgElement.src = `images/guild${this.currentGuildImage}.png`;
            }
            this.showWelcomeMessage();
        } catch (error) {
            console.warn('Erreur lors du retour au menu précédent:', error);
        }
    }

    showTeamStrategy() {
        try {
            const textEl = document.getElementById('dialogue-text');
            const buttonsEl = document.getElementById('dialogue-buttons');

            if (!textEl || !buttonsEl) return;

            textEl.innerHTML = `<p>Choisissez le type de stratégie à apprendre :</p>`;

            buttonsEl.innerHTML = `
                <button class="dialogue-btn" onclick="event.stopPropagation(); window.guildGuide.showBalancedStrategy()">
                    <i class="fas fa-balance-scale"></i> Équipe Équilibrée
                </button>
                <button class="dialogue-btn" onclick="event.stopPropagation(); window.guildGuide.showAggressiveStrategy()">
                    <i class="fas fa-fire"></i> Stratégie Agressive
                </button>
                <button class="dialogue-btn" onclick="event.stopPropagation(); window.guildGuide.showDefensiveStrategy()">
                    <i class="fas fa-shield"></i> Stratégie Défensive
                </button>
                <button class="dialogue-btn back" onclick="event.stopPropagation(); window.guildGuide.showWelcomeMessage()">
                    <i class="fas fa-arrow-left"></i> Retour
                </button>
            `;
        } catch (error) {
            console.warn('Erreur lors de l\'affichage des stratégies d\'équipe:', error);
        }
    }

    showBalancedStrategy() {
        this.showDetailedResponse(
            "Équipe Équilibrée",
            `<p><strong>La composition classique :</strong></p>
            <ul>
                <li><strong>1 Tank</strong> - Absorbe les dégâts</li>
                <li><strong>1 DPS</strong> - Inflige les dégâts</li>
                <li><strong>1 Soigneur</strong> - Maintient l'équipe en vie</li>
            </ul>
            <p>Cette composition offre une bonne polyvalence pour tous types d'adversaires.</p>`
        );
    }

    showAggressiveStrategy() {
        this.showDetailedResponse(
            "Stratégie Agressive",
            `<p><strong>Maximum de dégâts :</strong></p>
            <ul>
                <li><strong>2 DPS</strong> - Double puissance d'attaque</li>
                <li><strong>1 Tank</strong> - Protection minimale</li>
            </ul>
            <p>Idéal contre des équipes défensives, mais risqué face à d'autres équipes agressives.</p>`
        );
    }

    showDefensiveStrategy() {
        this.showDetailedResponse(
            "Stratégie Défensive",
            `<p><strong>Survie maximale :</strong></p>
            <ul>
                <li><strong>1 Tank</strong> - Protection principale</li>
                <li><strong>2 Soigneurs</strong> - Récupération constante</li>
            </ul>
            <p>Parfait pour survivre aux équipes agressives et gagner par endurance.</p>`
        );
    }

    showTankRole() {
        this.showDetailedResponse(
            "Rôle Tank",
            `<p><strong>Le protecteur de l'équipe :</strong></p>
            <ul>
                <li><strong>Points de Vie élevés</strong> - Encaisse les dégâts</li>
                <li><strong>Défense élevée</strong> - Réduit les dégâts reçus</li>
                <li><strong>Compétences défensives</strong> - Protège les alliés</li>
            </ul>
            <p>Placez toujours votre Tank en première ligne !</p>`
        );
    }

    showDPSRole() {
        this.showDetailedResponse(
            "Rôle DPS",
            `<p><strong>Le destructeur d'ennemis :</strong></p>
            <ul>
                <li><strong>Attaque élevée</strong> - Inflige de gros dégâts</li>
                <li><strong>Vitesse élevée</strong> - Frappe en premier</li>
                <li><strong>Compétences offensives</strong> - Éliminations rapides</li>
            </ul>
            <p>Le DPS doit cibler les ennemis les plus dangereux en premier !</p>`
        );
    }

    showHealerRole() {
        this.showDetailedResponse(
            "Rôle Soigneur",
            `<p><strong>Le soutien de l'équipe :</strong></p>
            <ul>
                <li><strong>Compétences de soin</strong> - Restaure les PV</li>
                <li><strong>Buffs d'équipe</strong> - Améliore les alliés</li>
                <li><strong>Magie élevée</strong> - Soins plus puissants</li>
            </ul>
            <p>Le Soigneur doit rester en sécurité derrière la ligne de front !</p>`
        );
    }

    showAutoBattle() {
        this.showDetailedResponse(
            "Combat Automatique",
            `<p><strong>Comment fonctionne le combat :</strong></p>
            <ul>
                <li>Les combats sont <strong>automatiques</strong></li>
                <li>Basés sur les <strong>statistiques</strong> de vos héros</li>
                <li>Chaque personnage utilise ses <strong>compétences</strong></li>
                <li>La <strong>stratégie d'équipe</strong> est importante</li>
            </ul>
            <p>Concentrez-vous sur la formation et l'équipement de votre équipe !</p>`
        );
    }

    showDebugMenu() {
        try {
            const textEl = document.getElementById('dialogue-text');
            const buttonsEl = document.getElementById('dialogue-buttons');

            if (!textEl || !buttonsEl) return;

            textEl.innerHTML = `<p>Outils de développement et debug :</p>`;

            buttonsEl.innerHTML = `
                <button class="dialogue-btn" onclick="event.stopPropagation(); window.guildGuide.runPositioningTest()">
                    <i class="fas fa-crosshairs"></i> Test Positionnement
                </button>
                <button class="dialogue-btn" onclick="event.stopPropagation(); window.guildGuide.debugActiveCombat()">
                    <i class="fas fa-sword"></i> Debug Combat Actuel
                </button>
                <button class="dialogue-btn" onclick="event.stopPropagation(); window.guildGuide.showSystemInfo()">
                    <i class="fas fa-info-circle"></i> Informations Système
                </button>
                <button class="dialogue-btn back" onclick="event.stopPropagation(); window.guildGuide.showWelcomeMessage()">
                    <i class="fas fa-arrow-left"></i> Retour
                </button>
            `;
        } catch (error) {
            console.warn('Erreur lors de l\'affichage du menu debug:', error);
        }
    }

    runPositioningTest() {
        this.showDetailedResponse(
            "Test de Positionnement",
            `<p><strong>Test en cours...</strong></p>
            <p>Vérifiez la console (F12) pour les détails du test.</p>`
        );
        
        // Lancer le test de positionnement
        if (window.debugPositioning) {
            window.debugPositioning();
        } else {
            console.error('❌ Fonction debugPositioning non disponible');
        }
    }

    debugActiveCombat() {
        this.showDetailedResponse(
            "Debug Combat Actuel",
            `<p><strong>Analyse du combat en cours...</strong></p>
            <p>Vérifiez la console (F12) pour les détails.</p>`
        );
        
        // Debug du combat actuel
        if (window.debugCombatPositioning) {
            window.debugCombatPositioning();
        } else {
            console.error('❌ Fonction debugCombatPositioning non disponible');
        }
    }

    showSystemInfo() {
        const combat3dAvailable = typeof Combat3DSystem !== 'undefined';
        const gameInterfaceAvailable = typeof gameInterface !== 'undefined';
        const debugAvailable = typeof window.debugPositioning !== 'undefined';
        
        this.showDetailedResponse(
            "Informations Système",
            `<p><strong>État des composants :</strong></p>
            <ul>
                <li>Combat3DSystem: ${combat3dAvailable ? '✅ Disponible' : '❌ Non disponible'}</li>
                <li>Game Interface: ${gameInterfaceAvailable ? '✅ Disponible' : '❌ Non disponible'}</li>
                <li>Debug Tools: ${debugAvailable ? '✅ Disponible' : '❌ Non disponible'}</li>
                <li>Utilisateur: ${this.isLoggedIn ? `✅ ${this.userName}` : '❌ Non connecté'}</li>
            </ul>`
        );
    }
}

// Initialisation
window.guildGuide = null;
document.addEventListener('DOMContentLoaded', function() {
    try {
        window.guildGuide = new GuildGuide();
        console.log('🏰 Guide de guilde initialisé');
    } catch (error) {
        console.warn('Erreur lors de l\'initialisation du guide de guilde:', error);
    }
});
