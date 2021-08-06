<template>
    <div class="result-block">
        <div class="result-image">
            <img :src="image" class="image"/>
        </div>
        <div class="result-text">
            <h1 class="room">Room: {{ room }}</h1>
            <h1 class="duration">Duration: {{ duration }}</h1>
            <h1 class="host">Host: {{ host }}</h1>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["room", "image", "duration", "host"]
    }
</script>

<style scoped>
    .result-block {
        width: 280px;
        height: 300px;
        position: relative;
        display: flex;
        flex-direction: column;
        cursor: pointer;
    }

    .result-block:hover {
        transform: scale(1.1);
        z-index: 10;
    }

    .result-image {
        width: 280px;
        height: 220px;
        object-fit: cover;
    }

    .result-image > .image {
        height: 100%;
        width: 100%;
    }

    .result-text {
        padding-top: 6px;
    }

    h1 {
        font-size: 16px;
    }
</style>
