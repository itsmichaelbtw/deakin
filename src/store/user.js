const cvs = {
    token: "94a08da1fecbb6e8b46990538c7b50b2",
};

export default {
    state: {
        account: {}
    },
    getters: {
        account: state => state.account
    },
    mutations: {
        addSession: (state, data) => {
            state.account = data;
        },
        removeSession: (state) => {
            state.account = {}
        }
    },
    actions: {
        LOGIN: (_, payload) => {
            return new Promise((resolve) => {
                setTimeout(function() {
                    const data = {
                        ...cvs,
                        avatar: "https://avatar.reflyui.cc/avatar.png?name=" + payload.email,
                        email: payload.email,
                        password: payload.password,
                        isLoggedIn: true
                    };

                    _.commit("addSession", data);

                    resolve();
                }, 750);
            });
        },
        REGISTER: (_, payload) => {
            return new Promise((resolve) => {
                setTimeout(function() {
                    const data = {
                        ...cvs,
                        avatar: "https://avatar.reflyui.cc/avatar.png?name=" + payload.email,
                        email: payload.email,
                        password: payload.password,
                        isLoggedIn: true
                    };

                    _.commit("addSession", data);

                    resolve();
                }, 750);
            });
        },
        LOGOUT: (_) => {
            _.commit("removeSession");
        }
    }
};
