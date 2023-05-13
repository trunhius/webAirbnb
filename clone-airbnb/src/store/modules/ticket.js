import {getTicketListByUserAPI} from "../../api/ticket"
const state = () => {
  return {
    roomsByUser: [],
  };
};

const mutations = {
    setTicketListByUserMutation(state, payloat){
        const data = payloat.map((item)=>({
            _id: item.id,
            checkIn: item.checkIn,
            checkOut: item.checkOut,
            ...item.roomId
        }))
        state.roomsByUser = data;
    }
};
const actions = {
    async getTicketListByUserAction({commit}, payload) {
      const data = await getTicketListByUserAPI(payload);
      commit("setTicketListByUserMutation", data);
    },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
