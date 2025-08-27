// Variables globales pour le matchmaking
let statusCheckInterval;
let matchmaking = {
    inQueue: false,
    teamId: null
};

// Initialiser le système au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    initializeMatchmaking();
    checkCurrentStatus();
});

function initializeMatchmaking() {
    // Bouton de recherche de match
    const searchBtn = document.getElementById('search-battle-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            joinMatchmaking();
        });
    }

    // Bouton d'annulation
    const cancelBtn = document.getElementById('cancel-queue');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', function(e) {
            e.preventDefault();
            cancelMatchmaking();
        });
    }

    // Bouton retour à la recherche
    const backBtn = document.getElementById('back-to-search');
    if (backBtn) {
        backBtn.addEventListener('click', function(e) {
            e.preventDefault();
            resetToSearch();
        });
    }
}

function joinMatchmaking() {
    const searchBtn = document.getElementById('search-battle-btn');
    const teamId = searchBtn?.dataset.teamId || '1'; // Valeur par défaut
    
    // Désactiver le bouton pendant la requête
    if (searchBtn) {
        searchBtn.disabled = true;
        searchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Connexion...';
    }

    fetch('/api/matchmaking/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ team_id: parseInt(teamId) })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            matchmaking.inQueue = true;
            matchmaking.teamId = teamId;
            showMatchmakingStatus();
            startStatusCheck();
        } else {
            alert(data.error || 'Erreur lors de la recherche de match');
            resetSearchButton();
        }
    })
    .catch(error => {
        console.error('Erreur:', error);
        alert('Erreur de connexion');
        resetSearchButton();
    });
}

function cancelMatchmaking() {
    fetch('/api/matchmaking/cancel', { method: 'POST' })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            matchmaking.inQueue = false;
            hideMatchmakingStatus();
            stopStatusCheck();
        }
    })
    .catch(error => {
        console.error('Erreur lors de l\'annulation:', error);
    });
}

function resetSearchButton() {
    const searchBtn = document.getElementById('search-battle-btn');
    if (searchBtn) {
        // Ne plus forcer l'activation - laisser team-management.js gérer l'état
        searchBtn.innerHTML = '<i class="fas fa-search"></i> Rechercher un Match';
        
        // Si une instance de TeamManagement existe, laisser updateBattleTab() gérer l'état
        if (window.teamManagement && typeof window.teamManagement.updateBattleTab === 'function') {
            window.teamManagement.updateBattleTab();
        } else {
            // Sinon vérifier manuellement le nombre de personnages
            const teamSize = document.querySelectorAll('.character-slot.occupied').length;
            if (teamSize < 3) {
                searchBtn.disabled = true;
                searchBtn.classList.add('disabled');
                searchBtn.setAttribute('disabled', 'disabled');
            } else {
                searchBtn.disabled = false;
                searchBtn.classList.remove('disabled');
                searchBtn.removeAttribute('disabled');
            }
        }
    }
}

function showMatchmakingStatus() {
    const teamSelection = document.getElementById('team-selection');
    const matchmakingStatus = document.getElementById('matchmaking-status');
    const matchResult = document.getElementById('match-result');
    
    if (teamSelection) teamSelection.style.display = 'none';
    if (matchmakingStatus) matchmakingStatus.style.display = 'block';
    if (matchResult) matchResult.style.display = 'none';
}

function hideMatchmakingStatus() {
    const teamSelection = document.getElementById('team-selection');
    const matchmakingStatus = document.getElementById('matchmaking-status');
    const matchResult = document.getElementById('match-result');
    
    if (teamSelection) teamSelection.style.display = 'block';
    if (matchmakingStatus) matchmakingStatus.style.display = 'none';
    if (matchResult) matchResult.style.display = 'none';
    resetSearchButton();
}

function showMatchResult(result) {
    const teamSelection = document.getElementById('team-selection');
    const matchmakingStatus = document.getElementById('matchmaking-status');
    const matchResult = document.getElementById('match-result');
    
    if (teamSelection) teamSelection.style.display = 'none';
    if (matchmakingStatus) matchmakingStatus.style.display = 'none';
    if (matchResult) matchResult.style.display = 'block';
    
    const resultContent = document.getElementById('result-content');
    const resultTitle = document.getElementById('result-title');
    
    if (result && resultContent) {
        const isWinner = result.winner_team_id == matchmaking.teamId;
        
        if (resultTitle) {
            resultTitle.textContent = '⚔️ COMBAT TERMINÉ !';
            resultTitle.className = 'text-info';
        }
        
        resultContent.innerHTML = `
            <div class="result-card completed">
                <div class="match-details">
                    <p><strong>Votre équipe:</strong> ${result.team1_power || 'N/A'} pts</p>
                    <p><strong>Équipe adverse:</strong> ${result.team2_power || 'N/A'} pts</p>
                    <p><strong>Durée:</strong> ${result.duration || 'N/A'} rounds</p>
                    <p class="match-completed-message">Le combat s'est déroulé ! Voulez-vous voir le déroulement ?</p>
                </div>
                <div class="match-actions-result">
                    <button class="btn btn-combat-view" onclick="gameInterface.showCombatVisualization(${result.match_id})" title="Voir le combat">
                        <i class="fas fa-play-circle"></i>
                        <span>Voir le Combat</span>
                    </button>
                    <button class="btn btn-new-match" onclick="resetToSearch()">
                        <i class="fas fa-redo"></i>
                        <span>Nouveau Combat</span>
                    </button>
                </div>
            </div>
        `;
    }
}

function resetToSearch() {
    matchmaking.inQueue = false;
    hideMatchmakingStatus();
}

function startStatusCheck() {
    statusCheckInterval = setInterval(checkStatus, 2000);
}

function stopStatusCheck() {
    if (statusCheckInterval) {
        clearInterval(statusCheckInterval);
        statusCheckInterval = null;
    }
}

function checkStatus() {
    fetch('/api/matchmaking/status')
    .then(response => response.json())
    .then(data => {
        updateStatusDisplay(data);
        
        if (data.status === 'MATCH_RESULT_PENDING') {
            matchmaking.inQueue = false;
            stopStatusCheck();
            showCombatPendingResult(data.match);
        } else if (data.status === 'MATCH_FOUND') {
            matchmaking.inQueue = false;
            stopStatusCheck();
            showMatchResult(data.match);
        } else if (data.status === 'NOT_IN_QUEUE') {
            matchmaking.inQueue = false;
            hideMatchmakingStatus();
            stopStatusCheck();
        }
    })
    .catch(error => {
        console.error('Erreur lors de la vérification du statut:', error);
    });
}

function updateStatusDisplay(data) {
    const statusText = document.getElementById('status-text');
    const waitingTime = document.getElementById('waiting-time');
    const playersInQueue = document.getElementById('players-in-queue');
    
    if (statusText) {
        statusText.textContent = data.status === 'SEARCHING' ? 'Recherche en cours...' : 'En attente...';
    }
    
    if (waitingTime && data.waiting_time !== undefined) {
        waitingTime.textContent = `Temps d'attente: ${data.waiting_time} secondes`;
    }
    
    if (playersInQueue && data.players_in_queue !== undefined) {
        playersInQueue.textContent = `Joueurs en file: ${data.players_in_queue}`;
    }
}

function checkCurrentStatus() {
    fetch('/api/matchmaking/status')
    .then(response => response.json())
    .then(data => {
        if (data.status === 'SEARCHING') {
            matchmaking.inQueue = true;
            showMatchmakingStatus();
            startStatusCheck();
        }
    })
    .catch(error => {
        console.error('Erreur lors de la vérification du statut initial:', error);
    });
}

// Nouvelle fonction pour afficher un match en attente de visualisation
function showCombatPendingResult(matchData) {
    hideMatchmakingStatus();
    
    const notification = document.createElement('div');
    notification.className = 'combat-pending-notification';
    notification.innerHTML = `
        <div class="pending-combat-card">
            <div class="pending-header">
                <h3>⚔️ Combat Terminé !</h3>
                <p>Votre combat vient de se terminer. Voulez-vous voir ce qui s'est passé ?</p>
            </div>
            <div class="pending-actions">
                <button class="btn-view-combat" onclick="viewCombatVisualization(${matchData.id})">
                    <i class="fas fa-eye"></i> Voir le Combat
                </button>
                <button class="btn-skip-combat" onclick="skipCombatVisualization(${matchData.id})">
                    <i class="fas fa-forward"></i> Passer
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
}

// Exposition des fonctions globales
window.viewCombatVisualization = viewCombatVisualization;
window.skipCombatVisualization = skipCombatVisualization;

// Fonction pour voir la visualisation du combat
async function viewCombatVisualization(matchId) {
    try {
        // Marquer le combat comme visualisé
        await fetch(`/api/matchmaking/match/${matchId}/mark-viewed`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        
        // Fermer la notification
        const notification = document.querySelector('.combat-pending-notification');
        if (notification) {
            notification.remove();
        }
        
        // Afficher la visualisation du combat
        if (window.gameInterface && window.gameInterface.showCombatVisualization) {
            await window.gameInterface.showCombatVisualization(matchId);
        } else {
            console.error('Interface de jeu non disponible');
        }
        
    } catch (error) {
        console.error('Erreur lors de la visualisation du combat:', error);
    }
}

// Fonction pour passer la visualisation
async function skipCombatVisualization(matchId) {
    try {
        // Marquer le combat comme visualisé
        await fetch(`/api/matchmaking/match/${matchId}/mark-viewed`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        
        // Fermer la notification
        const notification = document.querySelector('.combat-pending-notification');
        if (notification) {
            notification.remove();
        }
        
        // Optionnel: afficher un message simple avec le résultat
        showSimpleMatchResult(matchId);
        
    } catch (error) {
        console.error('Erreur lors du passage du combat:', error);
    }
}

// Fonction pour afficher un résultat simple sans animation
async function showSimpleMatchResult(matchId) {
    try {
        const response = await fetch(`/api/matchmaking/match/${matchId}`);
        const matchData = await response.json();
        
        // Afficher un simple message de résultat
        const resultMessage = matchData.is_winner ? 
            '🎉 Victoire ! Vous avez remporté ce combat !' : 
            '😔 Défaite... Vous pourrez vous venger la prochaine fois !';
            
        // Afficher une notification simple
        if (window.showNotification) {
            window.showNotification(resultMessage, matchData.is_winner ? 'success' : 'error');
        }
        
    } catch (error) {
        console.error('Erreur lors de l\'affichage du résultat simple:', error);
    }
}