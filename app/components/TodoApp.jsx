var React = require('react')
var uuid = require('node-uuid')
var moment = require('moment')

var TodoList = require('TodoList')
var TodoForm = require('TodoForm')
var TodoSearch = require('TodoSearch')
var TodoAPI = require('TodoAPI')

var TodoApp = React.createClass ({
  getInitialState: function (){
    return{
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos(),
      createdAt: ''
    }
  },
  componentDidUpdate: function(){
    TodoAPI.setTodos(this.state.todos)
  },
  handleAddTodo: function (text){
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    })
  },
  handleSearch: function (showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  handleToggle: function (id){
    var updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed
        todo.completedAt = todo.completed ? moment().unix() : undefined
      }
      return todo
    })
    this.setState({todos: updatedTodos})
  },
  render: function() {
    var {todos, showCompleted, searchText} = this.state
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText)

    return (
      <div>
        <div>
          <TodoSearch onSearch={this.handleSearch}/>
          <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
          <TodoForm onAddTodo={this.handleAddTodo}/>
        </div>
      </div>
    )
  }
})

module.exports = TodoApp
