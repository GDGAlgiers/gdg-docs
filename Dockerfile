FROM alpine:3.21

# Install Node.js and npm
RUN apk add --no-cache nodejs npm

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Set environment variables to bypass host checking
ENV VITE_HOST=true
ENV VITE_ALLOWED_HOSTS=all
ENV NODE_ENV=production

# Build the application
RUN npm run build

# Expose port 8080
EXPOSE 8080

# Use custom preview script for production
CMD ["npm", "run", "preview-prod"]

