import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"

import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: 'https://porfolio.dev/',
  preview: {
    host: true,
    port: 4321
  },
  server: {
    host: true,
    port: 4321
  },
  vite: {
    preview: {
      allowedHosts: ['lucasmelendez.nordix.cl', 'localhost', '0.0.0.0']
    },
    server: {
      host: true,
      allowedHosts: ['lucasmelendez.nordix.cl', 'localhost', '0.0.0.0']
    }
  }
})
