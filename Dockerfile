FROM node:latest
LABEL org.opencontainers.image.source https://github.com/endworks/lovelust-home

WORKDIR /app

COPY yarn.lock package.json ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "preview" ]