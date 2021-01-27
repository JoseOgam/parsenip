import { uniqueId } from "../actions"
import { CREATE_TASK, EDIT_TASK } from "../constants";

const mockTask = [
   {
 id: uniqueId(),
 title: 'Learn Redux',
 description: 'The store, actions, and reducers, oh my!',
 status: 'Unstarted',
 },
 {
 id: uniqueId(),
 title: 'Create React App',
 description: 'built the primary components',
 status: 'Completed',
  },
 {
 id: uniqueId(),
 title: 'Learning Redux',
 description: 'Simple Learning Curve.',
 status: 'In Progress',
 },
]
const tasks = (state = { tasks: mockTask }, action) => {
  switch (action.type)
  {
    case CREATE_TASK:
      return {
        tasks: state.tasks.concat(action.payload)
      };
    case EDIT_TASK:  
    const { payload } = action;
    return {
      tasks: state.tasks.map(task =>{
        if (task.id === payload.id)
        {
          return Object.assign({}, task, payload.params)
        }
        return task
   } )
  }
    default:
      return state;
  }
}
export default tasks