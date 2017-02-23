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
          text: 'walk the dog'
        },
        {
          id: uuid(),
          text: 'clean the yard'
        },
        {
          id: uuid(),
          text: 'take a shit'
        },
        {
          id:uuid(),
          text: 'steal some candy'
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
          text: text
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
  render: function() {
    var {todos} = this.state

    return (
      <div>
        <div>
          <TodoSearch onSearch={this.handleSearch}/>
          <TodoList todos={todos}/>
          <TodoForm onAddTodo={this.handleAddTodo}/>
        </div>
      </div>
    )
  }
})

module.exports = TodoApp
