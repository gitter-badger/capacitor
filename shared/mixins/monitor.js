/**
 * Listens to the Bus and calls a provided `getState` function when
 * the Bus publishes.
 */

var Bus       = require('../bus')
var invariant = require('react/lib/invariant')

var Monitor = {

  getInitialState() {
    if (__DEV__) {
      invariant(this.getState, "Monitor mixin requires `getState` implimentation.")
    }

    return this.getState()
  },

  updateState() {
    this.setState(this.getState())
  },

  componentDidMount() {
    Bus.subscribe(this.updateState)
  },

  componentWillUnmount() {
    Bus.unsubscribe(this.updateState)
  }

}

module.exports = Monitor
