export const nextt = beforeEnter = (to, from, next) => {
   const {user} = JSON.parse(localStorage.getItem("userLogin"))
   if(user.type === "ADMIN"){
    next()
   }else{
    next("/")
    alert("Bạn Không có quyền truy cập vào trang quản trị")
   }
  }