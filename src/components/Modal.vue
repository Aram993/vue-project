<template>
    <div class="modalBackground" @click="emits('closeModal')">
        <div class="modalActive" @click.stop>
            <div class="modalClose">
                <img src="../assets/images/close.png" @click="emits('closeModal')"/>
            </div>
            <div class="modalWindow">
                <div>
                    <span class="taskName">Название задачи:</span>
                    <input type="text" class="taskInput" v-model="name">
                </div>
                <div>
                    <span class="taskName">Дата создания:</span>
                    <input type="date" class="taskInput" v-model="date">
                </div>
                <div class="radioBtns">
                    <span class="taskName"> Задача Выполнена:</span>
                    <div class="wrap">
                        <div class="radioWrap">
                            <input type="radio" id="choice1" name="contact" value="Да" :checked="taskDone" @click="done = true"/>
                            <label for="Choice1">Да</label>
                        </div>
                        <div class="radioWrap">
                            <input type="radio" id="choice2" name="contact" value="Нет" :checked="!taskDone" @click="done = false"/>
                            <label for="choice2">Нет</label>
                        </div>
                    </div>
                </div>
                <button @click="editOfTask">Отправить</button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { taskService } from '@/services/taskService';
const {taskEdit} = taskService()

    const props = defineProps(["taskName", "taskDate", "taskDone", "taskId"]);
    const emits = defineEmits(["closeModal", "edit"]);

    const name = ref(props.taskName);
    const date = ref(props.taskDate);
    const done = ref(props.taskDone);

    async function editOfTask () {
        if (name.value.length) {
            const result = await taskEdit(props.taskId, {name: name.value, date: date.value, isDone: done.value});
            emits("edit", result);
            emits("closeModal");
        } else {
            alert("Введите название задачи!");
        }
    }
</script>
<style lang="scss" scoped>
    /* убираем нижний ползунок прокрутки */
body {
    overflow-x: hidden;
}

/* фон нашего модального окна */
.modalBackground {
    // display: none;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    width: 100%;
    height: 100%;
    cursor: pointer;
    /* указываем z-индекс для корректного наслаивания */
    z-index: 1;
}

/* позиционирование самого модального окна */
.modalActive {
    position: absolute;
    width: 650px;
    height: 495px;
    top: calc(50% - 250px);
    left: calc(50% - 175px);
    border-radius: 10px;
    background-color: rgb(255, 255, 255);
    cursor: default;
    padding: 40px 20px;
}

/* кнопочка закрытия модального окна */
.modalClose {
    font-family: var(--font-regular);
    position: absolute;
    right: 5px;
    top: 5px;
    width: 30px;
    height: 30px;
    cursor: pointer;
}

/* сама картинка кнопочки закрытия */
.modalClose img {
    margin: 3px;
    width: 24px;
    height: 24px;
}

/* делаем позиционирование внутренних элементов относительно модального окна */
.modalWindow {
    position: relative;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1px solid green;
    height: 100%;

    & > div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    & > button {
        width: 250px;
        height: 40px;
        cursor: pointer;
    }
}

.taskName {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: xx-large;
    font-weight: bolder;
    font-style: italic;
}

.taskInput {
    height: 36px;
    width: 250px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: x-large;
    font-weight: bolder;
    font-style: italic;
}

.radioBtns {
    width: 100%;
    display: flex;
}

.wrap {
    display: flex;
    gap: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: xx-large;
    font-weight: bolder;
    font-style: italic;
}

#choice1 {
    width: 30px;
    height: 30px;
    cursor: pointer;
}

#choice2 {
    width: 30px;
    height: 30px;
    cursor: pointer;
}

.radioWrap {
    display: flex;
    gap: 5px;
}

</style>