pour activer le matchmaking en local il faut dans un terminal de commande mettre cette commande :

while true; do php bin/console matchmaking:process; sleep 10; done

dans le terminal on a des infos si un match est trouvé 


fonction 2 de matchmaking 
démarrer le worker first time use :
php bin/console messenger:consume async -vv



le lancer pour qu'il tourne en fond ( COMMANDE A UTILISE PAR DEFAUT) :
php bin/console messenger:consume async --time-limit=3600

