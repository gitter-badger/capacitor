/**
 * @jsx React.DOM
 *
 * Bootstrapping. Pull in the Router and mount it to the DOM at #app.
 */

var React  = require('react')
var Router = require('../shared/router')

React.renderComponent(Router, document.querySelector('#app'))
