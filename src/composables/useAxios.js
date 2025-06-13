import $axios from "@/utils/customAxios";
import { onMounted, ref } from "vue";

export function useAxios (fn, immediate = true) {
    const data = ref(null);
    const error = ref(null);
    const isLoading = ref(false);

    async function fetchData () {
        try {
            isLoading.value = true;
            error.value = null;
            const response = await fn();
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
    }
}