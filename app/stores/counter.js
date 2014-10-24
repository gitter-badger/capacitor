/**
 * A single store example. Counter sits in front of an immutable Map
 * and allows for the increasing of a counter value.
 */

var Events     = require('events')
var Dispatcher = require('../dispatcher')
var Actions    = require('../constants/actions').COUNTER
var Immutable  = require('immutable')

var merge      = require('react/lib/merge')
var CHANGE     = 'change'

var _data = Immutable.Map({ count : 0 })

var Counter = merge(Events.EventEmitter.prototype, {

  /**
   * Adds an event listener to subscribe to data changes
   */
  onChange(callback) {
    this.on(CHANGE, callback)
  },

  /**
   * Removes an event listener on data changes
   */
  offChange(callback) {
    this.removeListener(CHANGE, callback)
  },

  /**
   * Returns properties. If given a string KEY, returns the specific value.
   * Otherwise it returns the entire object as JS.
   */
  get(key) {
    return typeof key === 'string' ? _data.get(key) : _data.toJS()
  },

  /**
   * Sets a given set of properties. If given an object, merge it into the Map.
   * Otherwise set a given PROP string key to a given VALUE.
   *
   * Triggers Bus.publish()
   */
  set(prop, value) {
    _data = typeof prop === 'object' ? _data.merge(prop) : _data.set(prop, value)
    Counter.emit(CHANGE)
  },

  /**
   * Increase the count attribute by one.
   */
  incr() {
    Counter.set('count', Counter.get('count') + 1)
  }

})

module.exports = Counter

Dispatcher.register(function(action) {
  switch (action.type) {
    case Actions.INCR:
      Counter.incr()
      break
    default:
      // do nothing
  }
})
