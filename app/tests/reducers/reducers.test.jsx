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
      var res = reducers.showCompletedReducers(df(false), df(action))
      expect(res).toEqual(true)
    })
  })

})
