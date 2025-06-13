import { createRouter, createWebHistory } from "vue-router";
import FirstComponent from "./components/FirstComponent.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", component: FirstComponent}
    ],

    linkActiveClass: "active"
})

export default router;