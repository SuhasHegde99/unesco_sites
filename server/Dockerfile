# Backend Server Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy server file
COPY server.js ./

# Expose port 5000
EXPOSE 5000

# Set PORT environment variable
ENV PORT=5000
ENV NODE_ENV=production

# Start the server
CMD ["node", "server.js"]

