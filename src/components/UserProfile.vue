<template>
    <div>
       {{ user.email }} 
    </div>
</template>
<script>
import { loginService } from '@/services/loginService';
const {userProfile} = loginService()
export default {
    name: "UserProfile",
    data() {
        return {
            user: {},
            isLoading: true
        }
    },
    methods: {
        async getProfile() {
            try {
                const profile = await userProfile();
                this.user = profile;
            } finally {
                this.isLoading = false;
            }
        }
    },
    created() {
        this.getProfile()
    }

}
</script>
<style lang="scss">
    
</style>