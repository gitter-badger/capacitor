var EventEmitter = require('events').EventEmitter
 var merge        = require('react/lib/merge')
 var Dispatcher   = require('../dispatcher')
 var Actions      = require('../constants/actions')

var CHANGE_EVENT = 'change'

var _data = { count : 0 }

var Counter = merge(EventEmitter.prototype, {
    emitChange() {
      this.emit(CHANGE_EVENT)
    },

    onChange(callback) {
      this.on(CHANGE_EVENT, callback)
    },

    offChange(callback) {
      this.removeListener(CHANGE_EVENT, callback)
    },

    get(key) {
      return _data[key]
    },

    set(prop, value) {
      _data[prop] = value
    },

    incr() {
       Counter.set('count', Counter.get('count') + 1)
    }
})

module.exports = Counter

Dispatcher.register(function(action) {
  switch (action.type) {
    case Actions.COUNTER_INCR:
      Counter.incr()
      break
    default:
      return true
  }

  Counter.emitChange()
  return true
})
