FROM ubuntu:24.04

RUN apt update -y && \
    apt install -y postgresql-client-16
    
RUN mkdir /backups
    
# Set the working directory
WORKDIR /app

# Copy the shell script to the container
COPY backup-postgres.sh .

# Make the shell script executable
RUN chmod +x backup-postgres.sh

# Run the shell script
CMD ["./backup-postgres.sh"]