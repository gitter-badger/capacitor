/**
 * A single store example. Counter sits in front of an immutable Map
 * and allows for the increasing of a counter value.
 */

var Bus        = require('../bus')
var Dispatcher = require('../dispatcher')
var Actions    = require('../constants/actions')
var Immutable  = require('immutable')

var _data = Immutable.Map({ count : 0 })

var Counter = {

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
    Bus.publish()
  },

  /**
   * Increase the count attribute by one.
   */
  incr() {
    Counter.set('count', Counter.get('count') + 1)
  }

}

module.exports = Counter

Dispatcher.register(function(action) {
  switch (action.type) {
    case Actions.COUNTER_INCR:
      Counter.incr()
      break
    default:
      // do nothing
  }
})
