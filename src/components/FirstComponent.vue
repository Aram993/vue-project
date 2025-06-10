<template>
    <div>
        {{user?.name}}
    </div>
    <div>{{ JSON.stringify(user) }}</div>
    <button @click="handleSetUser">Set User</button>
    <button @click="openModal">Open Modal</button>
    <hr>
    <h1>Services</h1>
    <button :disabled="isPostsLoading" @click="getPosts">Get Posts</button>
    <button :disabled="isCommentsLaoding" @click="getComments">Get Comments</button>
    <button>Get Albums</button>
    <Modal v-if="isOpenModal" @close="closeModal" width="300px" color="red"/>
    <hr>
    {{ JSON.stringify(posts) }}
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { useUserStore } from '@/stores/userStore';
import { storeToRefs } from 'pinia';
import Modal from './Modal.vue';
import { useModal } from '@/composables/useModal';
import { useAxios } from '@/composables/useAxios';

const userStore = useUserStore();
const {user, isAuth} = storeToRefs(userStore);
const {setUser} = userStore;
const {closeModal, isOpenModal, openModal} = useModal();
const {isLoading: isPostsLoading, data: posts, execute: getPosts} = useAxios({url: '/posts', method: 'GET'}, {immediate: false});
const {isLoading: isCommentsLaoding, data: comments, execute: getComments} = useAxios({url: '/comments', method: 'GET'});

const handleSetUser = () => {
    setUser({name: 'Peter'});
}

</script>
<style lang="scss">
    
</style>