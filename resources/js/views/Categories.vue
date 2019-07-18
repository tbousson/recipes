<template>
    <div>
        <!-- Modal -->
        <category-edit-modal></category-edit-modal>
    
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
            <td> <button class="btn btn-small btn-info" @click="showCategoryEditModal(category)">Edit</button>
                <button class="btn btn-small btn-danger" @click="deleteCategory(category.id)">Delete</button></td>
            
        </tr>            
    </tbody>
</table>
    <CatCreateModal :show="showModal" @close="showModal = false"></CatCreateModal>
    <button id="show-modal" @click="showModal = true">New Category</button>
   
   
    </div>
</template>

<script>
import CatCreateModal from "../components/CatCreateModal";

import CategoryEditModal from "../components/CategoryEditModal";
export default {
    
    name: "categories",
    components: { CatCreateModal, CategoryEditModal},
    data() {
        return {
        showModal: false,
        showModalEdit: false,
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
  
     showCategoryEditModal (category) {
        this.$modal.show('category-edit-modal', {
            item: category
        });
  },
}
}
</script>

<style scoped>

</style>
