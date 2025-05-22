import axios from "axios"
import { notify } from "./notification";

const $axios = axios.create({
    baseURL: "https://76f6f1ff0891.vps.myjino.ru/api",
    withCredentials: true
})


$axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("authToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

$axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.status !== 401) {
    const message = error.response.data?.message || "Server error"
    notify(message, "error")
  }
  
  return Promise.reject(error);
});

export default $axios;