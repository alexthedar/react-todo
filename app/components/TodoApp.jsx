var React = require('react')


var TodoApp = React.createClass ({
  render: function() {
    return (
      <div>
        <div>
          TodoApp
          {props.children}
        </div>
      </div>
    )
  }
})

module.exports = TodoApp
