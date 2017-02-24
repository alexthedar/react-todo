var React = require('react')
var ReactDOM = require('react-dom')
var {Route, Router, IndexRoute, hashHistory} = require('react-router')

var TodoApp = require('TodoApp')

var actions = require('actions')
var store = require('configureStore').configure()

store.subscribe(() => {
  console.log('New State', store.getState())
})

store.dispatch(actions.addTodo('clean'))
store.dispatch(actions.setSearchText('happy'))
store.dispatch(actions.toggleShowCompleted())

//load foundation
$(document).foundation()

// app css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={TodoApp}>

    </Route>
  </Router>,
  document.getElementById('app')
)
