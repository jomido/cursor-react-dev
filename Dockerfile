# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Install Node.js in nginx image
RUN apk add --update nodejs npm

# Copy built frontend assets and backend files
COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/package*.json /app/
COPY --from=builder /app/src/server /app/src/server

# Set working directory
WORKDIR /app

# Install production dependencies only
RUN npm ci --production

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose ports for both frontend and backend
EXPOSE 80 4000

# Create a startup script in /usr/local/bin
RUN echo '#!/bin/sh\n\
npm run server & \
nginx -g "daemon off;"\n' > /usr/local/bin/start.sh && \
chmod +x /usr/local/bin/start.sh

# Start both services
CMD ["/usr/local/bin/start.sh"]
