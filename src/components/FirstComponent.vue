<template>
    <div>{{name}}</div>
    <div>{{age}}</div>
    <div>{{doubleAge}}</div>
    <button @click="changeName">Change</button>
    <button @click="changeReactive">Change reactive</button>
    <hr>
    <div>Year: {{ year }}</div>
    <hr>
    <div>{{ form.name }}</div>
    <div>{{ form.password }}</div>
    <br>
    <input v-model="form.password" ref="inputElement" type="text" placeholder="type">
    <input v-model="form.name" type="text" placeholder="type">
    <input v-model="age" type="text" placeholder="type">
    <hr>
    <TestComponent :name="form.name" title="Some title" @say-hello="sayHello"/>
</template>
<script setup>
import { ref, reactive, computed, watch, onMounted } from 'vue';
import TestComponent from './TestComponent.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const name = ref('Aram');
const age = ref(30);
const form = reactive({
    name: 'Aram',
    password: ''
})
const inputElement = ref(null);


const doubleAge = computed(() => {
    return age.value * 2;
})

const dobleName =  (() => {
    return name.value + name.value;
})


const year = new Date().getFullYear();

const changeName = () => {
   name.value = 'Peter';
   age.value++;

   console.log(inputElement.value);
}

const changeReactive = () => {
    form.name = 'ahahah'
    form.password = 'ohoho'
}

const sayHello = () => {
    alert('Hello');
}

// watch(age, (newValue, oldValue) => {
//     if(newValue === 32) {
//         alert(32)
//     }
// })

// watch([age, name], (newValue, oldValue) => {
//     console.log(newValue)
//     console.log(oldValue)
// })

onMounted(() => {
    console.log(route)
})

</script>
<style lang="scss">
    
</style>