# Initialisation du Projet Medusa

Ce guide vous aidera à configurer et à exécuter le projet en local.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

1. **Node.js** : Version 20.16 LTS ou supérieure. [Téléchargez ici](https://nodejs.org/).
2. **Minikube** : Pour exécuter Kubernetes en local. [Instructions d'installation](https://minikube.sigs.k8s.io/docs/start/).
3. **Un Shell** : Comme Bash, Zsh, etc.

## Étapes d'Initialisation

### Utilisation avec Kubernetes

1. **Activer PNPM** :
   ```sh
   corepack enable pnpm
   ```

2. **Installer les dépendances du projet** :
   ```sh
   pnpm install
   ```

3. **Lancer Minikube** (si ce n'est pas déjà fait) :
   ```sh
   minikube start
   ```

4. **Exécuter le script de mise en place du projet Kubernetes** :
   ```sh
   sh ./scripts/setup-medusa-k8s.sh
   ```

5. **Trouver le lien du service Nginx** :
   ```sh
   minikube service nginx-service -n medusa --url
   ```

### Utilisation sans Kubernetes

Si vous préférez utiliser Docker Compose, suivez ces étapes :

Activer PNPM :

1. **Activer PNPM** :
   ```sh
   corepack enable pnpm
   ```

2. **Installer les dépendances du projet** :
   ```sh
   pnpm install
   ```

3. **Lancer les services avec Docker Compose :** :
   ```sh
   docker compose up -d
   ```
Lancer les services avec Docker Compose :

sh
Copier le code
docker compose up -d


---

### Notes

- Assurez-vous que Minikube est correctement configuré et opérationnel avant de lancer le script de mise en place du projet.
- Le script `setup-medusa-k8s.sh` configurera et déploiera les configurations Kubernetes nécessaires pour votre projet.
- Utilisez le lien généré par la commande `minikube service` pour accéder au service Nginx en local.