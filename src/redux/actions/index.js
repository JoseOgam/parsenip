import axios from "axios";
import { CREATE_TASK, EDIT_TASK, FETCH_TASKS_SUCCEEDED } from "../constants";

let _id = 1;

export function uniqueId() {
    return _id++
}
export function createTask({ title, description }) {
    return {
        type: CREATE_TASK,
        payload: {
            id: uniqueId(),
            title,
            description,
            status: 'Completed'
        }
    }
}

export function editTask(id, params = {}) {
    return {
        type: EDIT_TASK,
        payload: {
            id,
            params
        }
    }
}

export function fetchTasksSucceeded(tasks) {
    return {
        type: FETCH_TASKS_SUCCEEDED,
        payload: {
            tasks
        }
    }
}

export function fetchTasks() {
    return dispatch => {
        axios.get('http://localhost:3001/tasks').then(resp =>
        dispatch(fetchTasksSucceeded(resp.data)))
    }
}