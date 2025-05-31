<template >
    <div>
        Profile
    </div>
    <button @click="router.push('/')">Go to main page</button>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>
<style lang="scss">
    
</style>