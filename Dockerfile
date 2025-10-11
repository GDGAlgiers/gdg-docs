# Use Alpine and install Node.js manually
FROM alpine:3.21

WORKDIR /app

# Install Node.js and npm
RUN apk add --no-cache nodejs npm

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Install serve globally for serving static files
RUN npm install -g serve

# Copy all source files
COPY . .

# Build the Astro site
RUN npm run build

# Serve the built files
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
