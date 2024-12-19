
# Install dependencies
1 npm install --save-dev webdriverio @wdio/cli @wdio/mocha-framework @wdio/allure-reporter mocha ts-node typescript

# Configure Webdriver.IO
npx wdio config
# Install typescript , mocha, allure-report

## In config е wdio.conf.ts:
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

## And also wdio.conf.ts:
    tsConfigPath: './tsconfig.json',

        mochaOpts: {
        ui: 'bdd',
        timeout: 120000
    },

    (Поставил 120 сек вместо 60 сек.)

### Folders created:
test -> 1. pageobjects 2. specs
.github -> 1. workflows
By using relative paths in tsconfig.json names of folders should match each other!

### Added relative paths to tsconfig.json
"baseUrl": "./",
        "paths": {
          "@pageobjects/*": ["test/pageobjects/*"],
          "@specs/*": ["test/specs/*"]
        }

### Created .gitignore 
/node_modules
allure-results/
allure-report/

## Created Dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run clean:allure

CMD ["npm", "run", "test"]

## Run Docker: 
- (Locally) 
Create image:
docker build -t mike01 .
Run container:
docker run mike01 npm run test:login
docker run mike01 npm run test:sign_up
...

docker run -p 38999:38999 mike01 npm run test:login

- Libs installed
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

- wdio.conf.ts. (Without headless mode i got failed) .
capabilities: [{
        browserName: process.argv.includes('--browser-name=firefox') ? 'firefox' : 
        process.argv.includes('--browser-name=chrome') ? 'chrome' : 'chrome',
        'goog:chromeOptions': {
      args: [
        '--window-size=1900,1080', // selecting window size
        "--disable-gpu",
         "--headless",
        "--no-sandbox"
      ],
      
    },
        acceptInsecureCerts: true // Default chrome
    }, ],

- There was a problem with chromedriver.Still not clear how it have fixed. Probably, after I downloaded  chromedriver from website https://googlechromelabs.github.io/chrome-for-testing/#stable

## Created workflow file ci.yml

### Added scripts:

"scripts": {
    "test:all": "wdio run ./wdio.conf.ts",
    "test:login": "wdio run ./wdio.conf.ts --spec ./test/specs/login.ts",
    "test:sign_up": "wdio run ./wdio.conf.ts --spec ./test/specs/sign_up.ts",
    "test:contact_us": "wdio run ./wdio.conf.ts --spec ./test/specs/contact_us.ts",
    "test:shop": "wdio run ./wdio.conf.ts --spec ./test/specs/shop.ts",
    "test:trust_center": "wdio run ./wdio.conf.ts --spec ./test/specs/trust_center.ts",
    "test:main": "wdio run ./wdio.conf.ts --spec ./test/specs/main.ts",

    "test:all_in_chrome": "wdio run ./wdio.conf.ts -- --browser-name=chrome",
    "test:all_in_firefox": "wdio run ./wdio.conf.ts -- --browser-name=firefox",

    "test:login-firefox": "wdio run ./wdio.conf.ts --spec ./test/specs/login.ts -- --browser-name=firefox",
    "test:sign_up-firefox": "wdio run ./wdio.conf.ts --spec ./test/specs/sign_up.ts --browser-name=firefox",
    "test:contact_us-firefox": "wdio run ./wdio.conf.ts --spec ./test/specs/contact_us.ts --browser-name=firefox",
    "test:shop-firefox": "wdio run ./wdio.conf.ts --spec ./test/specs/shop.ts --browser-name=firefox",
    "test:trust_center-firefox": "wdio run ./wdio.conf.ts --spec ./test/specs/trust_center.ts --browser-name=firefox",
    "test:main-firefox": "wdio run ./wdio.conf.ts --spec ./test/specs/main.ts --browser-name=firefox",

    "allure:generate": "allure generate ./allure-results --clean",
    "allure:open": "allure open",
    "clean:allure-windows": "rmdir /s /q allure-results && rmdir /s /q allure-report",
    "clean:allure": "rm -rf allure-results allure-report",

    "deploy:local": "npx gh-pages -d allure-report"
  },





