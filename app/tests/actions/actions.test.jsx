import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
var expect = require('expect')

import firebase, {firebaseRef} from 'app/firebase/'
var actions = require('actions')

var createMockStore = configureMockStore([thunk])

describe('Actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'This is test'
    }

    var res = actions.setSearchText(action.searchText)
    expect(res).toEqual(action)
  })

  it('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      todo: {
        id: '123',
        text: 'stuff',
        completed: false,
        createdAt: 97
      }
    }

    var res = actions.addTodo(action.todo)
    expect(res).toEqual(action)
  })

  it('should create todo and dispatch add-todo', (done) => {
    const store = createMockStore({})
    const todoText = 'todo'

    store.dispatch(actions.startAddTodo(todoText)).then(()=> {
      const actions = store.getActions()
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'})
      expect(actions[0].todo).toInclude({
        text: todoText
      })
      done()
    }).catch(done)
  })

  it('should generate toggle show completed action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }

    var res = actions.toggleShowCompleted()
    expect(res).toEqual(action)
  })

  it('should generate toggle todo action', () => {
    var action = {
      type: 'UPDATE_TODO',
      id: 3,
      updates: {
        completed: false
      }
    }

    var res = actions.updateTodo(action.id, action.updates)
    expect(res).toEqual(action)
  })

  it('should create add_todos action', () => {
    var todos = [{
      id: '111',
      text: 'anything',
      completed: false,
      completedAt: undefined,
      createdAt: 30000
    }]

    var action = {
      type: 'ADD_TODOS',
      todos
    }

    var res = actions.addTodos(todos)
    expect(res).toEqual(action)
  })

  it('should generate login acrion obj', ()=> {
    const action = {
      type: 'LOGIN',
      uid: '1234'
    }

    const res = actions.login(action.uid)
    expect(res).toEqual(action)
  })

  it('should generate logout obj', ()=>{
    const action = {
      type: 'LOGOUT'
    }

    const res = actions.logout()
    expect(res).toEqual(action)

  })

  describe('Tests with firebase todos', ()=>{
    var testTodoRef

    beforeEach((done)=>{
      var todosRef = firebaseRef.child('todos')

      todosRef.remove().then(()=>{
          testTodoRef = firebaseRef.child('todos').push()

          return testTodoRef.set({
            text: 'random words',
            completed: false,
            createdAt: 896876
          })
        })
        .then(()=> done())
        .catch(done)
    })

    afterEach((done)=>{
      testTodoRef.remove().then(()=> done())
    })

    it('should toggle todo and dispatch update todo action',(done)=>{
      const store = createMockStore({})

      const action = actions.startToggleTodo(testTodoRef.key, true)

      store.dispatch(action).then(()=>{
        const mockActions = store.getActions()

        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key
        })

        expect(mockActions[0].updates).toInclude({
          completed: true
        })

        expect(mockActions[0].updates.completedAt).toExist()

        done()
      }).catch(done)
    })

    it('should pop todos and dispatch add todos',(done)=>{
      const store = createMockStore({})

      const action = actions.startAddTodos()
      store.dispatch(action).then(() => {
        const mockActions = store.getActions()

        expect(mockActions[0].type).toEqual('ADD_TODOS')

        expect(mockActions[0].todos.length).toEqual(1)

        expect(mockActions[0].todos[0].text).toEqual('random words')

        done()
      }).catch(done)
    })
  })
})
