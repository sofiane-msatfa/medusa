#!/bin/bash

BACKUP_DIR="/backups"
BACKUP_FILENAME="backup_postgres_$(date +%Y%m%d_%H%M%S).tar"

# Create backup
echo "Creating backup of database $POSTGRES_DB"
PGPASSWORD="$POSTGRES_PASSWORD" pg_dump -U $POSTGRES_USER -h $POSTGRES_HOST -d $POSTGRES_DB -p $POSTGRES_PORT >$BACKUP_DIR/$BACKUP_FILENAME

if [ $? -ne 0 ]; then
    rm $BACKUP_DIR/$BACKUP_FILENAME
    echo "Une erreur est survenue lors de la création de la sauvegarde"
    exit 1
fi

# Compress backup
tar -zczf $BACKUP_DIR/$BACKUP_FILENAME.gz $BACKUP_DIR/$BACKUP_FILENAME
rm $BACKUP_DIR/$BACKUP_FILENAME

# Remove backups older than 7 days
find $BACKUP_DIR -type f -name 'backup_postgres_*.tar.gz' -mtime +7 -exec rm {} \;

# TODO: Upload to S3

echo "Backup created: $BACKUP_DIR/$BACKUP_FILENAME.gz"
