import Vue from "vue";
import Vuex from "vuex";

// import vuex stores

import Account from "./user";
import Rooms from "./room.js";

// tell vue that we are using vuex

Vue.use(Vuex);

// set the vuex modules

export default new Vuex.Store({
    modules: {
        account: Account,
        rooms: Rooms
    }
});
