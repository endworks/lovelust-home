FROM node:latest AS builder

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build


FROM node:latest AS server

WORKDIR /app

COPY --from=builder /app/.next/standalone .
COPY --from=builder /app/.next/static .next/static
COPY --from=builder /app/public public

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
