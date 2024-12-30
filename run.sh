#!/bin/bash

echo "Running React Vite tRPC application in development mode..."

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "Docker is not installed. Please install Docker to continue."
    exit 1
fi

# Run the container with volume mount for src directory
echo "Starting Docker container..."
docker run -p 5173:5173 \
  -v "$(pwd)/src:/app/src" \
  -it react-vite-trpc-app

if [ $? -eq 0 ]; then
    echo "Container started successfully!"
    echo "You can access the application at http://localhost:5173"
else
    echo "Failed to start container. Please check the errors above."
    exit 1
fi
