import { Component } from 'react'
import TaskList from './TaskList'

const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed'];
class TaskPage extends Component {
    render() {
        const { tasks } = this.props
        return TASK_STATUSES.map(status => {
            const statusTasks = tasks.filter(task => task.status === status);
            return <TaskList key={ status } status={ status } tasks={ statusTasks } />;
        })
    }
}
 export default TaskPage