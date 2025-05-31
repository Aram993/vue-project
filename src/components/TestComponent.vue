<template>
    <div>{{ props.name }}</div>
    <div>{{ title }}</div>
    <button @click="emits('sayHello')">Submit</button>
</template>
<script setup>
import { defineProps, ref, defineEmits, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps(['title', 'name']);
const emits = defineEmits(['sayHello'])

const name = ref('Peter')


onMounted(() => {
    console.log('I am mounted')
})

onBeforeUnmount(() => {
    console.log('I am before destroy')
})
</script>