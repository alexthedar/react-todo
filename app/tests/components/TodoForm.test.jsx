var React = require('react')
var ReactDOM = require('react-dom')
var TestUtils = require('react-addons-test-utils')
var expect = require('expect')
var $ = require('jquery')

import * as actions from 'actions'
var {TodoForm} =require('TodoForm')


describe('TodoForm', ()=> {
  it('should exist', () => {
    expect(TodoForm).toExist()
  })

  it('should dispatch ADD_TODO when valid todo text', () => {
    var todoText = 'Check mail';
    var action = actions.startAddTodo(todoText)

    var spy = expect.createSpy();
    var todoForm = TestUtils.renderIntoDocument(<TodoForm dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoForm));

    todoForm.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });

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
