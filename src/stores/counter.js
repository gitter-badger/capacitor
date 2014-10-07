var Bus        = require('../bus');
var Dispatcher = require('../dispatcher');
var Actions    = require('../constants/actions');
var Immutable  = require('immutable');

var _data = Immutable.Map({ count : 0 });

var Counter = {

  get(key) {
    return key ? _data.get(key) : _data.toJS();
  },

  set(prop, value) {
    _data = typeof prop === 'object' ? _data.merge(prop) : _data.set(prop, value);
    Bus.publish();
  },

  incr() {
    Counter.set('count', Counter.get('count') + 1);
  }

};

module.exports = Counter;

Dispatcher.register(function(action) {

  switch (action.type) {

    case Actions.COUNTER_INCR:
      Counter.incr();
      break;

  }

})
