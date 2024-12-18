
# Установить зависимости
1 npm install --save-dev webdriverio @wdio/cli @wdio/mocha-framework @wdio/allure-reporter mocha ts-node typescript

# Настроить webdriver
npx wdio config
# Установить typescript , mocha, allure-report

## В конфиге wdio.conf.ts:
    reporters: [['allure', {outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],

    capabilities: [{
        browserName: process.argv.includes('--browser-name=firefox') ? 'firefox' : 
        process.argv.includes('--browser-name=chrome') ? 'chrome' : 'chrome',
        'goog:chromeOptions': {
      args: [
        '--window-size=1900,1080',  // указываем размер окна
        "--disable-gpu",
        "--headless",
        "--no-sandbox"
      ],
      
    },
        acceptInsecureCerts: true // Default chrome
    }, ],

        specs: [
        './test/specs/**/*.ts'
    ],

## А также wdio.conf.ts:
    tsConfigPath: './tsconfig.json',

        mochaOpts: {
        ui: 'bdd',
        timeout: 120000
    },

    (Поставил 120 сек вместо 60 сек.)

### Создал папки:
test -> 1. pageobjects 2. specs
.github -> 1. workflows
Используя относительные пути в tsconfig.json названия папок должны совпадать.

### Добавил относительные пути в tsconfig.json
"baseUrl": "./",
        "paths": {
          "@pageobjects/*": ["test/pageobjects/*"],
          "@specs/*": ["test/specs/*"]
        }

### Создал .gitignore /node_modules

## Создал Dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run clean:allure

CMD ["npm", "run", "test"]

## Запуск Docker: 
- (Локально) 
Собрать образ:
docker build -t mike01 .
Запуск контейнера:
docker run mike01 npm run test:login
docker run mike01 npm run test:sign_up
docker run mike01 npm run test:contact_us
docker run mike01 npm run test:shop
docker run mike01 npm run test:trust_center
docker run mike01 npm run test:main

docker run -p 38999:38999 mike01 npm run test:login

- Установлены библиотеки
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

- wdio.conf.ts. Внимание на headless mode.
capabilities: [{
        browserName: process.argv.includes('--browser-name=firefox') ? 'firefox' : 
        process.argv.includes('--browser-name=chrome') ? 'chrome' : 'chrome',
        'goog:chromeOptions': {
      args: [
        '--window-size=1900,1080', // указываем размер окна
        "--disable-gpu",
         "--headless",
        "--no-sandbox"
      ],
      
    },
        acceptInsecureCerts: true // Default chrome
    }, ],

- Была проблема с chromedriver. До конца не ясно как она устранилась. Вероятно, после того, как я скачал chromedriver 
с сайта https://googlechromelabs.github.io/chrome-for-testing/#stable

## Создать workflow file ci.yml

## Установил chromedriver
npm install --save-dev chromedriver

"webdriverio": "^9.4.3"


Изменил wdio.conf.ts

  services: ['visual', 'chromedriver'],
### Добавил скрипты:

 "scripts": {
    "test": "wdio run ./wdio.conf.ts",
    "test_single_file": "wdio run ./wdio.conf.ts --spec ./test/specs/main.ts",
    "test:login": "wdio run ./wdio.conf.ts --spec ./test/specs/login.ts",
    "test:job_application": "wdio run ./wdio.conf.ts --spec ./test/specs/job_application.ts",
    "test:contact_us": "wdio run ./wdio.conf.ts --spec ./test/specs/contact_us.ts",
    "test:trust_center": "wdio run ./wdio.conf.ts --spec ./test/specs/trust_center.ts", 
    "test:sign_up": "wdio run ./wdio.conf.ts --spec ./test/specs/sign_up.ts",
    "test:shop": "wdio run ./wdio.conf.ts --spec ./test/specs/shop.ts",

    "test_all_in_chrome": "wdio run ./wdio.conf.ts -- --browser-name=chrome",
    "test_all_in_firefox": "wdio run ./wdio.conf.ts -- --browser-name=firefox",

    "allure:generate": "allure generate ./allure-results --clean",
    "allure:open": "allure open",
    "clean:allure-windows": "rmdir /s /q allure-results && rmdir /s /q allure-report",
    "clean:allure": "rm -rf allure-results allure-report || true",
    
    
    "deploy:local": "npx gh-pages -d allure-report"
  },





