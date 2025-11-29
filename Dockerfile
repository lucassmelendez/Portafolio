# ============================================
# Stage 1: Builder - Construir la aplicación
# ============================================
FROM node:20-alpine AS builder

# Instalar git (necesario para algunas dependencias de npm)
RUN apk add --no-cache git

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package.json ./

# Instalar dependencias (incluyendo devDependencies para el build)
RUN npm install

# Copiar el resto de los archivos
COPY . .

# Construir la aplicación Astro (genera dist/)
RUN npm run build

# ============================================
# Stage 2: Runtime - Servir archivos estáticos
# ============================================
FROM node:20-alpine

WORKDIR /app

# Instalar serve globalmente para servir archivos estáticos
# Alternativamente, podríamos usar npx serve, pero instalarlo es más eficiente
RUN npm install -g serve@14.2.1

# Copiar solo los archivos construidos desde el builder
COPY --from=builder /app/dist ./dist

# Exponer el puerto 4321 (configurado en Dokploy/Traefik)
EXPOSE 4321

# Servir archivos estáticos en modo producción
# -s: modo SPA (single page app) para manejar rutas correctamente
# -l: puerto y host (0.0.0.0 para aceptar conexiones externas)
CMD ["serve", "-s", "dist", "-l", "tcp://0.0.0.0:4321"]


