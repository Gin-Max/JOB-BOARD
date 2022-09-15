# T-WEB-501-LIL-5-1-jobboard-maxence.el-khader

Projet Job Board, site pour postuler à des annonces avec BDD

Création de BDD via Mongo Cloud https://cloud.mongodb.com : 
- créer un Cluster
- se connecter
- créer un ficher .env dans la branche principale du projet
à l'intérieur 
    PORT="votre_port"
    MONGO_URI="votre_cluster"

Pour l'utiliser il faut avoir NodeJs sur sa machine, un éditeur de code et un terminal dans le dossier du projet pour pouvoir lancer les commandes (node si possible)

dans le terminal du dossier de projet :
npm install     (pour installer tous les modules)
npm start

package.json pour les dépendances (npm install)
dossier views contenant tout l'affichage Front
dossier server pour la partie back
-> controller : un fichier controller pour chaque collection en BDD
-> database : un fichier connection pour faire lien avec la BDD Atlas en cloud
-> middleware : un fichier auth.js pour créer un token quand on se log sur le site (le token n'étant pas géré pour le moment, il n'est pas stocké)
-> model : un fichier model pour chaque schema crée en base de données
-> routes : un router pour créer tous les chemins vers le front et dans l'URL (le CRUD) et routerUser spécifiquement pour la connexion utilisateur (ne fonctionne pas car le token n'est pas stocké en cookie)
-> services : un fichier render pour récupérer chaque route et l'afficher en front en utilisant les fichiers de views

Outils, langages et logiciels utilisés :
IDE : Visual Studio Code
MongoDB atlas pour le stockage de la BDD en cloud
NodeJs, Javascript, EJS, CSS
Différents packages Node pour faire fonctionner le code 
(voir les dépéndances dans Package.json)

Affichage Front : 
-> navigation dans le header pour ajouter des jobs, companies et utilisateurs
liste de chaque BDD avec update et delete accessible par tout le monde car pas de page admin (manque de cookie pour créer les deux rôles user et admin)
Un bouton sur chaque page en question pour un retour en arrière ou afficher la liste de la BDD et pouvoir la modifier
Bouton Learn More pour afficher la description détaillée
Bouton Apply pour accéder à la page Apply
