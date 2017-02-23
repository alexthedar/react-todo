var React = require('react')
var TodoList = require('TodoList')


var TodoApp = React.createClass ({
  getInitialState: function (){
    return{
      todos: [
        {
          id: 1,
          text: 'walk the dog'
        },
        {
          id:2,
          text: 'clean the yard'
        },
        {
          id: 3,
          text: 'take a shit'
        },
        {
          id:4,
          text: 'steal some candy'
        }
      ]
    }
  },
  render: function() {
    var {todos} = this.state

    return (
      <div>
        <div>
          <TodoList todos={todos}/>
        </div>
      </div>
    )
  }
})

module.exports = TodoApp
