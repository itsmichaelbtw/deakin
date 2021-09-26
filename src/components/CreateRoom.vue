<template>
    <div class="main">
        <div class="align">
            <div class="room-box">
                <h1>Create room</h1>
                <div class="room-input">
                    <label>Room name</label>
                    <input placeholder="Click to edit" v-model="name"/>
                </div>
                <div class="room-input">
                    <label>Environment</label>
                    <select v-model="environment">
                        <option value="Sunset">Sunset</option>
                        <option value="Sunrise">Sunrise</option>
                        <option value="Winter">Winter</option>
                        <option value="Summer">Summer</option>
                        <option value="Forest">Forest</option>
                        <option value="Windy">Windy</option>
                    </select>
                </div>
                <div class="room-input">
                    <label>Duration (in minutes)</label>
                    <input placeholder="Click to edit" type="number" value="1" v-model="duration"/>
                </div>
                <div class="room-input">
                    <label>Video link</label>
                    <input placeholder="Click to edit" type="string" v-model="link"/>
                </div>
                <div class="room-input">
                    <button v-on:click="create" v-bind:disabled="isLoading">Create room</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "create-room",
    data() {
        return {
            name: "",
            environment: "sunset",
            duration: 1,
            link: "",
            isLoading: false
        }
    },
    beforeMount: function() {
        // access the vuex store and check if the user is not logged in
        // if they are not redirect to login as this page is only accessed by authorized users

        if (!this.$store.getters.account.isLoggedIn) {
            this.$router.push("/login");
        }
    },
    methods: {
        create: async function() {
            if (this.name && this.environment && this.duration && this.link) {
                this.isLoading = true;

                // dispatch a create room event to the vuex store and create a new room

                const id = await this.$store.dispatch("CREATEROOM", {
                    name: this.name,
                    environment: this.environment,
                    duration: this.duration,
                    link: this.link
                });

                // redirect user to the room

                this.$router.push("/view-room/" + id);
            }
        }
    },
}
</script>

<style>
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

    .room-box {
        width: 100%;
        max-width: 460px;
        margin: 0 20px;

        background: white;
        border: 1px solid rgba(0, 0, 0, 0.2);
        padding: 22px 28px;

        display: flex;
        flex-direction: column;
    }

    .room-box h1 {
        font-size: 22px;
        text-align: center;
    }

    .room-input {
        position: relative;
        display: flex;
        flex-direction: column;

        margin-top: 14px;
    }

    .room-input label {
        font-size: 18px;
        margin-bottom: 6px;
    }

    .room-input input {
        padding: 6px 8px;
        font-size: 16px;
        border: 1px solid rgba(0, 0, 0, 0.4);
    }

    .room-input select {
        padding: 6px 8px;
        background: transparent;
        border: 0;
        outline: 0;
        border: 1px solid rgba(0, 0, 0, 0.4);
        font-size: 16px;
    }

    .room-input button {
        padding: 8px 0;
        border: 0;
        outline: 0;
        background-color: #283592;
        color: white;
        cursor: pointer;
        font-size: 18px;
    }

    .room-input button:hover {
        background: RGBA(40, 53, 146, 0.7);
    }

    .room-input button[disabled] {
        opacity: 0.4;
        cursor: wait;
    }
</style>
