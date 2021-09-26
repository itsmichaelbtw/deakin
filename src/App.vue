<template>
    <div id="app">
        <Nav/>

        <!-- router-view is used for the vue router lib. It is where the application will render based on the url -->

        <router-view></router-view>
        <Footer/>
    </div>
</template>

<script>

    import Nav from "./components/Nav";
    import Footer from "./components/Footer"

    export default {
        components: {
            Nav, Footer
        }
    }
</script>

<style>

</style>
