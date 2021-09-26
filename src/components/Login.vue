<template>
    <div class="main">
        <div class="align">
            <div class="auth-box">
                <h1>Login</h1>
                <div class="auth-input">
                    <label>Email</label>
                    <input placeholder="Click to edit" v-model="email"/>
                </div>
                <div class="auth-input">
                    <label>Password</label>
                    <input placeholder="Click to edit" v-model="password" type="password"/>
                </div>
                <div class="auth-input">
                    <button v-on:click="login" v-bind:disabled="isLoading">Login</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "login",
    data() {
        return {
            email: "",
            password: "",
            isLoading: false
        }
    },
    beforeMount: function() {
        if (this.$store.getters.account.isLoggedIn) {
            this.$router.push("/");
        }
    },
    methods: {
        login: async function () {
            if (this.email && this.password) {
                this.isLoading = true;

                await this.$store.dispatch("LOGIN", {
                    email: this.email,
                    password: this.password
                });

                this.$router.push("/profile");
            }
        }
    },
}
</script>

<style scoped>
    .main {
        position: relative;
        height: 100%;
    }

    .align {
        height: 100%;
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .auth-box {
        width: 100%;
        max-width: 460px;
        margin: 0 20px;

        background: white;
        border: 1px solid rgba(0, 0, 0, 0.2);
        padding: 22px 28px;

        display: flex;
        flex-direction: column;
    }

    .auth-box h1 {
        font-size: 22px;
        text-align: center;
    }

    .auth-input {
        position: relative;
        display: flex;
        flex-direction: column;

        margin-top: 14px;

        
    }

    .auth-input label {
        font-size: 18px;
        margin-bottom: 6px;
    }

    .auth-input input {
        padding: 6px 8px;
        font-size: 16px;

        border: 1px solid rgba(0, 0, 0, 0.4);
    }

    .auth-input button {
        padding: 8px 0;
        border: 0;
        outline: 0;
        background-color: #283592;
        color: white;
        cursor: pointer;
        font-size: 18px;
    }

    .auth-input button:hover {
        background: RGBA(40, 53, 146, 0.7);
    }

    .auth-input button[disabled] {
        opacity: 0.4;
        cursor: wait;
    }
</style>
