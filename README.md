# Fundraisee

[![Build Status](https://travis-ci.com/Kindev/fundraisee-web.svg?branch=master)](https://travis-ci.com/Kindev/fundraisee-web)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](CONTRIBUTING.md)

## Quick Start

```
git clone https://github.com/Kindev/fundraisee-web.git
cd fundraisee-web
yarn
yarn start
```

Install [Redux DevTools Extension - Chrome Web Store](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

## Available Scripts

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn flow`

Run `flow` - static type checker for JavaScript. Learn [Flow](https://flow.org/) and [Flow-React](https://flow.org/en/docs/react/)

### `yarn prettier`

Format the code automatically to ensure consistent code style.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

## Folder Structure

```
fundraisee-web/
  src/
    actions/
      index.js
      types.js
      action1.js
    api/
      index.js
      api1.js
      constants.js
    components/
      MyComponent/
        index.js
        styles.css
    containers/
      MyContainer/
        index.js
        styles.css
    reducers/
      index.js
      reducer1.js
    index.js
  ...
```
