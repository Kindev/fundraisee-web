# Fundraisee

[![Build Status](https://travis-ci.com/Kindev/fundraisee-web.svg?branch=master)](https://travis-ci.com/Kindev/fundraisee-web)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](CONTRIBUTING.md)

## Quick Start

```
git clone https://github.com/Kindev/fundraisee-web.git
cd fundraisee-web
```

### `yarn install`

Install the required dependencies defined in package.json

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

## Folder Structure

We follow common React-Redux code pattern. Separate folders for “actions”, “constants”, “reducers”, “containers”, and “components”. Note that "components" are dumb and should not be aware of Redux, try to read https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0 (creator of Redux)

```
fundraisee-web/
  src/
    actions/
    constants/
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
  ...
```
