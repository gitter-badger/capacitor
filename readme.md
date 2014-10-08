# Capacitor

A basic Flux/React bootstrap. Also a work in progress.

## What this includes:

- [Webpack](http://webpack.github.io/docs/) with [hot module replacement](https://github.com/webpack/docs/wiki/hot-module-replacement-with-webpack) using [react-hot-loader](https://github.com/gaearon/react-hot-loader)
- **Dispatcher** powered by [flux](https://github.com/facebook/flux)
- **Stores** powered by [immutable-js](**https://github.com/facebook/immutable-js)
- **Testing** with [jest](https://github.com/facebook/jest)
- **Routing** with [react-router](https://github.com/rackt/react-router)

## Setup

```bash
npm install -d
npm start
```

## Run Tests

```bash
npm test
```

## Run Accessibility Tests

Make sure your server is running on port `3000`, then run:

```bash
npm run test:accessibility
```

Example output will look like:

![Accessibility Testing](http://cl.ly/image/2F3x3d351U3Y/Screen%20Shot%202014-10-08%20at%208.42.36%20AM.png)
