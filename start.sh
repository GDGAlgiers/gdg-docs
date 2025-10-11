#!/bin/sh
# Start script for the container

# Use PORT environment variable if set, otherwise default to 8080
PORT=${PORT:-8080}

echo "Starting server on port $PORT"
# Use astro preview instead of serve for better routing
npx astro preview --port $PORT --host 0.0.0.0