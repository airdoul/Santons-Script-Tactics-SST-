#!/bin/bash

echo "🗄️ Configuration de la base de données O2Switch..."

DB_HOST="santons-script-tactics.sc7jewe1253.universe.wf"
DB_NAME="sc7jewe1253_Santons-Script-Tactics-SST"
DB_USER="Lore"
DB_PASS="PBrJY6Ak6rmf"

echo "📝 Vérification de la connexion à la base de données..."

php bin/console doctrine:database:create --if-not-exists --env=prod

if [ $? -eq 0 ]; then
    echo "✅ Base de données accessible"
else
    echo "❌ Erreur de connexion à la base de données"
    echo "Vérifiez vos paramètres dans .env.prod"
    exit 1
fi

echo "🔄 Exécution des migrations..."
php bin/console doctrine:migrations:migrate --no-interaction --env=prod

echo "📊 Création des données initiales..."

php bin/console doctrine:fixtures:load --no-interaction --env=prod --group=teams

echo "🔍 Vérification du schéma de base de données..."
php bin/console doctrine:schema:validate --env=prod

if [ $? -eq 0 ]; then
    echo "✅ Schéma de base de données valide"
else
    echo "⚠️ Problème détecté dans le schéma"
    php bin/console doctrine:schema:update --dump-sql --env=prod
fi

echo "📈 Statistiques de la base de données :"
php bin/console doctrine:query:sql "SELECT 
    (SELECT COUNT(*) FROM player) as total_players,
    (SELECT COUNT(*) FROM team) as total_teams,
    (SELECT COUNT(*) FROM sstmatch) as total_matches;" --env=prod

echo "✅ Configuration de la base de données terminée !"
