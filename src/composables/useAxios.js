import $axios from "@/utils/customAxios";
import { onMounted, ref } from "vue";

export function useAxios(config = {}, options = {immediate: true}) {
    const data = ref(null);
    const error = ref(null);
    const isLoading = ref(false);

    const execute = async () => {
        isLoading.value = true;
        error.value = null;

        try{
            const response = await $axios({...config});
            data.value = response.data;
            return response;
        }catch(err) {
            error.value = err;
            data.value = null;
            throw err;
        }finally {
            isLoading.value = false;
        }
    }

    if(options.immediate) {
        onMounted(() => {
            execute();
        })
    }


    return {
        data,
        error,
        isLoading,
        execute
    }
}