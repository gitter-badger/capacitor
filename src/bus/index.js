/**
 * The Bus emits a heartbeat whenever any store has changed
 */

var Dispatcher = require('../dispatcher');
var Immutable  = require('immutable');
var invariant  = require('react/lib/invariant');

var _callbacks = Immutable.Set();

var Bus = {

  unsubscribe(callback) {
    if (__DEV__) {
      invariant(_callbacks.has(callback), 'Bus.stopListeningTo() was asked to remove callback that it was not subscribed to.')
    }

    _callbacks = _callbacks.remove(callback);
  },

  subscribe(callback) {
    if (__DEV__) {
      var type = typeof callback;
      invariant(type === 'function', 'Bus.listenTo() expects a function, instead it received a ' + type);
    }

    _callbacks = _callbacks.add(callback);
  },

  publish() {
    _callbacks.forEach(callback => callback());
  }

};

module.exports = Bus;
