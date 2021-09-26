<template>
    <div class="main">
        <div class="search-container">
            <div class="search-text">
                <h1>Find a Group</h1>
                <p>Search for groups and participate meditating</p>
            </div>
            <div class="search-input">
                <div class="search-wrap">
                    <input type="text" placeholder="Search">
                    <div class="search-button" v-on:click="Search">Find</div>
                    
                </div>
            </div>
        </div>

        <div class="search-results">
            <div style="width: 100%;max-width: 1200px;margin: 0 auto" v-if="location">Results based on your geolocation: {{ location.coords.latitude }} {{ location.coords.longitude }}</div>
            <div class="search-results-align">

                <!-- reusable component to render the results in a lost -->
                <!-- pass through the needed values as props and bind them to the component -->

                <Result v-for="room in results" :key="room.id" :id="room.id" :name="room.name" :duration="room.duration" :environment="room.environment" :banner="room.banner" :link="room.link" :url="room.url"/>
                <Result v-for="room in rooms" :key="room.id" :id="room.id" :name="room.name" :duration="room.duration" :environment="room.environment" :banner="room.banner" :link="room.link" :url="room.url"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Result from "./Groupcard";

    export default {
        data: function() {
            return {
                results: this.$store.getters.publicRooms,
                rooms: this.$store.getters.rooms,
                location: null
            }
        },
        methods: {
            Search: function() {
                
            },
        },
        beforeMount: function() {
            // get the users location

            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(position => {
                    this.location = position
                })
            }
        },
        components: {
            Result
        }
    }
</script>

<style scoped>
    .main {
        position: relative;
        display: flex;
        flex-direction: column;
    }

    .search-container {
        position: relative;
        width: 100%;
        height: 400px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .search-text {
        text-align: center;
    }

    .search-text h1 {
        font-size: 36px;
    }

    .search-text p {
        font-size: 22px;
    }

    .search-input {
        position: relative;
        width: 100%;
        max-width: 600px;
        padding: 0 30px;
        margin-top: 16px;
    }

    .search-wrap {
        position: relative;
        width: 100%;
        margin: 0 auto;

        display: flex;
        align-items: center;
    }

    .search-button {
        position: absolute;
        right: 8px;
        background: #26A96C;
        color: white;
        padding: 4px 8px;
        cursor: pointer;
    }

    .search-wrap > input {
        width: 100%;
        padding: 8px 14px;
        padding-right: 64px;
        border: 1px solid rgba(0, 0, 0, 0.4);
        outline: 0;

        font-size: 18px;
        font-weight: 600;
    }

    .search-wrap > input:focus {
        border-color: #26A96C;
    }

    .search-wrap > input::placeholder {
        font-size: 16px;
        font-weight: normal;
    }

    .search-results {
        position: relative;
        width: 100%;
    }

    .search-results-align {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 14px 30px;

        display: grid;
        grid-template-areas: "result result result result";
        grid-auto-rows: min-content;
        columns: 5;
        justify-items: center;
        row-gap: 5px;
    }

    @media screen and (max-width: 1200px) {
        .search-results-align {
            grid-template-areas: "result result result";
        }
    }

    @media screen and (max-width: 915px) {
        .search-results-align {
            grid-template-areas: "result result";
        }
    }

    @media screen and (max-width: 630px) {
        .search-results-align {
            grid-template-areas: "result";
        }
    }
</style>
