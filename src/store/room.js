import Banner1 from "../assets/banner_1.png";
import Banner2 from "../assets/banner_2.png";
import Banner3 from "../assets/banner_3.png";
import Banner4 from "../assets/banner_4.png";

export default {
    // declare a default state

    state: {
        publicRooms: [
            {
                id: 1,
                name: "Forest Wall",
                duration: 105,
                environment: "Sunset",
                banner: Banner2,
                link: "https://www.youtube.com/embed/W8a3T8pI9Ns",
                url: "/view-room/1"
            },
            {
                id: 2,
                name: "Ice Cold",
                duration: 110,
                environment: "Winter",
                banner: Banner4,
                link: "https://www.youtube.com/embed/jh_KFTYJnDo",
                url: "/view-room/2"
            },
            {
                id: 3,
                name: "Raining Time",
                duration: 45,
                environment: "Winter",
                banner: Banner2,
                link: "https://www.youtube.com/embed/8plwv25NYRo",
                url: "/view-room/3"
            },
            {
                id: 4,
                name: "Windy Tunnel",
                duration: 15,
                environment: "Windy",
                banner: Banner1,
                link: "https://www.youtube.com/embed/4KzFe50RQkQ",
                url: "/view-room/4"
            },
            {
                id: 5,
                name: "Soul",
                duration: 35,
                environment: "Sunset",
                banner: Banner4,
                link: "https://www.youtube.com/embed/RJEZaM1ZjUc",
                url: "/view-room/4"
            },
        ],
        rooms: []
    },

    // functions to return certain data

    getters: {
        rooms: state => state.rooms,
        publicRooms: state => state.publicRooms
    },

    // mutations to modify data

    mutations: {
        addRoom: (state, data) => {
            state.rooms.push(data);
        }
    },

    // global actions we can call within other files to mutate data

    actions: {
        CREATEROOM: (_, payload) => {
            // create a fake request

            return new Promise((resolve) => {
                setTimeout(function() {

                    // grab a random banner

                    let banners = [Banner1, Banner2, Banner3, Banner4];
                    let banner = banners[Math.floor(Math.random() * banners.length)];

                    // create id based on data

                    let id = Date.now()

                    const data = {
                        id: id,
                        name: payload.name,
                        environment: payload.environment,
                        duration: payload.duration,
                        banner: banner,
                        link: payload.link,
                        url: "/view-room/" + id
                    }

                    // mutate the state and return the id

                    _.commit("addRoom", data);

                    resolve(id);
                }, 750);
            });
        },
    }
};
