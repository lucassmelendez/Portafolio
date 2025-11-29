# Usar una imagen base de Node.js
FROM node:20-alpine AS builder

# Instalar git (necesario para algunas dependencias de npm)
RUN apk add --no-cache git

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos
COPY . .

# Construir la aplicación
RUN npm run build

# Imagen de producción
FROM node:20-alpine

# Instalar git también en la imagen de producción
RUN apk add --no-cache git

WORKDIR /app

# Copiar package.json
COPY package.json ./

# Instalar todas las dependencias (astro preview necesita dev dependencies también)
RUN npm install

# Copiar los archivos construidos desde el builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/.astro ./.astro

# Exponer el puerto 4321 (puerto por defecto de Astro)
EXPOSE 4321

# Usar preview para servir la aplicación en producción
CMD ["npx", "astro", "preview", "--host", "0.0.0.0", "--port", "4321"]


