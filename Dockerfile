FROM node:latest as builder

WORKDIR /app

COPY . .

RUN yarn install
RUN yarn build

FROM caddy:alpine

COPY --from=builder /app/dist /usr/share/caddy

EXPOSE 80

CMD ["caddy", "file-server", "--root", "/usr/share/caddy", "--listen", ":80"]
