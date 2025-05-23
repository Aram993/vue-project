import { createRouter, createWebHistory } from "vue-router";
import MainPage from "./pages/MainPage.vue";
import LoginPage from "./pages/LoginPage.vue";
import UserProfile from "./components/UserProfile.vue";
import { useUserStore } from "./stores/userStore";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", component: MainPage, alias: "/"},
        {path: "/login", component: LoginPage},
        {path: "/profile", component: UserProfile, meta: {isPrivate: true}}
    ],

    linkActiveClass: "active"
})

router.beforeEach((to, from, next) => {
    const store = useUserStore();
    if (to.meta.isPrivate && !store.isAuth) {
        next("/")
    } else {
        next()
    }
})

export default router;