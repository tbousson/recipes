<template>
    <div>
        <h2>Recipe</h2>
        <form id="recipe" @submit.prevent="createRecipe">
        <div class="form-group">
            <label>Name: </label>
            <input type="text" v-model="name" class="form-control">
        </div>
        <div class="form-group">
            <label for="category">Category: </label>
            <select class="form-control form-control-sm" v-model="category_id">
                <template v-for="category in categories">
            <option  :key="category.id" :value="category.id">{{category.name}}</option>
                </template>
            </select>
        </div>
         <div class="form-group">
            <label for="ingredients">Ingredienten</label>
            <input type="text" class="form-control" v-model="ingredients">
        </div>
        <div class="form-group">
            <label for="directions">Stappen</label>
            <input type="text" class="form-control" v-model="directions">
        </div>
        <div class="form-group">
            <label for="time">Tijd</label>
            <input type="text" class="form-control" v-model="time">
        </div>
        <div class="form-group">
            <label for="Show">Show: </label>
            <select class="form-control form-control-sm" v-model="show">
            <option :value="false">0</option>
            <option :value="true">1</option>
            </select>
        </div>
       <button @submit="createRecipe">submit</button>
       </form>
    </div>
</template>

<script>
export default {
name: "recipe",
data(){
    return {
        name: '',
        category_id: '',
        ingredients: '',
        directions: '',
        time: '',
        show: ''
    }
},
 created(){
        this.$store.dispatch('retrieveCategories')
    },

computed:{
    categories() { return this.$store.getters.allCategories }
},
methods: {
    createRecipe(){
        console.log(this.show);
        this.$store.dispatch('createRecipe', {
            name: this.name,
        category_id: this.category_id,
        ingredients: this.ingredients,
        directions: this.directions,
        time: this.time,
        show: this.show
        })
    }
}

}
</script>

<style>

</style>
