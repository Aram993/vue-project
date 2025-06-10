<template>
    <div class="modal" :style="{backgroundColor: color, width}">
        <div>Some ModalWindow</div>
        <button @click="emits('close')">Close</button>
    </div>

</template>
<script setup>
const emits = defineEmits(['close']);
const props = defineProps(['width', 'color'])
</script>
<style>
.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: black;
    color: white;
    width: 300px;
    height: 300px;
}
</style>