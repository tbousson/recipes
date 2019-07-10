<template>
    <div>
         <nav class="navbar navbar-expand-lg navbar-light bg-info">
            <router-link to="/"><span class="navbar-brand" to="/">Recipes</span></router-link>
            
            <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link>
            </li>
           <li class="nav-item">
               <router-link to="/admin/dashboard" class="nav-link" v-if="loggedIn">Dashboard</router-link>
            </li>
             
            
            <li class="nav-item">
                <router-link to="/admin/categories" class="nav-link" v-if="loggedIn">Categories</router-link>
            </li>
             <li class="nav-item">
                 <router-link to="/admin/recipes" class="nav-link" v-if="loggedIn">Recipes</router-link>
            </li>
           
             <li class="nav-item">
                <router-link to="/logout" class="nav-link" v-if="loggedIn">Logout</router-link>
            </li>
             <li class="nav-item">
                <router-link to="/login" class="nav-link" v-if="!loggedIn">Login</router-link>
            </li>
            </ul>
            
            </nav>
    </div>
</template>

<script>
export default {
    name:"navbar",
    props:  {loggedIn: { type: Boolean, required: true}}
}
</script>

<style>

</style>
