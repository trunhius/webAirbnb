
import axiosAPI from "."

export const signIngAPI = (userLogin)=>{
  return  axiosAPI.post("/api/auth/login", userLogin)
}