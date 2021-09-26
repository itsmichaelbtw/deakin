<template>
    <div class="main">
        <div class="align">
            <div class="profile-container">
                <div class="profile-banner">
                    <img :src="banner" class="banner"/>
                </div>

                <div class="profile-content">
                    <div class="profile-column left">
                        <img :src="account.avatar" class="profile-img"/>
                        <p>Email: {{ account.email }}</p>
                    </div>

                    <div class="profile-column right">
                        <h1>Your rooms</h1>

                        <!-- loop over the rooms if they have them -->

                        <div v-if="rooms.length" class="room-list">
                            <router-link :to=" room.url " v-for="room in rooms" v-bind:key="room.id">
                                <div class="room">
                                    <img :src="room.banner" />

                                    <p>{{ room.name }}</p>
                                    <p>{{ room.environment }} environment</p>
                                    <p>{{ room.duration }} minute duration</p>
                                </div>
                            </router-link>
                        </div>
                        <div v-else style="width:100%;text-align:center;margin-top: 30px">
                            <p>You have no rooms</p>
                        </div>
                        <router-link to="/create-room">
                            <div class="create-room">Create room</div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Banner1 from "../assets/banner_1.png";
    import Banner2 from "../assets/banner_2.png";
    import Banner3 from "../assets/banner_3.png";
    import Banner4 from "../assets/banner_4.png";

    export default {
        data: function() {
            return {
                account: {},
                rooms: [],
                banner: ""
            }
        },
        beforeMount: function() {
            // if they are not logged in redirect

            if (!this.$store.getters.account.isLoggedIn) {
                return this.$router.push("/login");
            }

            // randomize a banner for the profile

            let banners = [Banner1, Banner2, Banner3, Banner4];

            this.banner = banners[Math.floor(Math.random() * banners.length)];

            // get the acfount and room data from vuex

            this.account = this.$store.getters.account;
            this.rooms = this.$store.getters.rooms;
        }
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

    .profile-container {
        width: 100%;
        height: 100%;
        position: relative;

        display: flex;
        flex-direction: column;

        max-width: 900px;

        padding: 20px 0;
    }

    .profile-banner {
        width: 100%;
        margin: 20px 0;

        height: 180px;
        position: relative;

        border-radius: 4px;
        overflow: hidden;
    }

    .profile-banner .banner {
        width: 100%;
        height: 100%;

    }

    .profile-content {
        display: flex;
        flex-direction: row;
    }

    .profile-column {
        position: relative;

        display: flex;
        flex-direction: column;
    }

    .profile-column.left {
        flex: 0.4;
    }

    .profile-img {
        width: 160px;
        border-radius: 4px;
    }

    .profile-column.left p {
        display: block;

        margin-top: 12px;
        font-size: 18px;
    }

    .profile-column.right {
        flex: 0.6;
    }

    .profile-column.right h1 {
        font-size: 22px;
        margin-bottom: 12px;
    }

    .profile-column.right .create-room {
        width: 120px;
        background: #283592;
        text-align: center;
        padding: 8px 0;
        color: white;

        margin: 0 auto;
    }

    .room-list {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .room-list .room {
        height: 130px;
        width: 160px;
        margin: 4px;

        text-align: center;
        text-transform: capitalize;

        border: 1px solid rgba(0, 0, 0, 0.5);
        
    }

    .room-list .room img {
        width: 100%;
        object-fit: cover;
    }

    @media screen and (max-width: 820px) {
        .profile-content {
            flex-direction: column !important;
        }

        .profile-column:first-child {
            padding-bottom: 26px;
        }

        .profile-column {
            display: flex;
            flex-direction: column;

            align-items: center;
        }
    }
</style>
