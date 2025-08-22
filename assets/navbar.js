// =============== NAVBAR MODERNE AVEC DROPDOWN ===============

class ModernNavbar {
    constructor() {
        this.init();
    }

    init() {
        this.setupLogo();
        this.setupMobileMenu();
        this.setupOutsideClick();
        this.setupEscapeKey();
    }

    setupLogo() {
        const logoBtn = document.querySelector('.navbar-logo');
        const dropdown = document.querySelector('.navbar-dropdown');
        const logoContainer = document.querySelector('.navbar-logo-container');

        if (logoBtn && dropdown && logoContainer) {
            logoBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.toggleDropdown();
            });
        }
    }

    setupMobileMenu() {
        const burgerBtn = document.querySelector('.navbar-burger');
        const mobileMenu = document.querySelector('.navbar-mobile-menu');

        if (burgerBtn && mobileMenu) {
            burgerBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.toggleMobileMenu();
            });
        }
    }

    setupOutsideClick() {
        document.addEventListener('click', (e) => {
            const dropdown = document.querySelector('.navbar-dropdown');
            const logoContainer = document.querySelector('.navbar-logo-container');
            const mobileMenu = document.querySelector('.navbar-mobile-menu');

            // Fermer dropdown si clic extérieur
            if (dropdown && logoContainer && !e.target.closest('.navbar-logo-container')) {
                dropdown.classList.remove('active');
                logoContainer.classList.remove('dropdown-active');
            }

            // Fermer menu mobile si clic extérieur
            if (mobileMenu && !e.target.closest('.navbar-burger')) {
                this.closeMobileMenu();
            }
        });

        // Empêcher fermeture si clic dans dropdown
        const dropdown = document.querySelector('.navbar-dropdown');
        if (dropdown) {
            dropdown.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }
    }

    setupEscapeKey() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeDropdown();
                this.closeMobileMenu();
            }
        });
    }

    toggleDropdown() {
        const dropdown = document.querySelector('.navbar-dropdown');
        const logoContainer = document.querySelector('.navbar-logo-container');
        
        if (dropdown && logoContainer) {
            const isActive = dropdown.classList.contains('active');
            
            dropdown.classList.toggle('active');
            logoContainer.classList.toggle('dropdown-active', !isActive);
            
            console.log('Dropdown', !isActive ? 'ouvert' : 'fermé');
        }
    }

    closeDropdown() {
        const dropdown = document.querySelector('.navbar-dropdown');
        const logoContainer = document.querySelector('.navbar-logo-container');
        
        if (dropdown && logoContainer) {
            dropdown.classList.remove('active');
            logoContainer.classList.remove('dropdown-active');
        }
    }

    toggleMobileMenu() {
        const burgerBtn = document.querySelector('.navbar-burger');
        const mobileMenu = document.querySelector('.navbar-mobile-menu');

        if (burgerBtn && mobileMenu) {
            const isActive = mobileMenu.classList.contains('active');
            
            if (isActive) {
                this.closeMobileMenu();
            } else {
                burgerBtn.classList.add('active');
                mobileMenu.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
            
            console.log('Menu mobile', isActive ? 'fermé' : 'ouvert');
        }
    }

    closeMobileMenu() {
        const burgerBtn = document.querySelector('.navbar-burger');
        const mobileMenu = document.querySelector('.navbar-mobile-menu');

        if (burgerBtn && mobileMenu) {
            burgerBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    try {
        window.modernNavbar = new ModernNavbar();
        console.log('Navbar moderne initialisée');
    } catch (error) {
        console.warn('Erreur lors de l\'initialisation de la navbar:', error);
    }
});