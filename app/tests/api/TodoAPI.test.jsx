var expect = require('expect')

var TodoAPI = require('TodoAPI')

describe('TodoAPI', ()=> {
  beforeEach(() => {
    localStorage.removeItem('todos')
  })

  it('should exist', () => {
    expect(TodoAPI).toExist()
  })

  describe('filterTodos', () => {
    var todos = [
      {
        id: 1,
        text: 'this is test',
        completed: true
      },
      {
        id: 2,
        text: 'other is test',
        completed: false
      },
      {
        id: 3,
        text: 'now is test',
        completed: true
      }
    ]
    it('should return all items if show Completed is true', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '')

      expect(filteredTodos.length).toEqual(3)
    })

    it('should return only items not completed', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '')

      expect(filteredTodos.length).toEqual(1)
    })

    it('should sort and have completed items last', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '')

      expect(filteredTodos[0].completed).toBe(false)
    })

    it('should filter todo by search text', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'other')

      expect(filteredTodos.length).toEqual(1)
    })

    it('should return all todos if search is empty', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '')

      expect(filteredTodos.length).toEqual(3)
    })

  })
})
