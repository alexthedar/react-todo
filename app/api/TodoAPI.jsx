var $ = require('jQuery')

module.exports = {
  setTodos: function(todos){
    if($.isArray(todos)){
      localStorage.setItem('todos', JSON.stringify(todos))
      return todos
    }
  },
  getTodos: function(){
    var strTodos = localStorage.getItem('todos')
    var todos = []

    try {
      todos = JSON.parse(strTodos)
    } catch (e){ }

    return $.isArray(todos) ? todos : []
  },
  filterTodos: function(todos, showCompleted, searchText){
    var filteredTodos = todos

    //filter by showcompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted
    })

    //filter by search
    filteredTodos = filteredTodos.filter((todo) => {
      var text = todo.text.toLowerCase()
      return searchText.length === 0 || text.indexOf(searchText) > -1
    })

    //sort by noncompleted
    filteredTodos.sort((a,b) => {
      if( !a.completed && b.completed){
        return -1
      } else if (a.completed && !b.completed){
        return 1
      } else {
        return 0
      }
    })


    return filteredTodos
  }
}
