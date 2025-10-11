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

# Make start script executable
RUN chmod +x start.sh

# Set environment variables to bypass host checking
ENV VITE_ALLOWED_HOSTS=all
ENV VITE_HOST=true
ENV VITE_ALLOWED_HOSTS=all
ENV NODE_ENV=production
ENV VITE_HMR_HOST=0.0.0.0
ENV VITE_PREVIEW_HOST=0.0.0.0
ENV ASTRO_TELEMETRY_DISABLED=1
ENV HOST=0.0.0.0

# Build the application
RUN npm run build

# Expose port 8080
EXPOSE 8080

# Use the start script instead
CMD ["./start.sh"]

