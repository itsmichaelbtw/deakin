<template>
    <div class="navbar">
        <div class="navbar-alignment">
            <div class="navbar-content">
                <div class="navbar-item">
                    <img :src="image" class="navbar-logo"/>
                </div>

                <div class="navbar-item">
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
            </div>
        </div>
    </div>
</template>

<script>
    import Logo from "../assets/logo.png"

    export default {
        data: function() {
            return {
                image: Logo
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
</style>
