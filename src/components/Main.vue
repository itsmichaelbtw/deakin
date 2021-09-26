<template>
    <div class="main">
        <div class="main-align">
            <div class="about-section">
                <h1>About</h1>
                <p>Welcome to humTogether. Our service aims at connecting the community and our mindsets to achieve inner peace within our mind and souls. We supply resources and a service to help people from our community create meditiation groups at the convienence of their own home. Users can browse and select a room they wish to join and participate. Users are also invited to create an account where they are allowed to create their own rooms and set the environment and video the group is meditiating to. We hope your stay at humTogether is peaceful.</p>
            </div>
            <div class="links-section">
                <router-link to="/search"><div class="link-button">Search</div></router-link>
                <router-link to="/contact"><div class="link-button">Contact</div></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "main",
}
</script>

<style scoped>
    .main-align {
        width: 100%;
        max-width: 900px;

        display: flex;
        flex-direction: column;

        margin: 0 auto;

        padding-top: 48px;
    }

    h1 {
        font-size: 24px;
        margin-bottom: 14px;
    }

    .about-section {
        position: relative
    }

    .links-section {
        margin-top: 120px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .link-button {
        margin: 0 6px;
        padding: 6px 8px;
        background: #283592;
        color: white;
        font-size: 18px;
    }
</style>
