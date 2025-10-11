import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    allowedHosts: ['gdg-docs-426637717447.us-central1.run.app'],
  },
  preview: {
    allowedHosts: ['gdg-docs-426637717447.us-central1.run.app'],
  },
});