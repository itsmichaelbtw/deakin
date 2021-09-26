import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import Store from "./store/store";

import Main from "./components/Main";
import Login from "./components/Login";
import Register from "./components/Register";
import Search from "./components/Search";
import Contact from "./components/Contact";
import Profile from "./components/Profile"
import CreateRoom from "./components/CreateRoom";

import "./assets/main.css";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
      {
            path: "/",
            component: Main,
      },
      {
            path: "/login",
            component: Login,
      },
      {
            path: "/register",
            component: Register,
      },
      {
            path: "/search",
            component: Search
      },
      {
            path: "/contact",
            component: Contact
      },
      {
            path: "/profile",
            component: Profile
      },
      {
            path: "/create-room",
            component: CreateRoom
      },
      {
            name: "view-room",
            path: "/view-room/:id",
            props: true,
            component: () => import("./components/Room.vue"),
      }
];

const Router = new VueRouter({
      mode: "history",
      routes: routes,
      base: "/"
});

new Vue({
      router: Router,
      store: Store,
      render: h => h(App),
}).$mount('#app');
