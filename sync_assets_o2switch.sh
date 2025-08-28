#!/bin/bash

# Script de synchronisation des assets compilés vers O2Switch
# Ce script copie les fichiers de build locaux vers le serveur O2Switch

echo "🚀 Synchronisation des assets vers O2Switch..."

# Configuration
DOMAIN="santons-script-tactics.sc7jewe1253.universe.wf"
LOCAL_BUILD_DIR="./public/build"

echo "📁 Vérification des fichiers de build locaux..."
if [ ! -d "$LOCAL_BUILD_DIR" ]; then
    echo "❌ Erreur: Le dossier $LOCAL_BUILD_DIR n'existe pas"
    echo "   Exécutez 'npm run build' en local d'abord"
    exit 1
fi

echo "📋 Fichiers de build à synchroniser:"
ls -la "$LOCAL_BUILD_DIR"

echo ""
echo "🔧 Instructions de synchronisation manuelle:"
echo ""
echo "1. Connectez-vous au terminal O2Switch:"
echo "   https://panel.o2switch.fr/"
echo ""
echo "2. Dans le terminal O2Switch, allez dans le dossier public/build:"
echo "   cd ~/Santons-Script-Tactics.sc7jewe1253.universe.wf/public/build"
echo ""
echo "3. Supprimez les anciens fichiers:"
echo "   rm -rf *"
echo ""
echo "4. Depuis votre machine locale, utilisez FileZilla ou WinSCP pour uploader:"
echo "   - Source: $LOCAL_BUILD_DIR/*"
echo "   - Destination: ~/Santons-Script-Tactics.sc7jewe1253.universe.wf/public/build/"
echo ""
echo "5. Ou copiez manuellement ces fichiers via le gestionnaire de fichiers O2Switch:"

echo ""
echo "📋 Liste des fichiers à copier:"
find "$LOCAL_BUILD_DIR" -type f -exec basename {} \; | sort

echo ""
echo "✨ Une fois les assets synchronisés, votre application sera prête !"
echo "🌐 URL: https://$DOMAIN"
