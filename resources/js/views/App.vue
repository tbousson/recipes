<template>
    <div class="container">
        <Navbar :loggedIn="loggedIn"></Navbar>
        <div>
        <router-view ></router-view>
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
    },
    computed:{
          loggedIn(){
              return this.$store.getters.loggedIn
          }
    }
         

}
</script>

<style>

</style>
