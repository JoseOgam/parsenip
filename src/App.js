import { Component } from "react";
import TaskPage from "./components/TaskPage";

const mockTask = [
   {
 id: 1,
 title: 'Learn Redux',
 description: 'The store, actions, and reducers, oh my!',
 status: 'Unstarted',
 },
 {
 id: 2,
 title: 'Peace on Earth',
 description: 'No big deal.',
 status: 'Completed',
  },
 {
 id: 3,
 title: 'Learning Redux',
 description: 'Simple Learning Curve.',
 status: 'In Progress',
 },
]

class App extends Component {
  render() {
    return (
      <div className="main-content">
        <TaskPage tasks={mockTask}/>
      </div>
    )
  }
}
export default App;