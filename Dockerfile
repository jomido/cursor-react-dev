# Use Node.js LTS version as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 5173 (default Vite dev server port)
EXPOSE 5173

# Start development server
CMD ["npm", "run", "dev", "--", "--host"]
