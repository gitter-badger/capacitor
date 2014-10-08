/**
 * @jsx React.DOM
 *
 * The Router contains all URL states. With react-router, they can be nested.
 * Each nested route gets its own layout, provided by the handler property,
 * as seen below...
 */

var { Routes, Route } = require('react-router');

module.exports = (
  <Routes>

    <Route handler={ require('./components/layout') }>
      <Route name="home" path="/" handler={ require('./components/home') } />
    </Route>

  </Routes>
);
