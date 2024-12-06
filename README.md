# A24-5W5-ProgWeb3-Animations

## Animations - CSS et Angular Animations
Ce projet utilise les animations CSS et les animations Angular pour créer un personnage animé appelé Slimey. À travers diverses actions, telles que l'apparition, la disparition, l'attaque, et des animations de mouvement, vous apprendrez à intégrer et à manipuler des animations dans un projet Angular.

## Objectifs
1. Créer des animations d'apparition et de disparition avec CSS et Angular Animations.
2. Mettre en place des animations d'attaque, de douleur et de mouvement en utilisant à la fois CSS et Angular.
3. Ajouter des séquences d'animations dynamiques et des boucles infinies pour renforcer l'interactivité et l'effet visuel du projet.

## Fonctionnalités
`Affichage de Slimey` : Slimey apparaît et disparaît avec des animations d'opacité.
`Animations Angular` : Intégration des animations Angular pour gérer les transitions de "mort", "attaque" et "hit" de Slimey.
`Animations CSS` : Utilisation d'animations CSS externes (via Animista) pour donner des effets de mouvement réalistes à Slimey, comme le "wobble" ou les rotations infinies.
`Séquences d'animations` : Ajout de séquences d'animations dynamiques, telles que Bounce/Shake/Flip et Infinite Triple Spin.

## Prérequis
Angular (version 13 ou supérieure).
Node.js et npm installés.

## Installation
1. Clonez le dépôt :
    git clone https://github.com/votre-utilisateur/animations-angular.git
2. Installez les dépendances :
    cd animations-angular
    npm install
3. Lancez l'application Angular :
    ng serve
4. Accédez à l'application dans votre navigateur à http://localhost:4200.

## Usage
`Affichage de Slimey` : Cliquez sur le bouton "Spawn" pour faire apparaître Slimey avec une animation de fade-in.
`Disparition de Slimey` : Cliquez sur le bouton "Death" pour faire disparaître Slimey avec une animation de shake et de fade-out.
`Attaque de Slimey` : Cliquez sur le bouton "Hit" pour infliger des dommages à Slimey avec une animation de "wobble".
`Séquences d'animations` : Testez les séquences "Bounce/Shake/Flip" et "Infinite Triple Spin" pour voir Slimey réaliser des animations complexes.

## Structure du Projet
`app.component.ts` : Contient la logique pour manipuler les animations Angular (transition, déclenchement des animations).
`app.component.css` : Définition des animations CSS et des styles de Slimey.
`app.component.html` : Structure de l'interface utilisateur, avec les boutons pour déclencher les animations.