jest.dontMock('../monitor')

describe('Mixin - Monitor', function() {
  var React = require('react/addons')
  var Tools = React.addons.TestUtils

  var getComponent = function() {
    return React.createClass({
      mixins: [ require('../monitor') ],
      getState() { return {} },
      render() { return (React.DOM.p()) }
    })
  }

  it ('subscribes to the bus when the component mounts', function() {
    var Bus       = require('../../bus')
    var Component = getComponent()

    React.renderComponent(Component(), document.body)

    expect(Bus.subscribe).toBeCalled()
  })

  it ('unsubscribes to the bus when the component mounts', function() {
    var Bus       = require('../../bus')
    var Component = getComponent()

    React.renderComponent(Component(), document.body)
    React.renderComponent(Component(), document.body)

    expect(Bus.subscribe).toBeCalled()
  })

})