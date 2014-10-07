/** @jsx React.DOM **/
var { Routes, Route } = require('react-router');

module.exports = (
  <Routes>

    <Route handler={ require('./components/layout') }>
      <Route name="home" path="/" handler={ require('./components/home') } />
    </Route>

  </Routes>
);
