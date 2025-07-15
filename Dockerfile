FROM node:latest as builder

WORKDIR /app

COPY . .

RUN yarn install
RUN yarn build


FROM node:latest as server

WORKDIR /app

RUN npm install -g serve

COPY --from=builder /app/dist .

EXPOSE 3000

CMD ["serve", "-s", ".", "-l", "3000"]
