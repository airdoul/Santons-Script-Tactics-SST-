# Système de Visualisation de Combat SST

## Description

Le nouveau système de visualisation de combat permet aux joueurs de voir leurs combats se dérouler avec des animations interactives au lieu d'un simple récap textuel.

## Fonctionnalités

### 1. Interface de Combat
- **Plateau de jeu** : Arrière-plan immersif avec les équipes positionnées
- **Équipe du joueur** : Alignée en bas de l'écran
- **Équipe adverse** : Alignée en haut de l'écran
- **Zone centrale** : Pour les animations d'événements majeurs

### 2. Contrôles de Lecture
- **Bouton de démarrage** : Lance l'animation du combat
- **Contrôles de vitesse** : x1, x2, x3, x5 pour ajuster la vitesse de lecture
- **Bouton de fermeture** : Croix pour fermer la visualisation

### 3. Animations Implémentées

#### Événements de Combat
- **Début de combat** : Halo lumineux avec texte au centre
- **Présentation des équipes** : Surbrillance des informations d'équipe
- **Début de tour** : Épées croisées avec animation
- **Fin de tour** : Icône sablier avec transition
- **Victoire/Défaite** : Animation de célébration ou de défaite

#### Actions de Personnages
- **Attaque** : Effet rouge avec icône poing
- **Soin** : Effet vert avec icône cœur  
- **Défense** : Effet bleu avec icône bouclier
- **Magie** : Effet violet avec icône magie
- **Vitesse** : Effet jaune avec icône éclair

### 4. Narration Interactive
- **Zone de narration** : En bas de l'écran, affiche le texte de chaque événement
- **Synchronisation** : Les animations correspondent aux événements textuels
- **Durée** : Chaque animation dure 1,5 seconde (ajustable avec la vitesse)

## Architecture Technique

### Frontend (JavaScript)
```javascript
// Point d'entrée principal
gameInterface.showCombatVisualization(matchId)

// Fonctions principales
- displayCombatVisualizationModal()
- playCombatAnimation()
- animateEvent()
- animateCharacterAction()
```

### Backend (PHP)
```php
// Endpoint API
GET /api/matchmaking/match/{id}/events

// Amélioration : inclut les données des personnages
private function getTeamCharacters(Team $team): array
```

### Styles (SCSS)
```scss
// Fichier principal
assets/styles/components/_combat-visualization.scss

// Classes principales
.combat-visualization-container
.combat-battlefield
.team-zone
.combat-center
.combat-narration
```

## Utilisation

1. **Accès** : Dans l'historique des combats, cliquer sur "Voir le combat" au lieu de "Recap"
2. **Contrôles** : Utiliser les boutons de vitesse pour ajuster la lecture
3. **Navigation** : Fermer avec la croix ou la touche Échap

## Améliorations Futures

### À court terme
- [ ] Ajouter l'image de fond du plateau
- [ ] Personnages avec vraies données visuelles
- [ ] Sons et effets audio
- [ ] Animations plus sophistiquées

### À moyen terme  
- [ ] Mode replay avec contrôles avancés (pause, retour)
- [ ] Statistiques en temps réel pendant le combat
- [ ] Zoom sur les actions importantes
- [ ] Enregistrement des combats épiques

### À long terme
- [ ] Mode spectateur pour regarder d'autres combats
- [ ] Tournois avec visualisation en direct
- [ ] Personnalisation des effets visuels
- [ ] Support mobile responsive

## Configuration

### Vitesses disponibles
- **x1** : Vitesse normale (1,5s par animation)
- **x2** : Vitesse rapide (0,75s par animation)
- **x3** : Vitesse très rapide (0,5s par animation)
- **x5** : Vitesse ultra-rapide (0,3s par animation)

### Responsive
- Support complet mobile et tablette
- Interface adaptée aux petits écrans
- Contrôles tactiles optimisés

## Dépendances

- **FontAwesome** : Pour les icônes
- **SCSS** : Pour les styles avancés
- **Symfony** : Backend API
- **Doctrine** : Accès aux données
