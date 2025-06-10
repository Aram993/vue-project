import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUserStore = defineStore('user', () => {
    const user = ref(null);

    const isAuth = computed(() => !!user.value);

    const setUser = (userData) => {
        user.value = userData;
    }


    return {
        user,
        isAuth,
        setUser
    }
})