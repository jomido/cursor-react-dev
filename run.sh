#!/bin/bash

source ./vars.sh

echo "Running React Vite tRPC application in production mode..."

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "Docker is not installed. Please install Docker to continue."
    exit 1
fi

# Remove existing container if it exists
echo "Cleaning up any existing containers..."
docker rm -f $CONTAINER_NAME &> /dev/null

# Run the production container
echo "Starting production Docker container..."
docker run -p 80:80 -p 4000:4000 \
  --name $CONTAINER_NAME \
  -d react-vite-trpc-app:production

if [ $? -eq 0 ]; then
    echo "Container started successfully!"
    echo "You can access the application at http://localhost"
    echo "To stop the container, run: ./stop.sh"
else
    echo "Failed to start container. Please check the errors above."
    exit 1
fi
