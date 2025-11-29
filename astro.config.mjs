import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"

import robotsTxt from "astro-robots-txt"

// https://astro.build/config
// NOTA: En producción con Dokploy se sirven archivos estáticos con 'serve',
// NO se usa astro preview. Esta configuración es solo para desarrollo local.
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: 'https://porfolio.dev/',
  // Configuración para desarrollo local
  preview: {
    host: true,
    port: 4321
  },
  server: {
    host: true,
    port: 4321
  },
  vite: {
    // Solo para desarrollo/preview local
    preview: {
      allowedHosts: ['lucasmelendez.nordix.cl', 'localhost', '0.0.0.0', '127.0.0.1']
    },
    server: {
      host: true,
      allowedHosts: ['lucasmelendez.nordix.cl', 'localhost', '0.0.0.0', '127.0.0.1']
    }
  }
})
