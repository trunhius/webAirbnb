import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Booking from "../views/Booking.vue"
import Signin from "../views/SignIn.vue"
import nextt from "../../utils/next"

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    beforeEnter(to, from, next){
      console.log(to, from, next)
     const {user} = JSON.parse(localStorage.getItem("userLogin"))
     if(user.type === "ADMIN"){
      next()
     }else{
      next("/")
      alert("Bạn Không có quyền truy cập vào trang quản trị")
     }
    }
  },
  {
    path: "/booking",
    name: "Booking",
    component: Booking,
  },
  {
    path: "/",
    name: "Signin",
    component: Signin,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
