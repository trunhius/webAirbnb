
import axiosAPI from "."

export const singUpAPI = (userRegister)=>{
  return  axiosAPI.post("/api/auth/register", userRegister)
}

export const signIngAPI = (userLogin)=>{
  return  axiosAPI.post("/api/auth/login", userLogin)
}