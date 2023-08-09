# Sept Arche Librairie

Création d'une application web d'une librairie spécialisée dans la vente de livres dans le domaine du cinéma.
Stack: Create-react-app, Bootstrap

## Installation du projet

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in your browser.

1. Pour lancer l'app, télécharger la librairie Axios pour récupérer les données avec le serveur

### `npm install`
Pour installer une librairie

### `npm run build`
Pour construire le projet, lancer cette commande à chaque librairie installée

### `npm test`
Pour lancer les tests

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Déploiement


### Installation initiale
brew install heroku/brew/heroku

### Configuration de Heroku

1. Créer un compte Heroku avec votre addresse octo puis demander les accès à Heroku à l'admin

2. Ajouter la ligne suivante à la fin de votre .bashrc ou .zshrc:

   `export HEROKU_ORGANIZATION=octo`

Cela permet de regarder si on a accès aux apps de l'environement Heroku:

3. Dans le folder du projet, se connecter à Heroku avec `heroku login` lancer la commande `heroku apps`.

Normalement, il faudrait avoir un message comme celui-ci:

```
askbob-front (eu)
askbob-front-demo (eu)
```
Ajouter les remotes de heroku pour le deploy **depuis le répertoire du projet**:

<!-- heroku git:remote -a askbob-front
heroku git:remote -a askbob-front-demo -->

### Pour l'env de demo:

Aller sur https://dashboard.heroku.com/apps et selectionner l'app askbob-front-demo puis clicker sur le tab Settings pour avoir le lien git URL:

`git remote add herokudemo https://git.heroku.com/askbob-front-demo.git`


### Integrate with your tools


