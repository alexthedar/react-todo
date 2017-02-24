var React = require('react')
var moment = require('moment')

var Todo = React.createClass ({
  render: function(){
    var {text, id, completed, createdAt, completedAt} = this.props
    var todoClassName = completed ? 'todo todo-completed' : 'todo'

    var renderDate = () => {
      var message = 'Created on'
      var timestamp = createdAt

      if(completedAt) {
        message = "Completed "
        timestamp = completedAt
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')
    }

    return (
      <div className={todoClassName} onClick={() => {
          this.props.onToggle(id)
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
})

module.exports=Todo
