#!/bin/bash

source ./vars.sh

echo "Building Docker image for React Vite tRPC application..."

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "Docker is not installed. Please install Docker to continue."
    exit 1
fi

# Parse arguments
NO_CACHE=""
if [ "$1" == "--no-cache" ]; then
    NO_CACHE="--no-cache"
    echo "Building without cache..."
fi

# Build the Docker image
echo "Building Docker image..."
docker build $NO_CACHE --progress=plain -t react-vite-trpc-app:production .

if [ $? -eq 0 ]; then
    echo "Docker image built successfully!"
    echo "You can run the container using: ./run.sh"
else
    echo "Docker build failed. Please check the errors above."
    exit 1
fi

