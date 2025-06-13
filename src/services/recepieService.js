import $axios from "@/utils/customAxios"

const recepieService = () => {
    const getRecepies = async(params) => {
        try{
            const {data} = await $axios({url: "/recipes/search", method: "GET", params});
            return data;
        }catch(err) {
            throw err;
        }
    }


    return {
        getRecepies
    }
}

export default recepieService;