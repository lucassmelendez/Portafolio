import { defineConfig } from 'vite';

// Configuración para desarrollo local y preview local
// NOTA: En producción con Dokploy NO se usa astro preview,
// se sirven archivos estáticos con 'serve' desde dist/
export default defineConfig({
  preview: {
    // Solo para desarrollo/preview local
    allowedHosts: ['lucasmelendez.nordix.cl', 'localhost', '0.0.0.0', '127.0.0.1'],
    host: true,
    port: 4321
  },
  server: {
    // Solo para desarrollo local
    host: true,
    allowedHosts: ['lucasmelendez.nordix.cl', 'localhost', '0.0.0.0', '127.0.0.1']
  }
});

