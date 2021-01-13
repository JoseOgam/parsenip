import { Component } from "react";
import { connect } from "react-redux";
import TaskPage from "./components/TaskPage";

const mapStateToProps = (state) => {
  return ({
    tasks : state.tasks
  })
}


class App extends Component {
  render() {
    return (
      <div className="main-content">
        <TaskPage tasks={this.props.tasks}/>
      </div>
    )
  }
}
export default connect(mapStateToProps)(App);