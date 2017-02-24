var redux = require('redux')
var {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers')

export var configure = () => {
  var reducer = redux.combineReducers({
    searchTextReducer: searchTextReducer,
    showCompletedReducer: showCompletedReducer,
    todosReducer: todosReducer
  })

  var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

  return store
}
