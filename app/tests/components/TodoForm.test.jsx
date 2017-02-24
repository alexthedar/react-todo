var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var $ = require('jQuery')
var TestUtils = require('react-addons-test-utils')

var {TodoForm} = require('TodoForm')

describe('TodoForm', ()=> {
  it('should exist', () => {
    expect(TodoForm).toExist()
  })

  it('it should dispatch add todo when valid todo text', () => {
    var todoText = "check mail"
    var action = {
      type: "ADD_TODO",
      text: todoText

    }
    var spy = expect.createSpy()

    var todoForm = TestUtils.renderIntoDocument(<TodoForm dispatch={spy} />)
    var $el = $(ReactDOM.findDOMNode(todoForm))

    todoForm.refs.todoText.value=todoText
    TestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toHaveBeenCalledWith(action)
  })

  it('should dispatch Add todo with invalid text', () => {
    var todoText = ''
    var spy = expect.createSpy()

    var todoForm = TestUtils.renderIntoDocument(<TodoForm dispatch={spy} />)
    var $el = $(ReactDOM.findDOMNode(todoForm))

    todoForm.refs.todoText.value=todoText
    TestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toNotHaveBeenCalled()
  })
})
