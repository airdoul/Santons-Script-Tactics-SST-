pour activer le matchmaking en local il faut dans un terminal de commande mettre cette commande :

while true; do php bin/console matchmaking:process; sleep 10; done

dans le terminal on a des infos si un match est trouvé 


fonction 2 de matchmaking 
démarrer le worker :
php bin/console messenger:consume async -vv