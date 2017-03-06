var React = require('react')
var ReactDOM = require('react-dom')
var {Route, Router, IndexRoute, hashHistory} = require('react-router')
var {Provider} = require('react-redux')

var TodoApp = require('TodoApp')

var actions = require('actions')
var store = require('configureStore').configure()
var TodoAPI = require('TodoAPI')


store.dispatch(actions.startAddTodos())

//load foundation
$(document).foundation()

// app css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={TodoApp}>

      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
