/** @jsx React.DOM **/
var React  = require('react')
var Router = require('./router')

// Expose React in development mode for the React
// developer chrome extension
if (__DEV__) {
  window.React = React;
}

React.renderComponent(Router, document.querySelector('#app'))
