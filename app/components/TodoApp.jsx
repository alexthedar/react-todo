var React = require('react')
var uuid = require('node-uuid')

var TodoList = require('TodoList')
var TodoForm = require('TodoForm')
var TodoSearch = require('TodoSearch')
var TodoAPI = require('TodoAPI')

var TodoApp = React.createClass ({
  getInitialState: function (){
    return{
      showCompleted: false,
      searchtext: '',
      todos: TodoAPI.getTodos()
    }
  },
  componentDidUpdate: function(){
    TodoAPI.setTodos(this.state.todos)
    console.log('here')

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
    console.log(this.state.todos)
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
