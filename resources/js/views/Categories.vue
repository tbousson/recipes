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
            <td><button class="btn btn-small btn-info" @click="showModalEdit(category)">Edit</button>
                <button class="btn btn-small btn-danger" @click="deleteCategory(category.id)">Delete</button></td>
            
        </tr>            
    </tbody>
</table>
    <CatCreateModal :show="showModal" @close="showModal = false"></CatCreateModal>
    <button id="show-modal" @click="showModal = true">New Category</button>
    <CatEditModal :show="showModalEdit" @close="showModalEdit = false" :category="category"></CatEditModal>
    
    </div>
</template>

<script>
import CatCreateModal from "../components/CatCreateModal";
import CatEditModal from "../components/CatEditModal";
export default {
    
    name: "categories",
    components: { CatCreateModal, CatEditModal},
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
    showModalEdit(category) {
      showModalEdit = true
    },
}
}
</script>

<style scoped>

</style>
