<template>
    <div class="mt-3">
     
    <template v-for="recipe in frontRecipes" >
        <div :key="recipe.id">
        <h2>{{recipe.name}}</h2>
        <p><b>Categorie</b>: {{recipe.category.name}}<br>
            <b>Ingredienten</b>: {{recipe.ingredients}}<br>
            <b>Stappen</b>: {{recipe.directions}}<br>
            <b>Tijd</b>: {{recipe.time}}</p>
            
        </div>

        </template>
        </div>
</template>

<script>
export default {
    name: "home",
    mounted(){
        console.log("home mounted")
    },
    created(){
        this.$store.dispatch('retrieveFrontRecipes'),
        axios.get("/api/front").then(response => console.log(response))
    },
    computed:{
        
        frontRecipes() { return this.$store.getters.allFrontRecipes }
    },
}
</script>

<style>

</style>
