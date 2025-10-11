import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 4321,
  },
  preview: {
    host: '0.0.0.0',
    port: 8080,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '0.0.0.0',
      'gdg-docs-426637717447.us-central1.run.app',
      '.run.app',
      '.vercel.app',
      'docs.gdgalgiers.dev'
    ]
  }
});