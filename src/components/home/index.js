/** @jsx React.DOM **/
var React = require('react');
var Monitor = require('../../mixins/monitor');
var Counter = require('../../stores/counter');
var CounterActions = require('../../actions/counter');

var Home = React.createClass({

  mixins: [ Monitor ],

  getState() {
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
    );
  },

  _onCounterClick() {
    CounterActions.incr();
  }

});

module.exports = Home;
