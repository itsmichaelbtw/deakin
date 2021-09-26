// declare libs

import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import Store from "./store/store";

// delcare custom comps

import Main from "./components/Main";
import Login from "./components/Login";
import Register from "./components/Register";
import Search from "./components/Search";
import Contact from "./components/Contact";
import Profile from "./components/Profile"
import CreateRoom from "./components/CreateRoom";

// import css

import "./assets/main.css";

Vue.config.productionTip = false;

// tell vue to use the vuerouter lib

Vue.use(VueRouter);

// create an array of all urls my application uses and what component to use

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

      // dynamic links with a lazy load import

      {
            name: "view-room",
            path: "/view-room/:id",
            props: true,
            component: () => import("./components/Room.vue"),
      }
];

// create the router and pass through the routes

const Router = new VueRouter({
      mode: "history",
      routes: routes, 
      base: "/"
});

// start the vue application

new Vue({
      router: Router,
      store: Store,
      render: h => h(App),
}).$mount('#app');
