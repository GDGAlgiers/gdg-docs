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
    // Completely disable host validation
    allowedHosts: 'all',
    disableHostCheck: true,
    // Custom middleware to bypass host checks
    configure: (server) => {
      server.middlewares.use((req, res, next) => {
        // Remove host validation
        delete req.headers.host;
        next();
      });
    }
  }
});