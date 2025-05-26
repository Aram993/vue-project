<template>
    <button @click="incrementAndCheck">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: "NewButton",
    emits: ["incrementNumber", "checkAnswer"],
    methods: {
        incrementAndCheck () {
            this.$emit('incrementNumber');
            this.$emit('checkAnswer');
        }
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