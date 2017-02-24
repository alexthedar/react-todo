var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var $ = require('jQuery')
var TestUtils = require('react-addons-test-utils')
var {Provider} = require('react-redux')
import {configure} from configureStore

import ConnectTodoList, {TodoList} from 'TodoList'
import ConnectTodo, {Todo} from 'Todo'

describe('TodoList', ()=> {
  it('should exist', () => {
    expect(TodoList).toExist()
  })

  it('should render one Todo component for each todo item', () => {
    var todos = [{
                  id: 1,
                  text: 'walk the dog',
                  completed: false,
                  completedAt: undefined,
                  createdAt: 500
                },
                {
                  id:2,
                  text: 'clean the yard',
                  completed: false,
                  completedAt: undefined,
                  createdAt: 800
                }]

    var store = configure({
      todos
    })

    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectTodoList />
      </Provider>
    )

    var todoList=TestUtils.scryRenderedComponentsWithType(provider, ConnectTodoList)[0]
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectTodo)

    expect(todosComponents.length).toBe(todos.length)
  })
  it('should render empty message if no todos', () => {
    var todos = []

    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />)
    var $el = $(ReactDOM.findDOMNode(todoList))

    expect($el.find('.container__message').length).toBe(1)
  })
})
