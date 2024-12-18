FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run clean:allure

CMD ["npm", "run", "test"]
