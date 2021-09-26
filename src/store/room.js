import Banner1 from "../assets/banner_1.png";
import Banner2 from "../assets/banner_2.png";
import Banner3 from "../assets/banner_3.png";
import Banner4 from "../assets/banner_4.png";

export default {
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
    getters: {
        rooms: state => state.rooms,
        publicRooms: state => state.publicRooms
    },
    mutations: {
        addRoom: (state, data) => {
            state.rooms.push(data);
        }
    },
    actions: {
        CREATEROOM: (_, payload) => {
            return new Promise((resolve) => {
                setTimeout(function() {

                    let banners = [Banner1, Banner2, Banner3, Banner4];
                    let banner = banners[Math.floor(Math.random() * banners.length)];

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

                    _.commit("addRoom", data);

                    resolve(id);
                }, 750);
            });
        },
    }
};
