import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true, // Allow external connections
  },
  preview: {
    host: true, // Allow external connections in preview mode
    port: 8080,
    allowedHosts: 'all' // Allow all hosts for production deployment
  }
});