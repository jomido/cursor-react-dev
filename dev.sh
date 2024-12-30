#!/bin/bash

echo "Running React Vite tRPC application in development mode..."

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "Docker is not installed. Please install Docker to continue."
    exit 1
fi

# Build and run the development container
echo "Building and starting Docker container..."
docker build -t react-vite-trpc-app:dev -f Dockerfile.dev .
docker run -p 5173:5173 \
  -v "$(pwd)/src:/app/src" \
  -it react-vite-trpc-app:dev

if [ $? -eq 0 ]; then
    echo "Container started successfully!"
    echo "You can access the application at http://localhost:5173"
else
    echo "Failed to start container. Please check the errors above."
    exit 1
fi
