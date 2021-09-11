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
                <Result v-for="result in results" :key="result.id" :room="result.room" :image="result.image" :duration="result.duration" :host="result.host"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Result from "./Groupcard";

    export default {
        data: function() {
            return {
                results: [
                    {
                        id: "1",
                        image: "http://wallpoper.com/images/00/29/00/25/forest_00290025.jpg",
                        room: "Forest Wall",
                        duration: "32m 5s",
                        host: "Holiday",
                    },
                    {
                        id: "2",
                        image: "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555306493/shape/mentalfloss/istock_61523256_smallprimary.png",
                        room: "Ice Cold",
                        duration: "18m 23s",
                        host: "Serena",
                    },
                    {
                        id: "3",
                        image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-8hSg85P6M6Q%2FUaWs4wV4QxI%2FAAAAAAAAHwc%2FmMIeD8QmeK0%2Fs1600%2Frain_or_snow_snow_winter_white-hd-wallpaper-473957.jpg&f=1&nofb=1",
                        room: "Raining Times",
                        duration: "1m 12s",
                        host: "Eliza",
                    },
                    {
                        id: "4",
                        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.rSPxhnL1lRdPrFfvrRisUAHaEo%26pid%3DApi&f=1",
                        room: "Windy Tunnel",
                        duration: "84m 12s",
                        host: "Keith",
                    },
                    {
                        id: "5",
                        image: "https://miro.medium.com/max/12000/1*XsB0hYw21r-OUlpj2jttWw.jpeg",
                        room: "Soul",
                        duration: "12m 23s",
                        host: "Mac",
                    },
                    {
                        id: "6",
                        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.b_jZf03iDkoEJGoud1g04AHaEK%26pid%3DApi&f=1",
                        room: "Sprout",
                        duration: "64m 42s",
                        host: "Jane",
                    }
                ],
                location: null
            }
        },
        methods: {
            Search: function() {
                
            },
        },
        beforeMount: function() {
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
        border-radius: 4px;
        cursor: pointer;
    }

    .search-wrap > input {
        width: 100%;
        padding: 8px 14px;
        padding-right: 64px;
        border: 1px solid rgba(0, 0, 0, 0.3);
        border-radius: 4px;
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
