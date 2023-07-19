#!/bin/bash

# Create the image
docker build -t lottery:v1 .

# Start the container
docker run -p 3000:3000 lottery:v1 entrypoint.sh