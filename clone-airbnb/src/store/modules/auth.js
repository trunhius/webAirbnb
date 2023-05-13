import {singUpAPI} from '../../api/auth';
import {signIngAPI} from '../../api/auth';
const state = ()=>{
    return{
        userRegister: {},
        userLogin:{}
    }
};
const mutations = {
    setUserRegisterMutation(state, payload){
        state.userRegister = payload; 
    },
    setUserLoginMutation(state, payload){
        state.userLogin = payload;
        localStorage.setItem("userLogin", JSON.stringify(payload))
    },
    setUserLoginFromLocalStorage(state, payload){
        state.userLogin = payload;
    }
};
const actions = {
    async singnUpAction({commit}, {data, router} ){
        const userRegister = await singUpAPI(data);
        router.push("/sign-in")
        commit("setUserRegisterMutation", userRegister)
    },
    async signInAction({commit}, {data, router}){
        try{
            const userLogin = await signIngAPI(data)
            router.push("/")
            commit("setUserLoginMutation", userLogin)
            alert("Đăng nhập thành công")
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