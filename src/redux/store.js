import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import tasks from './reducers'
const store = createStore(tasks, devToolsEnhancer())

export default store