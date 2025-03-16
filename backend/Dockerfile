FROM node:alpine3.21 AS base
WORKDIR /backend
EXPOSE ${BACKEND_PORT}

FROM base AS dev-build
# src is set as a volume in compose.yaml, so changes reload on save.
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
RUN npm install

FROM dev-build AS dev
CMD ["npm", "run", "dev"]
