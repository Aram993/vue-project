import { createRouter, createWebHistory } from "vue-router";
import FirstComponent from "./components/FirstComponent.vue";
import MainPage from "./pages/MainPage.vue";
import ProfilePage from "./pages/ProfilePage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', component: MainPage
        },
        {
            path: '/profile', component: ProfilePage
        }
    ],

    linkActiveClass: "active"
})

export default router;