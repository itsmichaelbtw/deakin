<template>
    <div class="navbar">
        <div class="navbar-alignment">
            <div class="navbar-content">
                <div class="navbar-item">
                    <img :src="image" class="navbar-logo"/>
                </div>

                <div class="navbar-item desktop">
                    
                    <div class="navbar-links">
                        <p class="navbar-link">About</p>
                        <p class="navbar-link active">Search</p>
                        <p class="navbar-link">Contact</p>
                        <p class="navbar-link profile-link">
                            <img src="https://avatar.reflyui.cc/avatar.png?name=John&background=26A96C" class="profile-img"/>
                            Profile
                        </p>
                    </div>  
                    
                </div>

                <div class="navbar-item mobile">
                    
                    <div style="postition: relative">
                        <div class="navbar-menu" v-on:click="Menu">
                            <div class="menu-line"/>
                            <div class="menu-line"/>
                            <div class="menu-line"/>
                        </div>
                        
                        <div v-if="isMenuOpened" class="mobile-menu">
                            <p class="navbar-link">About</p>
                            <p class="navbar-link active">Search</p>
                            <p class="navbar-link">Contact</p>
                            <p class="navbar-link profile-link" style="margin: 0 !important">
                                <img src="https://avatar.reflyui.cc/avatar.png?name=John&background=26A96C" class="profile-img"/>
                                Profile
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Logo from "../assets/logo.png"

    export default {
        data: function() {
            return {
                image: Logo,
                isMenuOpened: false,
            }
        },
        methods: {
            Menu: function() {
                this.isMenuOpened = !this.isMenuOpened;
            }
        }
    }
</script>

<style scoped>
    .navbar {
        position: relative;
        width: 100%;
        padding: 20px 0;

        background-color: #283592;
    }

    .navbar .navbar-alignment {
        width: 100%;
        max-width: 1200px;
        padding: 0 30px;
        margin: 0 auto;
    }

    .navbar .navbar-alignment > .navbar-content {
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .navbar-content > .navbar-item {
        width: 100%;
    }

    .navbar-content > .navbar-item:last-child {
        display: flex;
        align-items: center;
    }

    .navbar-item.mobile {
        display: none !important;
        justify-content: flex-end;
    }

    .navbar-item.desktop {
        display: flex;
    }

    .navbar-item > .navbar-logo {
        width: 140px
    }

    .navbar-links {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }

    .navbar-links > .navbar-link {
        margin: 0 8px;
        font-size: 18px;
        font-weight: 600;
        color: white;
        cursor: pointer;

        border-bottom: 2px solid transparent;

    }

    .navbar-links > .navbar-link.active {
        border-color: #26A96C;
    }  

    .profile-link {
        margin-left: 14px !important;
        display: flex;
        align-items: center;
    }

    .profile-img {
        position: relative;
        width: 30px;
        height: 30px;
        margin-right: 4px;
        border-radius: 50%;
        object-fit: cover;
    }

    .navbar-menu {
        width: 30px;
        position: relative;
        cursor: pointer;
    }

    .navbar-menu > .menu-line {
        width: 100%;
        height: 3px;
        border-radius: 2px;
        background: white;
        margin: 4px 0;
    }

    .mobile-menu {
        position: absolute;
        right: 0;
        width: 150px;
        z-index: 100;
        top: 40px;
        padding: 10px;
        background: white;
        box-shadow: 0px 0px 10px -3px rgba(0,0,0,1);
        color: black
    }

    .mobile-menu > p {
        margin-bottom: 6px;
        cursor: pointer;
        font-size: 18px;
    }

    @media screen and (max-width: 720px) {
        .navbar-item.desktop {
            display: none !important;
        }

        .navbar-item.mobile {
            display: flex !important;
        }
    }
</style>
