<template>
    <div class="container">
        <router-link to="/login" v-if="!isAuth">Войти</router-link>
        <div v-else>
            <router-link to="/profile" class="info">{{ user.first_name }} {{ user.last_name }}</router-link>
            <div class="info" @click="logout">Выйти</div>
        </div>
    </div>
</template>
<script>
import { useUserStore } from '@/stores/userStore';
import { mapActions, mapState } from 'pinia';
import { loginService } from "@/services/loginService";

export default {
    name: "Header",
    computed: {
        ...mapState(useUserStore, ["user", "isAuth"])
    },
    methods: {
        logout() {
            this.$router.push("/");
            this.logoutUser()
        },
        ...mapActions(useUserStore, ["logoutUser"])
    }
}
</script>
<style lang="scss" scoped>
    .container {
        width: 100%;
        padding: 30px;
        background-color: #abcdef;
        display: flex;
        justify-content: flex-end;

        & > a {
            text-decoration: none;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: xx-large;
            font-weight: bolder;
            color: grey;
        }

        & > div {
            text-decoration: none;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: xx-large;
            font-weight: bolder;
            color: grey;
            display: flex;
            gap: 30px;

            & > a {
                text-decoration: none;
                color: grey;
            }
        }
    }

    .info {
        cursor: pointer;
    }
</style>