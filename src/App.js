import { Component } from "react";
import { connect } from "react-redux";
import { createTask } from "./actions";
import TaskPage from "./components/TaskPage";

const mapStateToProps = (state) => {
  return ({
    tasks : state.tasks
  })
}


class App extends Component {
  render() {
    // console.trace(`props from App : `, this.props)
    const onCreateTask = ({ title, description }) => {
      this.props.dispatch(createTask({title, description}))
    }
    return (
      <div className="main-content">
        <TaskPage tasks={this.props.tasks} onCreateTask={onCreateTask}/>
      </div>
    )
  }
}
export default connect(mapStateToProps)(App);