# Base: define el directorio de trabajo y copia los archivos de package
FROM node:22-alpine AS base
WORKDIR /app
COPY package*.json ./

# Dependencies: instala todas las dependencias (dev + prod)
FROM base AS dependencies
RUN npm install

# Builder: compila la aplicación
FROM dependencies AS builder
COPY . .
RUN npm run build

# Production dependencies: solo dependencias de producción
FROM base AS prod-dependencies
RUN npm ci --only=production && npm cache clean --force

# Target: imagen de producción optimizada
FROM node:22-alpine AS production
WORKDIR /app

# Crea usuario no-root para seguridad
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nestjs -u 1001

# Copia dependencias de producción
COPY --from=prod-dependencies --chown=nestjs:nodejs /app/node_modules ./node_modules
# Copia la aplicación compilada
COPY --from=builder --chown=nestjs:nodejs /app/dist ./dist
# Copia scripts de entrada
COPY --chown=nestjs:nodejs entrypoint.sh .
RUN chmod +x entrypoint.sh

USER nestjs
EXPOSE 3000

CMD ["./entrypoint.sh"]