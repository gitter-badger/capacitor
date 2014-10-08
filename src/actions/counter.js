/**
 * The job scheduler for the Counter Store. They are communicated through
 * the Dispatcher. Actions provide a mid-way point to keep the Dispatcher
 * and Stores separate.
 */

var Actions    = require('../constants/actions');
var Dispatcher = require('../dispatcher');

module.exports = {

  incr() {
    Dispatcher.dispatch({ type: Actions.COUNTER_INCR })
  }

};
