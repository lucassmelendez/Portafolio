import { defineConfig } from 'vite';

export default defineConfig({
  preview: {
    allowedHosts: ['lucasmelendez.nordix.cl', 'localhost', '0.0.0.0'],
    host: true,
    port: 4321
  },
  server: {
    host: true,
    allowedHosts: ['lucasmelendez.nordix.cl', 'localhost', '0.0.0.0']
  }
});

