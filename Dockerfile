FROM node:18

# Установка зависимостей для Chrome
RUN apt-get update && apt-get install -y \
  libnss3 \
  libgdk-pixbuf2.0-0 \
  libx11-xcb1 \
  libatk-bridge2.0-0 \
  libatk1.0-0 \
  libcups2 \
  libxcomposite1 \
  libxrandr2 \
  libgbm1 \
  libasound2 \
  libnss3 \
  xdg-utils \
  libxss1 \
  libappindicator3-1 \
  libxtst6 \
  libnss3-dev

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run clean:allure

CMD ["npm", "run", "test"]
