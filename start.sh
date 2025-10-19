#!/bin/sh
# Start script for the container with host bypass

# Set environment variables to bypass host checking
export VITE_ALLOWED_HOSTS=all
export ASTRO_TELEMETRY_DISABLED=1
export HOST=0.0.0.0
export PORT=8080

echo "Starting Astro preview server with ALL hosts allowed..."
echo "VITE_ALLOWED_HOSTS=$VITE_ALLOWED_HOSTS"
echo "HOST=$HOST"
echo "PORT=$PORT"

# Use astro preview with explicit allowed hosts bypass
exec npx astro preview --host 0.0.0.0 --port 8080