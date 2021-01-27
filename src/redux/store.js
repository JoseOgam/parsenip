import { createStore } from 'redux'
import tasks from './reducers'
const store = createStore(tasks)

export default store