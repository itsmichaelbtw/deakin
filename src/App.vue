<template>
    <div id="app">
        <Nav/>
        <Search/>
        <Footer/>
    </div>
</template>

<script>

    import Nav from "./components/Nav";
    import Search from "./components/Search";
    import Footer from "./components/Footer"

    export default {
        components: {
            Nav, Search, Footer
        }
    }
</script>

<style>

</style>
