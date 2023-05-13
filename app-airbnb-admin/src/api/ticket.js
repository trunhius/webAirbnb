import axiosAPI from "."

export const getAllticketAPI = ()=> {
   return axiosAPI.get("/api/tickets")
}