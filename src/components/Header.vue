<template>
    <div class="wrapper">
        <router-link to="/">Main</router-link>   
    </div>
</template>
<script setup>

</script>
<style lang="scss" scoped>
    .wrapper {
        width: 100%;
        padding: 40px;
        background-color: #fed;
    }

    a {
        text-decoration: none;
        color: blueviolet;

        &.active {
            text-decoration: underline;
        }
    }
</style>