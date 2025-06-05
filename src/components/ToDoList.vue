<template>
    <Modal
        :task-name="modalName"
        :task-date="modalDate"
        :task-done="isModalDone"
        :taskId="idOfTask"
        @close-modal="closeModal"
        @edit="onEditTask"
        v-if="isShownModal"
    />
    <div class="container">
        <div class="wrap">
            <div class="left-side">
                <label for="taskName">Введите название задачи:</label>
                <input type="text" id="taskName" v-model="taskName">
                <button @click="addTaskToList({name: taskName, date: convertDate(), isDone: false})">Отправить</button>
            </div>
            <div class="right-side">
                <h2>Список задач:</h2>
                <div class="task" v-for="task in tasks" :key="task.id">
                    <span class="task-date">{{ task.date }}</span>
                    <p class="task-name">
                        <span :class="{'line': task.isDone}">{{ task.name }}</span>
                        <input type="checkbox" :checked="task.isDone" @click="editTaskDoneValue(task.id, task.isDone)">
                    </p>
                    <div class="buttons">
                        <button @click="editTask(task.name, task.date, task.isDone, task.id)">Изменить</button>
                        <button @click="deleteTask(task.id)">Удалить</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { taskService } from '@/services/taskService';
import Modal from './Modal.vue';
import { convertDate } from '@/utils/converter';
const {getTasks, editTaskDone, addTask, removeTask} = taskService();

    const tasks = ref([]);
    const taskName = ref("");
    let isShownModal = ref(false);
    let modalName = ref("");
    let modalDate = ref("");
    let isModalDone = ref(false);
    let idOfTask = ref(null);

    function editTask (nameOfTask, dateOfTask, isTaskDone, id) {
        isShownModal.value = true;
        modalName.value = nameOfTask;
        modalDate.value = dateOfTask;
        isModalDone.value = isTaskDone;
        idOfTask.value = id;
    }

    function closeModal () {
        isShownModal.value = false;
    }

    function onEditTask (result) {
        for (let i = 0; i < tasks.value.length; i++) {
            if (tasks.value[i].id === idOfTask.value) {
                tasks.value[i] = result
            }
        }
    }

    async function renderTasks () {
        tasks.value = await getTasks();
    }

    async function editTaskDoneValue (id, taskIsDone) {
        const result = await editTaskDone(id, taskIsDone);
        tasks.value.forEach(item => {
            if (item.id === result.id) {
                item.isDone = result.isDone;
            }
        })
    }

    async function addTaskToList (task) {
        if (taskName.value.length) {
            const result = await addTask(task);
            tasks.value.push(result);
        } else {
            alert("Заполните поле ввода!");
        }
        taskName.value = "";
    }

    async function deleteTask (id) {
        const result = await removeTask(id);
        tasks.value = tasks.value.filter(item => {
            return item.id !== id
        })
    }

    onMounted(()=> {
        renderTasks()
    })
</script>
<style lang="scss" scoped>

    .container {
        padding: 100px;
    }
    .wrap {
        width: 100%;
        height: 700px;
        border: 2px solid black;
        padding: 100px;
        display: flex;
    }

    .left-side {
        display: flex;
        flex-direction: column;
        gap: 30px;
        align-items: center;
        width: 50%;

        & > label {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: xx-large;
            font-weight: bolder;
            font-style: italic;
        }

        & > input {
            width: 80%;
            height: 40px;
            padding-left: 20px;
        }

        & > button {
            width: 300px;
            height: 30px;
            border-radius: 10px;
            cursor: pointer;
        }
    }

    .right-side {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;

        & > h2 {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: xx-large;
            font-weight: bolder;
            font-style: italic;
            margin-bottom: 30px;
        }

        & > .task {
            display: flex;
            justify-content: space-between;
            padding: 5px;
            width: 100%;
            height: 40px;
            background-color: #fff;
            border: 1px solid black;
            margin-bottom: 20px;
        }
    }

    .task-date {
        display: flex;
        align-items: center;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: x-large;
        font-weight: bolder;
        font-style: italic;
    }

    .task-name {
        width: 330px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 15px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: x-large;
        font-weight: bolder;
        font-style: italic;

        & > input {
            width: 28px;
            height: 28px;
            cursor: pointer;
        }
    }

    .buttons {
        display: flex;
        justify-content: space-between;
        width: 210px;

        & > button {
            width: 100px;
            cursor: pointer;
        }
    }

    .line {
        text-decoration: line-through;
    }

</style>