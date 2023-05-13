import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Blog from "../views/Blog.vue";
import Rooms from "../views/Rooms.vue";
import RoomDetail from "../views/RoomDetail.vue";
import Contect from "../views/Contect.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import Booking from "../views/Booking.vue";
import UserProfile from "../views/UserProfile.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/rooms/:locationId",
    name: "Rooms",
    component: Rooms,
  },
  {
    path: "/room-detail/:roomId",
    name: "RoomDetail",
    component: RoomDetail,
  },
  {
    path: "/contect",
    name: "Contect",
    component: Contect,
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/booking/:roomId",
    name: "Booking",
    component: Booking,
  },
  {
    path: "/user-profile/:userId",
    name: "UserProfile",
    component: UserProfile,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "current",
});

export default router;
