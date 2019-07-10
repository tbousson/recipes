<template>
    <div>
    
        <table class="table">
    <thead>
        <tr>
            <th>#</th>
            <th>Naam</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="category in categories" :key="category.id">
            <td>{{category.id}}</td>
            <td>{{category.name}}</td>
            <td><button class="btn btn-small btn-info">Edit</button>
                <button class="btn btn-small btn-danger" @click="deleteCategory(category.id)">Delete</button></td>
            
        </tr>            
    </tbody>
</table>
    

    </div>
</template>

<script>

export default {
    
    name: "categories",
    
    data() {
        return {
        showModal: false
        }
    },
    created(){
        this.$store.dispatch('retrieveCategories')
    },
    computed:{
        categories() { return this.$store.getters.allCategories }
    },
    methods: {
      deleteCategory(id) {
        this.$store.dispatch('deleteCategory', id)
    },
}
}
</script>

<style scoped>

</style>
