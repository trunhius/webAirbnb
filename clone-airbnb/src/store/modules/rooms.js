import { getRoomDetailAPI, getRoomListByLocationAPI, bookingRoomAPI } from "../../api/rooms";
const state = () => {
  return {
    roomList: [],
    roomDetail: {},
  };
};

const mutations = {
  setRoomListMutation(state, payload) {
    state.roomList = payload;
  },
  setRoomDetailMutation(state, payload) {
    state.roomDetail = payload;
  },
};

const actions = {
  async getRoomListAction(context, payload) {
    const data = await getRoomListByLocationAPI(payload);
    context.commit("setRoomListMutation", data);
  },
  async getRoomDetailAction({ commit }, payload) {
    const roomDetail = await getRoomDetailAPI(payload);
    commit("setRoomDetailMutation", roomDetail);
  },
  async bookingRoomAction({commit}, {data}){
    const res = await bookingRoomAPI(data);
    alert("Đặt phòng thành công")
    console.log(res);
    console.log(commit);
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
