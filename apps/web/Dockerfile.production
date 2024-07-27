FROM node:20.15-slim as base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base as builder

WORKDIR /app
COPY . .
RUN pnpm install
RUN pnpm build

EXPOSE 5000

CMD ["pnpm", "run", "production"]