// Debug continu pour le matchmaking - à retirer après la mise en place du système complet
console.log(' [DEBUG] Script debugMatch.js chargé !');

let debugInterval;
let isDebugActive = false;

function startDebugMode() {
    if (isDebugActive) {
        console.warn(' Debug mode déjà actif');
        return;
    }
    
    console.log(' [DEBUG] Démarrage du mode debug matchmaking...');
    isDebugActive = true;
    
    // Premier appel immédiat
    fetchDebugInfo();
    
    // Puis toutes les 10 secondes
    debugInterval = setInterval(() => {
        fetchDebugInfo();
    }, 10000);
    
    console.log(' [DEBUG] Mode debug activé - données toutes les 10 secondes');
}

function stopDebugMode() {
    if (!isDebugActive) {
        console.warn(' Debug mode déjà inactif');
        return;
    }
    
    console.log(' [DEBUG] Arrêt du mode debug...');
    
    if (debugInterval) {
        clearInterval(debugInterval);
        debugInterval = null;
    }
    
    isDebugActive = false;
    console.log(' [DEBUG] Mode debug arrêté');
}

function fetchDebugInfo() {
    const timestamp = new Date().toLocaleTimeString();
    console.log(` [${timestamp}] Récupération des données de debug...`);
    
    fetch('/api/matchmaking/debug')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            console.group(` MATCHMAKING DEBUG - ${data.timestamp || timestamp}`);
            
            console.log(' Statistiques générales:');
            console.log(`   └─ Joueurs en queue: ${data.queue_count || 0}`);
            console.log(`   └─ Matchs récents: ${data.recent_matches ? data.recent_matches.length : 0}`);
            
            if (data.queue_tickets && data.queue_tickets.length > 0) {
                console.log(' Joueurs en attente:');
                console.table(data.queue_tickets);
            } else {
                console.log(' Aucun joueur en file d\'attente');
            }
            
            if (data.recent_matches && data.recent_matches.length > 0) {
                console.log(' Matchs récents:');
                console.table(data.recent_matches);
            } else {
                console.log(' Aucun match récent');
            }
            
            console.groupEnd();
        })
        .catch(error => {
            console.error(' [DEBUG] Erreur lors de la récupération:', error);
            console.error('   └─ Vérifiez que l\'endpoint /api/matchmaking/debug existe');
            console.error('   └─ Vérifiez que vous êtes connecté');
        });
}

// Fonctions utilitaires pour le debug manuel
window.matchmakingDebug = {
    start: startDebugMode,
    stop: stopDebugMode,
    fetch: fetchDebugInfo,
    status: () => console.log(`Debug mode: ${isDebugActive ? 'ACTIF' : 'INACTIF'}`)
};

// Auto-démarrage du debug (seulement sur les pages de matchmaking)
document.addEventListener('DOMContentLoaded', function() {
    // Ne démarrer le debug que sur les pages de matchmaking
    if (window.location.pathname.includes('/matchmaking')) {
        console.log(' [DEBUG] Page de matchmaking détectée, auto-démarrage du debug...');
        startDebugMode();
    } else {
        console.log(' [DEBUG] Pas sur une page de matchmaking, debug non démarré');
    }
});

// Instructions dans la console
console.log(' [DEBUG] Commandes disponibles dans la console:');
console.log('   └─ matchmakingDebug.start()  - Démarrer le debug');
console.log('   └─ matchmakingDebug.stop()   - Arrêter le debug'); 
console.log('   └─ matchmakingDebug.fetch()  - Récupérer les données maintenant');
console.log('   └─ matchmakingDebug.status() - Voir le statut du debug');