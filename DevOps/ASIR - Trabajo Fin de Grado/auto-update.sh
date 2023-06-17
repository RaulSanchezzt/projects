#!/bin/sh

# Delete all images and hide the errors cause the used Images
docker rmi -f $(docker images -a -q) 2>/dev/null

# Recreate Docker compose
docker compose up -d

# Delete old versions and hide errors
docker rmi -f $(docker images -a -q) 2>/dev/null