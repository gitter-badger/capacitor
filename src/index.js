/**
 * @jsx React.DOM
 *
 * Bootstrapping. Pull in the Router and mount it to the DOM at #app.
 */

var React  = require('react')
var Router = require('./router')

/**
 * Expose React in development mode for the React
 * developer chrome extension;
 * https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
 *
 * TODO: I wonder if it's possible to just do this inside of WebPack
 */
if (__DEV__) {
  window.React = React;
}

React.renderComponent(Router, document.querySelector('#app'))
