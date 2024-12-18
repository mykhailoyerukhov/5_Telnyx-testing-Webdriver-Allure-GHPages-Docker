
Установил зависимости
1 npm install --save-dev webdriverio @wdio/cli @wdio/mocha-framework @wdio/allure-reporter mocha ts-node typescript

Настроил webdriver
npx wdio config
Установил typescript , mocha, allure-report

В конфиге wdio.conf.ts
    reporters: [['allure', {outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],

    capabilities: [{
        browserName: process.argv.includes('--browser-name=firefox') ? 'firefox' : 
        process.argv.includes('--browser-name=chrome') ? 'chrome' : 'chrome',
        'goog:chromeOptions': {
      args: [
        '--window-size=1900,1080' // указываем размер окна
      ],
      
    },
        acceptInsecureCerts: true // Default chrome
    }, ],

        specs: [
        './test/specs/**/*.ts'
    ],

В файле:
    tsConfigPath: './tsconfig.json',

        mochaOpts: {
        ui: 'bdd',
        timeout: 120000
    },

    Поставил 120 сек вместо 60 сек.

Создал папки:
test -> 1. pageobjects 2. specs
.github -> 1. workflows
Используя относительные пути в tsconfig.json названия папок должны совпадать.

Добавил относительные пути в tsconfig.json
"baseUrl": "./",
        "paths": {
          "@pageobjects/*": ["test/pageobjects/*"],
          "@specs/*": ["test/specs/*"]
        }

Создал .gitignore /node_modules

Создал Dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run clean:allure

CMD ["npm", "run", "test"]

Создал workflow file ci.yml

Добавил скрипты:

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




