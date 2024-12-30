#!/bin/bash

echo "Building Docker image for React Vite tRPC application..."

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "Docker is not installed. Please install Docker to continue."
    exit 1
fi

# Build the Docker image
echo "Building Docker image..."
docker build -t react-vite-trpc-app .

if [ $? -eq 0 ]; then
    echo "Docker image built successfully!"
    echo "You can run the container using: docker run -p 5173:5173 react-vite-trpc-app"
else
    echo "Docker build failed. Please check the errors above."
    exit 1
fi

