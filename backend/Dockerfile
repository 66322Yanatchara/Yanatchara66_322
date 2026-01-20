FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN mkdir -p logs

EXPOSE 3000

HEALTHCHECK CMD wget -q -O - http://localhost:3000/api/demo || exit 1

CMD ["node", "server.js"]
