import { createStore } from "vuex";
import ticket from "./modules/ticket"
import auth from "./modules/auth"
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    ticket,
    auth 
  },
});
