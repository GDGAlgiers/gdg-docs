import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 4321,
  },
  preview: {
    host: '0.0.0.0',
    port: 8080,
    strictPort: false,
    // Add the exact Cloud Run host
    allowedHosts: [
      'gdg-docs-426637717447.us-central1.run.app',
      'localhost',
      '127.0.0.1',
      '0.0.0.0',
      '.run.app',
      '.app'
    ]
  }
});