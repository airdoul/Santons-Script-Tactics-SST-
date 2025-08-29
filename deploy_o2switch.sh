#!/bin/bash

# Script de déploiement pour O2Switch via Git Clone
echo "🚀 Déploiement Santons Script Tactics sur O2Switch via GitHub..."

# Configuration pour O2Switch
export APP_ENV=prod

# 0. Clone du repository GitHub (si pas déjà fait)
if [ ! -d ".git" ]; then
    echo "📥 Clonage du repository GitHub..."
    git clone https://github.com/Loreshadow/Santons-Script-Tactics-SST-.git .
    echo "✅ Repository cloné avec succès"
else
    echo "📥 Mise à jour du repository..."
    git pull origin main
    echo "✅ Repository mis à jour"
fi

# 1. Installation des dépendances Composer (production)
echo "📦 Installation des dépendances PHP..."
composer install --no-dev --optimize-autoloader --no-interaction

# 2. Installation des dépendances NPM
echo "📦 Installation des dépendances JavaScript..."
npm ci --production=false

# 3. Build des assets
echo "🎨 Compilation des assets..."
npm run build

# 4. Nettoyage du cache Symfony
echo "🧹 Nettoyage du cache..."
php bin/console cache:clear --env=prod --no-interaction
php bin/console cache:warmup --env=prod --no-interaction

# 5. Optimisation de l'autoloader
echo "⚡ Optimisation..."
composer dump-autoload --optimize --no-dev

# 6. Migration de la base de données
echo "🗄️ Migration de la base de données..."
php bin/console doctrine:migrations:migrate --no-interaction --env=prod

# 7. Configuration des permissions pour O2Switch
echo "🔐 Configuration des permissions..."
chmod -R 755 ./
chmod -R 777 var/cache/
chmod -R 777 var/log/
chmod 644 .env.prod

# 8. Nettoyage des fichiers de développement
echo "🧹 Nettoyage..."
rm -rf node_modules/
rm -rf var/cache/dev/
rm -rf .env.local

echo "✅ Déploiement terminé sur O2Switch !"
echo "🌐 Votre site est maintenant en ligne !"
