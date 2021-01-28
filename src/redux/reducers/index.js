
import { CREATE_TASK, EDIT_TASK, FETCH_TASKS_SUCCEEDED } from "../constants";


const tasks = (state = { tasks: [] }, action) => {
  switch (action.type)
  {
    case CREATE_TASK:
      return {
        tasks: state.tasks.concat(action.payload)
      };
    case EDIT_TASK:
      const { payload } = action;
      return {
        tasks: state.tasks.map(task => {
          if (task.id === payload.id)
          {
            return Object.assign({}, task, payload.params)
          }
          return task
        })
      };
    case FETCH_TASKS_SUCCEEDED:
      return {
        tasks: action.payload.tasks
      }
    default:
      return state;
  }
}
export default tasks