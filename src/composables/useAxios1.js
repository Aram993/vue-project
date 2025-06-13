import $axios from "@/utils/customAxios";
import { onMounted, ref } from "vue";

export function useAxios (config = {}, immediate = true) {
    const data = ref(null);
    const error = ref(null);
    const isLoading = ref(false);
    const params = ref({search: 'asd'})

    async function fetchData () {
        try {
            isLoading.value = true;
            error.value = null;
            const response = await $axios({...config, params: params.value});
            data.value = response.data.recipes;
        } catch (err) {
            error.value = err;
            throw err;
        } finally {
            isLoading.value = false;
        }
    }

    onMounted(()=> {
        if (immediate) {
            fetchData();
        }
    })

    return {
        data,
        error,
        isLoading,
        refresh: fetchData,
        params
    }
}