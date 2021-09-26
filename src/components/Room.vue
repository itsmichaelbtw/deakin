<template>
    <div class="main">
        <div class="align">
            <div class="room-container">
                <div class="room-banner">
                    <img :src="room.banner" class="banner"/>
                </div>

                <div class="room-content">
                    <div class="room-column">
                        <div style="position: relative">
                            <h1>You are viewing room {{ room.name }}</h1>
                            <p>This room is open for {{ room.duration }} minutes. Enjoy</p>
                            <p>Current room environment is {{ room.environment }}</p>
                        </div>
                        <div class="room-video-player">
                            <div class="room-video">
                                <iframe width="100%" height="100%" v-bind:src="room.link" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                room: {}
            }
        },
        beforeMount: function() {
            // get the room from the params id

            let [ room ] = this.$store.getters.rooms.filter(a => a.id == this.$route.params.id);

            // set room if there is one

            if (room) {
                return this.room = room;
            }

            // also check the public rooms list

            let [ publicRoom ] = this.$store.getters.publicRooms.filter(a => a.id == this.$route.params.id);

            // set room if there is one

            if (publicRoom) {
                return this.room = publicRoom;
            }

            // redirect to /search page if no rooms are found

            this.$router.push("/search");
        },
        // declare the props for this page

        props: ["id"]
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

    .room-container {
        width: 100%;
        height: 100%;
        position: relative;

        display: flex;
        flex-direction: column;

        max-width: 900px;

        padding: 20px 0;
    }

    .room-banner {
        width: 100%;
        margin: 20px 0;

        height: 180px;
        position: relative;

        border-radius: 4px;
        overflow: hidden;
    }

    .room-banner .banner {
        width: 100%;
        height: 100%;

    }

    .room-content {
        display: flex;
        flex-direction: row;
    }

    .room-column {
        position: relative;

        display: flex;
        flex-direction: column;

        flex: 1
    }

    .room-img {
        width: 160px;
        border-radius: 4px;
    }

    .room-column.left p {
        display: block;

        margin-top: 12px;
        font-size: 18px;
    }

    .room-column.right {
        flex: 0.6;
    }

    .room-column.right h1 {
        font-size: 22px;
        margin-bottom: 12px;
    }

    .room-column.right .create-room {
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

    .room-video-player {
        width: 100%;
        position: relative;
        padding-top: 32px;
    }

    .room-video {
        width: 100%;
        height: 480px;
        background: black;
        border-radius: 4px;
    }

    @media screen and (max-width: 820px) {
        .room-content {
            flex-direction: column !important;
        }

        .room-column:first-child {
            padding-bottom: 26px;
        }

        .room-column {
            display: flex;
            flex-direction: column;

            align-items: center;
        }
    }
</style>
