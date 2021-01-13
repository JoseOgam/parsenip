const mockTask = [
   {
 id: 1,
 title: 'Learn Redux',
 description: 'The store, actions, and reducers, oh my!',
 status: 'Unstarted',
 },
 {
 id: 2,
 title: 'Create React App',
 description: 'built the primary components',
 status: 'Completed',
  },
 {
 id: 3,
 title: 'Learning Redux',
 description: 'Simple Learning Curve.',
 status: 'In Progress',
 },
]
const tasks = (state = {tasks : mockTask}, action) => {
return state
}
export default tasks