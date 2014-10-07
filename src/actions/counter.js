var ActionTypes = require('../constants/actions');
var Dispatcher  = require('../dispatcher');

module.exports = {

  incr() {
    Dispatcher.dispatch({ type: ActionTypes.COUNTER_INCR })
  }

};
