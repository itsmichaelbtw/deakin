<template>
    <div class="navbar">
        <div class="navbar-alignment">
            <div class="navbar-content">
                <div class="navbar-item desktop">
                    
                    <div class="navbar-links">
                        <router-link class="navbar-link" to="/">Home</router-link>
                        <router-link class="navbar-link" to="/search">Search</router-link>
                        <router-link class="navbar-link" to="/contact">Contact</router-link>

                        <router-link v-if="account && account.isLoggedIn" class="navbar-link profile-link" to="/profile" >
                            <img :src="account && account.avatar" class="profile-img"/>
                            Profile
                        </router-link>
                        <span v-else>
                            <router-link class="navbar-link" to="/login" style="display: inline-block;height: 100%">Login</router-link>
                            <router-link class="navbar-link" to="/register" style="display: inline-block;height: 100%">Register</router-link>
                        </span>
                    </div>
                </div>

                <div class="navbar-item mobile">
                    <div style="position: relative">
                        <div class="navbar-menu" v-on:click="Menu">
                            <div class="menu-line"/>
                            <div class="menu-line"/>
                            <div class="menu-line"/>
                        </div>
                        
                        <div v-if="isMenuOpened" class="mobile-menu">
                            <router-link class="navbar-link" to="/">Home</router-link>
                            <router-link class="navbar-link" to="/search">Search</router-link>
                            <router-link class="navbar-link" to="/contact">Contact</router-link>
                            <router-link v-if="account && account.isLoggedIn" class="navbar-link profile-link" to="/profile" >
                                <img :src="account && account.avatar" class="profile-img"/>
                                Profile
                            </router-link>
                            <div v-else>
                                <router-link class="navbar-link" to="/login" style="margin-right: 4px">Login</router-link>
                                <router-link class="navbar-link" to="/register">Register</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Logo from "../assets/Logo.png"

    export default {
        data: function() {
            return {
                account: null,
                image: Logo,
                isMenuOpened: false,
            }
        },
        beforeMount: function(){
            const that = this;

            this.$store.watch(function(state) {
                return state.account
            }, function(state) {
                that.account = state.account;
            }, { deep: true })
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

    .navbar .navbar-alignment .navbar-content {
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
        width: 60px;
        height: 60px;
    }

    .navbar-links {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }

    .navbar-links .navbar-link {
        margin: 0 8px;
        font-size: 18px;
        font-weight: 600;
        color: white;
        cursor: pointer;

        border-bottom: 2px solid transparent;

    }

    .navbar-links .navbar-link.router-link-active {
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
        color: black;

        display: flex;
        flex-direction: column;
    }

    .mobile-menu a {
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
