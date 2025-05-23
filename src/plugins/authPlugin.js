import { useUserStore } from "@/stores/userStore";

export default {
   async install() {
        const store = useUserStore();
        await store.getUser();
    }
}