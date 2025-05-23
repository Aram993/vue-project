import { defineStore } from "pinia";
import { loginService } from "@/services/loginService";
const {login, userProfile} = loginService()

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
        },

        async getUser() {
            const userData = await userProfile();
            this.user = userData;
        },      
        
        logoutUser() {
            this.user = null;
            localStorage.removeItem("authToken");
        }
    }
})