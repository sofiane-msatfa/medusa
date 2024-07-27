FROM node:20.15-slim as base

RUN apt-get update -y && \
    apt-get install -y openssl

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base as builder

WORKDIR /app

COPY . .

RUN pnpm install

EXPOSE 3333

CMD ["pnpm", "run", "dev"]