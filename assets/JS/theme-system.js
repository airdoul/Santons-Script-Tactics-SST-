// =============== SYSTÈME DE THÈMES - MÉDIÉVAL / DYSTOPIQUE ===============

class ThemeSystem {
    constructor() {
        this.currentTheme = 'medieval'; // Par défaut médiéval
        this.themes = {
            medieval: {
                name: 'Médiéval',
                backgrounds: [
                    'images/plateauxMedieval/cimetière.png',
                    'images/plateauxMedieval/cours du chateau.png',
                    'images/plateauxMedieval/place du village.png'
                ],
                videos: [
                    'images/backgroundMedieval/AdobeStock_265340144.mov',
                    'images/backgroundMedieval/bgMedieval1.mp4'
                ],
                colors: {
                    primary: '#8b4513',
                    secondary: '#daa520',
                    accent: '#2d4a2b'
                }
            },
            dysto: {
                name: 'Dystopique',
                backgrounds: [
                    'images/plateauxDysto/champ de bataille dysto.png',
                    'images/plateauxDysto/cours moderne.png',
                    'images/plateauxDysto/place village moderne.png'
                ],
                videos: [
                    'images/backgroundDysto/bgDysto.mov',
                    'images/backgroundDysto/bgDysto1.mov'
                ],
                colors: {
                    primary: '#ff6b35',
                    secondary: '#7209b7',
                    accent: '#c71585'
                }
            }
        };
        this.init();
    }

    init() {
        this.createThemeSwitcher();
        this.createVideoBackground();
        this.applyTheme(this.currentTheme);
        this.setRandomBackground();
        this.setRandomVideo();
    }

    createThemeSwitcher() {
        const switcher = document.createElement('div');
        switcher.className = 'theme-switcher';
        switcher.innerHTML = `
            <div class="theme-switcher-container">
                <button class="theme-btn" data-theme="medieval">
                    <i class="fas fa-castle"></i>
                    <span>Médiéval</span>
                </button>
                <button class="theme-btn" data-theme="dysto">
                    <i class="fas fa-city"></i>
                    <span>Dystopique</span>
                </button>
            </div>
        `;

        document.body.appendChild(switcher);

        // Event listeners pour les boutons
        const themeButtons = switcher.querySelectorAll('.theme-btn');
        themeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const theme = btn.dataset.theme;
                this.switchTheme(theme);
            });
        });

        this.updateActiveButton();
    }

    createVideoBackground() {
        // Créer l'élément vidéo pour le background de la page
        let videoElement = document.getElementById('theme-video-background');
        if (!videoElement) {
            videoElement = document.createElement('video');
            videoElement.id = 'theme-video-background';
            videoElement.className = 'theme-video-background';
            videoElement.autoplay = true;
            videoElement.muted = true;
            videoElement.loop = true;
            videoElement.playsInline = true;
            
            // La vidéo utilise uniquement les styles CSS définis dans _theme-system.scss
            // Pas de styles inline pour permettre au CSS de contrôler l'apparence
            
            document.body.insertBefore(videoElement, document.body.firstChild);
        }
        
        // Créer l'overlay sombre séparé
        let overlayElement = document.getElementById('video-overlay');
        if (!overlayElement) {
            overlayElement = document.createElement('div');
            overlayElement.id = 'video-overlay';
            overlayElement.className = 'video-overlay';
            
            // Insérer l'overlay après la vidéo (donc au-dessus)
            document.body.insertBefore(overlayElement, document.body.children[1]);
        }
    }

    switchTheme(themeName) {
        if (this.themes[themeName]) {
            this.currentTheme = themeName;
            this.applyTheme(themeName);
            this.setRandomBackground();
            this.setRandomVideo();
            this.updateActiveButton();
            
            // Sauvegarder le choix
            localStorage.setItem('sst-theme', themeName);
            
            console.log(`🎨 Thème changé pour: ${this.themes[themeName].name}`);
        }
    }

    applyTheme(themeName) {
        const theme = this.themes[themeName];
        if (!theme) return;

        // Appliquer les couleurs CSS custom properties
        const root = document.documentElement;
        root.style.setProperty('--theme-primary', theme.colors.primary);
        root.style.setProperty('--theme-secondary', theme.colors.secondary);
        root.style.setProperty('--theme-accent', theme.colors.accent);

        // Ajouter classe de thème au body
        document.body.className = document.body.className.replace(/theme-\w+/g, '');
        document.body.classList.add(`theme-${themeName}`);
    }

    setRandomBackground() {
        const theme = this.themes[this.currentTheme];
        const randomBg = theme.backgrounds[Math.floor(Math.random() * theme.backgrounds.length)];
        
        // Appliquer le background directement sur la game-card
        const gameCard = document.querySelector('.game-card');
        if (gameCard) {
            gameCard.style.backgroundImage = `url('${randomBg}')`;
            gameCard.style.backgroundSize = 'cover';
            gameCard.style.backgroundPosition = 'center';
            gameCard.style.backgroundRepeat = 'no-repeat';
            gameCard.style.position = 'relative';
            
            // Ajouter un overlay pour la lisibilité
            if (!gameCard.querySelector('.theme-overlay')) {
                const overlay = document.createElement('div');
                overlay.className = 'theme-overlay';
                overlay.style.cssText = `
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(135deg, 
                        rgba(248, 247, 244, 0.8) 0%,
                        rgba(248, 247, 244, 0.7) 50%,
                        rgba(248, 247, 244, 0.9) 100%
                    );
                    border-radius: inherit;
                    pointer-events: none;
                    z-index: 1;
                `;
                gameCard.appendChild(overlay);
                
                // S'assurer que le contenu reste au-dessus
                const cardContent = gameCard.children;
                for (let i = 0; i < cardContent.length; i++) {
                    if (cardContent[i] !== overlay) {
                        cardContent[i].style.position = 'relative';
                        cardContent[i].style.zIndex = '2';
                    }
                }
            }
        }

        console.log(`🖼️ Background changé: ${randomBg}`);
    }

    setRandomVideo() {
        const theme = this.themes[this.currentTheme];
        const randomVideo = theme.videos[Math.floor(Math.random() * theme.videos.length)];
        
        // Appliquer la vidéo de background sur toute la page
        const videoElement = document.getElementById('theme-video-background');
        if (videoElement) {
            videoElement.src = randomVideo;
            videoElement.load(); // Recharger la vidéo
            
            // S'assurer que la vidéo démarre
            videoElement.play().catch(error => {
                console.warn('Impossible de lire la vidéo automatiquement:', error);
            });
        }

        console.log(`🎬 Vidéo de background changée: ${randomVideo}`);
    }

    updateActiveButton() {
        const buttons = document.querySelectorAll('.theme-btn');
        buttons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.theme === this.currentTheme);
        });
    }

    // Charger le thème sauvegardé
    loadSavedTheme() {
        const saved = localStorage.getItem('sst-theme');
        if (saved && this.themes[saved]) {
            this.currentTheme = saved;
        }
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    try {
        window.themeSystem = new ThemeSystem();
        console.log('🎨 Système de thèmes initialisé');
    } catch (error) {
        console.warn('Erreur lors de l\'initialisation du système de thèmes:', error);
    }
});
