FROM node:latest AS builder

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build


FROM node:latest AS server

WORKDIR /app

RUN npm install -g serve

COPY --from=builder /app/out .

EXPOSE 3000

CMD ["serve", "-s", ".", "-l", "3000"]
