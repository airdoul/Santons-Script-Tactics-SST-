// import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.scss';
import './navbar.js';
import './JS/game-interface.js';
import './JS/guild-guide.js';
import './JS/theme-system.js';
// import './JS/ranking-system.js'; // desactivation du classement gérer par le JS ( il est en php et en JS dans game-interface.js a la ligne 320 ) je l'ai pas encore supprimé au cas ou on en ai encore besoin mais il faudra le faire a la fin

import './JS/debugMatch.js';
import './JS/matchmaking-system.js';
import './JS/team-management.js'

console.log('📦 [APP] Application principale chargée avec système de classement');
