import axios from "axios"

const $axios = axios.create({
    baseURL: "https://76f6f1ff0891.vps.myjino.ru/api",
    withCredentials: true
})

export default $axios;