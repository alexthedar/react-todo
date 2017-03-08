var React = require('react')
var moment = require('moment')
var {connect} = require('react-redux')
var actions = require('actions')

export class Todo extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    var {text, id, completed, createdAt, completedAt, dispatch} = this.props
    var todoClassName = completed ? 'todo todo-completed' : 'todo'
    var renderDate = () => {
      var message = 'Created on '
      var timestamp = createdAt

      if(completedAt) {
        message = "Completed "
        timestamp = completedAt
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')
    }

    return (
      <div className={todoClassName} onClick={() => {
          dispatch(actions.startToggleTodo(id, !completed))
        }}>
        <div>
          <input type="checkbox" checked={completed} />
        </div>
        <div>
          <p className="todo-item">{text}</p>
          <small className="todo__subtext">{renderDate()}</small>
        </div>
      </div>
    )
  }

}



export default connect()(Todo)
