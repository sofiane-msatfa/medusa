#!/bin/bash

SCRIPT_DIR="$(dirname "$0")"
CONFIG_DIR="$SCRIPT_DIR/../k8s"
CONFIG_DIR="$(realpath $CONFIG_DIR)"

if [ ! -d "$CONFIG_DIR" ]; then
  echo "Le dossier $YAML_DIR n'existe pas."
  exit 1
fi

if [ ! -d "$CONFIG_DIR" ]; then
    echo "Le dossier $CONFIG_DIR n'existe pas."
    exit 1
fi

if ! minikube status >/dev/null 2>&1; then
    echo "Minikube n'est pas en cours d'exécution. Veuillez le démarrer d'abord."
    exit 1
fi

files=$(find "$CONFIG_DIR" -type f \( -name "*.yaml" -o -name "*.yml" \) | sort -V)

if [ -z "$files" ]; then
    echo "Aucun fichier YAML trouvé dans $CONFIG_DIR"
    exit 1
fi

for file in $files; do
    echo "Application du fichier $file..."
    kubectl apply -f "$file"

    if [ $? -ne 0 ]; then
        echo "Erreur lors de l'application du fichier $file. Arrêt du script."
        exit 1
    fi
done

echo "Tous les fichiers ont été appliqués avec succès."
