FROM oven/bun:1 AS builder
WORKDIR /app
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

FROM oven/bun:1-slim
WORKDIR /app
COPY --from=builder /app/.output .output
COPY --from=builder /app/package.json .
EXPOSE 3000
CMD ["bun", ".output/server/index.mjs"]
