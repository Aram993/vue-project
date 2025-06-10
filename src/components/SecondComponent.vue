<template >
    <div>
        <hr>
        <button @click="openModal">Close Second Modal</button>
    </div>
    <Modal v-if="isOpenModal" @close="closeModal" width="100px" color="yellow"/>
</template>
<script setup>
import { useModal } from '@/composables/useModal';
import Modal from './Modal.vue';

const {closeModal, isOpenModal, openModal} = useModal();
</script>
<style lang="">
    
</style>