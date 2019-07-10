<template>
    <div>
        
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
    }

}
</script>

<style>

</style>
