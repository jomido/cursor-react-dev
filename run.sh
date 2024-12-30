#!/bin/bash

echo "Running React Vite tRPC application in production mode..."

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "Docker is not installed. Please install Docker to continue."
    exit 1
fi

# Run the production container
echo "Starting production Docker container..."
docker run -p 80:80 \
  --name react-vite-trpc-app \
  -d react-vite-trpc-app:production

if [ $? -eq 0 ]; then
    echo "Container started successfully!"
    echo "You can access the application at http://localhost"
    echo "To stop the container, run: docker stop react-vite-trpc-app"
else
    echo "Failed to start container. Please check the errors above."
    exit 1
fi
