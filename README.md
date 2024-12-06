# Tkorp#Test-tkorp

Technologies utilisées:

Next.js : Framework React pour construire des interfaces utilisateur côté serveur.

React : Bibliothèque JavaScript pour la construction des interfaces utilisateur

Tailwind CSS : Framework CSS pour le design de l'interface.

NestJS : Framework Node.js pour la construction de l'API.

Prisma : ORM (Object Relational Mapping) pour interagir avec MySQL.

MySQL : Base de données relationnelle pour stocker les données des propriétaires et des animaux.

Git : Contrôle de version pour le suivi des modifications du code.


Céer la base de données MySQL :

Créez une base de données MySQL puis les tables person et animal, et insérez les données nécessaires.

Dans le répertoire backend :

Installer NestJS :

npm i -g @nestjs/cli

Créez un nouveau projet NestJS :

nest new "project-name"

Installer Prisma :

npm install prisma @prisma/client

Initialisez Prisma :

npx prisma init

Changez le fichier .env et configurez l'URL de connexion à votre base de données MySQL (avec root et votre mot de passe) 

DATABASE_URL="mysql://root:motdepasse@localhost:3306/animals_db"

Générez les tables de la base de données :

npx prisma migrate dev 

Démarrez le serveur backend NestJS :

npm run start

Dans le répertoire frontend :

Créez un nouveau projet Next.js :

npx create-next-app@latest frontend

Cela devrait vous proposer d'installer TypeScript et Tailwind CSS (dite oui).

Pour démarrer le serveur frontend, utilisez :

npm run dev

Assurez-vous également que le serveur NestJS tourne.
