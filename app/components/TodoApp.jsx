var React = require('react')
var uuid = require('node-uuid')
var moment = require('moment')

import TodoList from 'TodoList'
import TodoForm from 'TodoForm'
import TodoSearch from 'TodoSearch'

var TodoApp = React.createClass ({
  render: function() {

    return (
        <div>
          <h1 className="page-title">React Todo App</h1>
          <div className="row">
            <div className="column small-centered small-11 medium-6 large-5">
              <div className="container">
                <TodoSearch />
                <TodoList />
                <TodoForm />
              </div>
            </div>
          </div>
        </div>
    )
  }
})

module.exports = TodoApp


// handleToggle: function (id){
//   var updatedTodos = this.state.todos.map((todo) => {
//     if(todo.id === id){
//       todo.completed = !todo.completed
//       todo.completedAt = todo.completed ? moment().unix() : undefined
//     }
//     return todo
//   })
//   this.setState({todos: updatedTodos})
// },

// <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
