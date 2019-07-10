<template>
    <div class="login-form">
        <h2>Login</h2>
        <form action="#" @submit.prevent="login">

            <div class="form-control">
                <label for="email">Username/Email</label>
                <input type="email" name="username" id="username" class="" v-model="username">
            </div>
            <div class="form-control">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" class="" v-model="password">
            </div>
            <div v-if="error">
                {{error}}
            </div>
            <div class="form-control">
                <button type="submit" class="btn btn-info">Login</button>
            </div>
            </form>
    </div>
</template>

<script>
import {store} from "../store";

export default {
    name: "login",
    data(){
        return {
            error: "",
            username: "",
            password: "",
            
        }
    },
    methods: {
        login(){
            this.$store.dispatch('retrieveToken', {
                username:this.username,
                password: this.password
            }).then(response=> this.$router.push({name: 'dashboard'}))
    }
}
}
</script>

<style>

</style>