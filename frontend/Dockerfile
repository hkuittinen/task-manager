FROM node:alpine3.21 AS base
WORKDIR /frontend
EXPOSE ${FRONTEND_PORT}

FROM base AS dev-build
# src is set as a volume in compose.yaml, so changes reload on save.
# Files in .dockerignore are not copied.
COPY . .
RUN npm install

FROM dev-build AS dev
CMD ["npm", "run", "dev"]
