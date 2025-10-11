import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    allowedHosts: ['all', 'docs.gdgalgiers.dev'],
  },
  preview: {
    allowedHosts: ['all', 'docs.gdgalgiers.dev'],
  },
});