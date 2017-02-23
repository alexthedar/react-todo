var React = require('react')
var TodoList = require('TodoList')
var TodoForm = require('TodoForm')
var TodoSearch = require('TodoSearch')
var uuid = require('node-uuid')


var TodoApp = React.createClass ({
  getInitialState: function (){
    return{
      showCompleted: false,
      searchtext: '',
      todos: [
        {
          id: uuid(),
          text: 'walk the dog',
          completed: false
        },
        {
          id: uuid(),
          text: 'clean the yard',
          completed: true
        },
        {
          id: uuid(),
          text: 'take a shit',
          completed: true
        },
        {
          id:uuid(),
          text: 'steal some candy',
          completed: false
        }
      ]
    }
  },
  handleAddTodo: function (text){
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    })
  },
  handleSearch: function (showCompleted, searchText){
    this.setState=({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  handleToggle: function (id){
    var updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    })
    this.setState({ todos: updatedTodos})
  },
  render: function() {
    var {todos} = this.state

    return (
      <div>
        <div>
          <TodoSearch onSearch={this.handleSearch}/>
          <TodoList todos={todos} onToggle={this.handleToggle}/>
          <TodoForm onAddTodo={this.handleAddTodo}/>
        </div>
      </div>
    )
  }
})

module.exports = TodoApp
