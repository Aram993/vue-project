<template>
    <button @click="incrementAndCheck">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: "NewButton",
    emits: [],
    methods: {
        
    }
}
</script>
<style lang="scss" scoped>
    button {
        width: 200px;
        height: 40px;
        border-radius: 10px;
        cursor: pointer;
        background-color: #abc;
        border: none;
        color: bisque;
        font-weight: bolder;
        font-size: 20px;
    }
</style>