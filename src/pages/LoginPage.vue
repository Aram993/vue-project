<template>
    <fieldset>
        <legend>Введите Ваши данные</legend>
        <h1>TOKEN: {{ accessToken }}</h1>
        <div class="userInfo">
            <label for="login">Логин:</label>
            <input type="email" id="login" v-model="login">
        </div>
        <div class="userInfo">
            <label for="pass">Пароль:</label>
            <input type="password" id="pass" v-model="password">
        </div>
        <button @click="loginPerson">Отправить</button>
    </fieldset>
</template>
<script>
import { useUserStore } from '@/stores/userStore';
import { mapActions, mapState } from 'pinia';

export default {
    name: "LoginPage",
    data() {
        return {
            login: "example@mail.com",
            password: "P@ssw0rd123",
            someAuth: false
        }
    },
    computed: {
        accessToken() {
            return this.someAuth ? localStorage.getItem('authToken') : localStorage.getItem('authToken');
        },
          ...mapState(useUserStore, ["isAuth"])
    },
    methods: {
        async loginPerson() {
            const symbols = ["@", "."];
            let counter = 0;
            if (this.login && this.password) {
                for (let i = 0; i < this.login.length; i++) {
                    if (symbols.includes(this.login[i])) {
                        counter++
                    }
                }

                if (counter === 2) {
                    await this.loginUser(this.login, this.password);
                     this.login = "";
                    this.password = "";
                    this.someAuth = true;
                    this.$router.push('/')
                
                } else {
                    return alert("Логин должен содержать символ @ и символ .");
                }
            } else {
                return alert("Заполните поля ввода!");
            }
        },

        ...mapActions(useUserStore, ["loginUser"])
    }
}
</script>
<style lang="scss" scoped>
    fieldset {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: xx-large;
        font-weight: bolder;
        color: grey;
        border: 1px solid black;
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        gap: 30px;

        & > button {
            width: 200px;
            height: 30px;
            background-color: transparent;
            border-radius: 10px;

            &:hover {
                cursor: pointer;
            }
        }
    }

    .userInfo {
        display: flex;


        & > label {
            width: 200px;
        }

        & > input {
            outline: none;
            border: 2px solid black;
            background-color: transparent;
            font-weight: bolder;
        }
    }

    .info {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 50px;
        font-weight: bolder;
        color: red;
    }
</style>