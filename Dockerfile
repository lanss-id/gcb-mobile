# Dockerfile untuk Next.js Mobile di monorepo

# Base build stage
FROM node:18-alpine AS base
WORKDIR /app
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . .

# Development dependencies stage
FROM base AS dev-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# Production dependencies stage
FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

# Build stage
FROM base AS builder
ENV NEXT_TELEMETRY_DISABLED 1

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
ENV NODE_ENV production
RUN pnpm run --filter mobile build

# Development stage - hot reloading
FROM base AS development
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["pnpm", "run", "--filter", "mobile", "dev"]

# Production stage
FROM node:18-alpine AS production
WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Copy necessary files
COPY --from=builder /app/apps/mobile/next.config.js ./apps/mobile/
COPY --from=builder /app/apps/mobile/package.json ./apps/mobile/
COPY --from=builder /app/apps/mobile/public ./apps/mobile/public
COPY --from=builder /app/apps/mobile/.next/standalone ./
COPY --from=builder /app/apps/mobile/.next/static ./apps/mobile/.next/static

# Package.json files required for module resolution
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/packages/validators/package.json ./packages/validators/package.json
COPY --from=builder /app/packages/config/package.json ./packages/config/package.json

EXPOSE 3000
CMD ["node", "apps/mobile/server.js"]
