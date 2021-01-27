import { CREATE_TASK, EDIT_TASK } from "../constants";

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