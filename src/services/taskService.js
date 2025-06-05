import $axios from "@/utils/customAxios"

export function taskService() {
    async function getTasks() {
        try {
            const response = await $axios.get("/tasks");
            return response.data
        } catch(err) {
            throw err
        }
    }

    async function editTaskDone (id, taskIsDone) {
        try {
            const response = await $axios.patch(`/tasks/${id}`, {isDone: !taskIsDone})
            return response.data
        } catch (err) {
            throw err
        }
    }

    async function addTask (task) {
        try {
            const response = await $axios.post("/tasks", task)
            return response.data
        } catch (err) {
            throw err
        }
    }

    async function removeTask (id) {
        try {
            const response = await $axios.delete(`/tasks/${id}`)
            return response.data
        } catch (err) {
            throw err
        }
    }

    async function taskEdit (id, task) {
        try {
            const response = await $axios.put(`/tasks/${id}`, task)
            return response.data
        } catch (err) {
            throw err
        }
    }

    return {
        getTasks, editTaskDone, addTask, removeTask, taskEdit
    }
}