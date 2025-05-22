import $axios from "@/utils/customAxios"

export function loginService () {
    async function login (userEmail, userPassword) {
        try {
            const response = await $axios.post("/auth/login", {email: userEmail, password: userPassword});
            return response.data;
        } catch (err) {
            throw err
        }
    }

    async function userProfile() {
        try {
            const response = await $axios.get("/user/profile");
            return response.data
        } catch (err) {
            throw err
        }

    }
    

    return {
        login, userProfile
    }
}