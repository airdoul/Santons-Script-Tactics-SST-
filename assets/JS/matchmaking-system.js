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
        searchBtn.disabled = false;
        searchBtn.innerHTML = '<i class="fas fa-search"></i> Rechercher un Match';
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
            resultTitle.textContent = isWinner ? '🏆 VICTOIRE !' : '💀 DÉFAITE';
            resultTitle.className = isWinner ? 'text-success' : 'text-danger';
        }
        
        resultContent.innerHTML = `
            <div class="result-card ${isWinner ? 'victory' : 'defeat'}">
                <div class="match-details">
                    <p><strong>Votre équipe:</strong> ${result.team1_power || 'N/A'} pts</p>
                    <p><strong>Équipe adverse:</strong> ${result.team2_power || 'N/A'} pts</p>
                    <p><strong>Durée:</strong> ${result.duration || 'N/A'} rounds</p>
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
        
        if (data.status === 'MATCH_FOUND') {
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