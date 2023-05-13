
import {signIngAPI} from '../../api/auth';
const state = ()=>{
    return{
        userLogin:{}
    }
};
const mutations = {
    setUserLoginMutation(state, payload){
        state.userLogin = payload;
        localStorage.setItem("userLogin", JSON.stringify(payload))
    },
    setUserLoginFromLocalStorage(state, payload){
        state.userLogin = payload;
    }
};
const actions = {
    async signInAction({commit}, {data, router}){
        try{
            const userLogin = await signIngAPI(data)
            router.push("/dashboard")
            commit("setUserLoginMutation", userLogin)
        }catch(error){
            alert("Tài khoảng hoặc mật khẩu không chính xác")
        }
    },
    loadUserLoginFromLocalStorageAction({commit}){
        let userLogin = {}
        if(localStorage.getItem("userLogin")){
            userLogin = JSON.parse(localStorage.getItem("userLogin"))
        }
        commit("setUserLoginFromLocalStorage",userLogin)
    }

}
export default{
    namespaced: true,
    state,
    mutations,
    actions
}