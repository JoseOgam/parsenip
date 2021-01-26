import { uniqueId } from "../actions"

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
const tasks = (state = {tasks : mockTask}, action) => {
return state
}
export default tasks