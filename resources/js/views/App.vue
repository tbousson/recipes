<template>
    <div class="container">
        <Navbar></Navbar>
        <div>
        <router-view></router-view>
        </div>
    </div>
    
</template>

<script>
import { store } from 'vuex';
import Navbar from "../components/Navbar";
export default {
    name: "app",
    components: {Navbar},
    
    created(){
        console.log("App Created")
    }

}
</script>

<style>

</style>
