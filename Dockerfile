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

# Set site URL for local development
ENV ASTRO_SITE=http://localhost:8080/

# Build the application
RUN npm run build

# Expose port 8080
EXPOSE 8080

# Use Astro's preview server which handles routing correctly
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "8080"]

