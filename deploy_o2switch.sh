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

# 2. Vérification des assets compilés
echo "🎨 Vérification des assets compilés..."
if [ ! -d "public/build" ] || [ ! "$(ls -A public/build)" ]; then
    echo "⚠️  ATTENTION: Assets non compilés détectés!"
    echo "   Les assets doivent être compilés en local et uploadés manuellement"
    echo "   car Node.js n'est pas disponible sur O2Switch"
    echo ""
    echo "   Instructions:"
    echo "   1. En local: npm run build"
    echo "   2. Uploadez le contenu de public/build/ vers le serveur"
    echo "   3. Relancez ce script"
    echo ""
    echo "❌ Déploiement interrompu"
    exit 1
else
    echo "✅ Assets compilés trouvés"
fi

# 3. Nettoyage du cache Symfony
echo "🧹 Nettoyage du cache..."
php bin/console cache:clear --env=prod --no-interaction
php bin/console cache:warmup --env=prod --no-interaction

# 4. Optimisation de l'autoloader
echo "⚡ Optimisation..."
composer dump-autoload --optimize --no-dev

# 5. Migration de la base de données
echo "🗄️ Migration de la base de données..."
php bin/console doctrine:migrations:migrate --no-interaction --env=prod

# 6. Configuration des permissions pour O2Switch
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
