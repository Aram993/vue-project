<template>
    <div class="container">
        <!-- <input type="text" @input="getLetters" :value="recipe"> -->
        <input type="text" v-model="recipe">
    </div>
</template>
<script setup>
import { ref, watch } from 'vue';
const recipe = ref("asd");
import { useAxios } from '@/composables/useAxios';
import { onMounted } from 'vue';
import debounce from '@/utils/debounce';
import recepieService from '@/services/recepieService';

const {getRecepies} = recepieService();
const {data, error, isLoading, refresh: getRecipes} = useAxios(() => getRecepies({q: recipe.value}));

const debouncedGetRecepies = debounce(() => getRecipes(), 1000);

// function getLetters(event) {
//     recipe.value = event.target.value;
//     params.value = {...params.value, q: recipe.value};
//     // params.value = Object.assign(params.value,  {q: recipe.value})
//     debouncedGetRecepies(); 
  
// }

watch(recipe, (newVal) => {
     debouncedGetRecepies();
})

</script>
<style lang="scss">
    .container {
        margin: 200px;
        display: flex;

        & > input {
            width: 500px;
            height: 30px;
            outline: none;
        }

        & > button {
            width: 100px;
            cursor: pointer;
        }
    }
</style>