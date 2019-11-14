import React from 'react'
import Task from './Task'

export default class TaskList extends React.Component {
  render() {
    const { loading, tasks, onPinTask, onArchiveTask } = this.props
    
    const events = {
      onPinTask,
      onArchiveTask
    }

    if (loading) {
      return <div className="list-items">loading</div>
    }

    if (tasks.length === 0) {
      return <div className="list-items">empty</div>
    }

    return (
      <div>
        <div className="list-items">
          {tasks.map(task => (
            <Task key={task.id} task={task} {...events} />
          ))}
        </div>
      </div>
    )
  }
}
