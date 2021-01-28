import { Component } from "react";
import { connect } from "react-redux";
import { createTask, editTask, fetchTasks } from "./redux/actions";
import TaskPage from "./components/TaskPage";

const mapStateToProps = (state) => {
  return ({
    tasks : state.tasks
  })
}


class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchTasks())
  }
  onStatusChange = (id, status) => {
    this.props.dispatch(editTask(id,{status}))
  }
  onCreateTask = ({ title, description, status }) => {
      this.props.dispatch(createTask({title, description, status}))
    }
  render() {
     //console.trace(`props from App : `, this.props)
  
    return (
      <div className="main-content">
        <TaskPage tasks={this.props.tasks} onCreateTask={this.onCreateTask} onStatusChange={this.onStatusChange}/>
      </div>
    )
  }
}
export default connect(mapStateToProps)(App);