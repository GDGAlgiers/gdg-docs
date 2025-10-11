import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    allowedHosts: 'all',
  },
  preview: {
    allowedHosts: 'all',
  },
});