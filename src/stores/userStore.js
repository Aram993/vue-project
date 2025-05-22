import { defineStore } from "pinia";
import { loginService } from "@/services/loginService";
const {login} = loginService()

export const useUserStore = defineStore("user", {
    state: () => ({
        user: null,
    }),

    getters: {
        isAuth: (state) => {
            return !!state.user
        }
    },

    actions: {
        async loginUser (userEmail, userPassword) {
            const updatedUser = await login(userEmail, userPassword);
            this.user = updatedUser.user;
            localStorage.setItem("authToken", updatedUser.access_token)
        }
    }
})