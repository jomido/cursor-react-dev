#!/bin/bash

source ./vars.sh

echo "Stopping React Vite tRPC application..."

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "Docker is not installed. Please install Docker to continue."
    exit 1
fi

# Stop the container
echo "Stopping container..."
docker stop $CONTAINER_NAME

if [ $? -eq 0 ]; then
    echo "Container stopped successfully!"
else
    echo "Failed to stop container. Please check the errors above."
    exit 1
fi 