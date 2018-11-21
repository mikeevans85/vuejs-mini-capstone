import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Show from "./views/Show.vue";
import NewQuilt from "./views/NewQuilt.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import LogoutMessage from "./views/LogoutMessage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/:id",
      name: "show",
      component: Show
    },
    {
      path: "/newquilt",
      name: "newquilt",
      component: NewQuilt
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout
    },
    {
      path: "/logoutMessage",
      name: "logoutmessage",
      component: LogoutMessage
    }
  ]
});
