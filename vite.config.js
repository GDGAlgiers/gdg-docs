import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,
    port: 4321,
  },
  preview: {
    host: true,
    port: 8080,
    strictPort: true,
    // Disable host checking completely
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  }
});