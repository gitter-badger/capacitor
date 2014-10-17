/** @jsx React.DOM **/
var React = require('react')
var Counter = require('../../stores/counter')
var CounterActions = require('../../actions/counter')

var Home = React.createClass({
  componentDidMount() {
    Counter.onChange(this._onChange)
  },

  componentWillUnmount() {
    Counter.offChange(this._onChange)
  },

  getInitialState() {
    return {
      count: Counter.get('count')
    }
  },

  render() {
    return (
      <section>
        <header>
          <h1>Welcome</h1>
        </header>
        <p>This is a basic Flux app</p>
        <p>Clicks: { this.state.count }</p>
        <button onClick={ this._onCounterClick }>Click me!</button>
      </section>
    )
  },

  _onCounterClick() {
    CounterActions.incr()
  },

  _onChange: function() {
      this.setState({
        count: Counter.get('count')
      })
  }

})

module.exports = Home
