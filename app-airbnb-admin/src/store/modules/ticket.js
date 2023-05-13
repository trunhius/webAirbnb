
import {getAllticketAPI} from "../../api/ticket";
import {formatDate} from "../../utils/format-date"
const state = () => {
    return {
        ticketList: []
    };
};

const mutations = {
    setTicketListMutations(state, payload){
        state.ticketList = payload.map((item) => ({
            ...item,
            checkIn: formatDate(item.checkIn),
            checkOut: formatDate(item.checkOut)
        }));
    }
};

const actions = {
    async getAllTicketAction({commit}){
        const data = await getAllticketAPI()
        commit("setTicketListMutations", data)
    }
};

export default{
    namespaced: true,
    state,
    mutations,
    actions,
}