<template>
    <div>
        <router-link to="/admin/recipes/create">Create Recipe</router-link>
        <table class="table">
    <thead>
        <tr>
            <th>#</th>
            <th>Naam</th>
            <th>Categorie</th>
            <th>Ingredienten</th>
            <th>Stappen</th>
            <th>Tijd</th>
            <th>Show</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="recipe in recipes" :key="recipe.id">
            <td>{{recipe.id}}</td>
            <td>{{recipe.name}}</td>
            <td>{{recipe.category.name}}</td>
            <td>{{recipe.ingredients}}</td>
            <td>{{recipe.directions}}</td>
            <td>{{recipe.time}}</td>
            <td>{{recipe.show}}</td>
            <td><button @click="deleteRecipe(recipe.id)">Delete</button></td>
        </tr>            
    </tbody>
</table>
    </div>
</template>

<script>

export default {
    name: "recipes",
    data(){
        return {
           
        }
    },
    created(){
        this.$store.dispatch('retrieveRecipes')
    },
    computed:{
        recipes() { return this.$store.getters.allRecipes }
    },
    methods: {
        deleteRecipe(id) {
           
        this.$store.dispatch('deleteRecipe', id)
    },
    }

}
</script>

<style>

</style>
