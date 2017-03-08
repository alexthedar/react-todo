import React from 'react'
import * as Redux from 'react-redux'
import * as actions from 'actions'

import TodoList from 'TodoList'
import TodoForm from 'TodoForm'
import TodoSearch from 'TodoSearch'

export class TodoApp extends React.Component{
  constructor(props){
    super(props)
    this.onLogout = this.onLogout.bind(this)
  }
  onLogout(e){
    var {dispatch} =this.props
    e.preventDefault()
    dispatch(actions.startLogout())
  }
  render () {

    return (
      <div>
        <div className="page-actions" onClick={this.onLogout}><a href="#">Logout</a></div>
        <h1 className="page-title">React Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch />
              <TodoList />
              <TodoForm />
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Redux.connect()(TodoApp)
