var expect = require('expect')
var reducers = require('reducers')
var df = require('deep-freeze-strict')


describe('Reducers', () => {
  describe('searchTextReducer', () => {

    it('should set search text', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        text: 'dog'
      }
      var res = reducers.searchTextReducer(df(''), df(action))
      expect(res).toEqual(action.searchText)
    })
  })

  describe('showCompletedReducer', () => {
    it('should toggle show completed state', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      }
      var res = reducers.showCompletedReducer(df(false), df(action))
      expect(res).toEqual(true)
    })
  })

  describe('todosReducer', () => {
    it('should new add todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: '123',
          text: 'eat',
          completed: false,
          createdAt: 765765
        }
      }

      var res = reducers.todosReducer(df([]), df(action))
      expect(res.length).toEqual(1)
      expect(res[0]).toEqual(action.todo)
    })

    it('should new add todo', () => {
      var todos = [{
        id: '123',
        text: 'stuff',
        completed: true,
        createdAt: 123,
        completedAt: 125
      }]

      var action = {
        type: "TOGGLE_TODO",
        id: '123'
      }

      var res = reducers.todosReducer(df(todos), df(action))
      expect(res[0].completed).toEqual(false)
      expect(res[0].completedAT).toEqual(undefined)
    })

    it('should add existing todos', () => {
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

      var res = reducers.todosReducer(df([]), df(action))
      expect(res.length).toEqual(1)
      console.log(res[0], todos[0])
      expect(res[0]).toEqual(todos[0])
    })

  })
})
