import Vue from "vue";
import Vuex from "vuex";

import Account from "./user";
import Rooms from "./room.js";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        account: Account,
        rooms: Rooms
    }
});
