<template>
    <modal name="category-edit-modal" @before-open="beforeOpen">
       <div class="modal-container">
                <div class="modal-header">
                    <h3>Edit Category</h3>
                </div>
                <div class="modal-body">
                    <label class="form-label">
                        name
                        <input class="form-control" v-model="item.name">
                    </label>
                    
                </div>
                <div class="modal-footer text-right">
                    <button class="modal-default-button" @click="save()">
                        Save
                    </button>
                    <button class="modal-default-button" @click="close()">
                        Close
                    </button>
                </div>
            </div>     
    </modal>
</template>

<script>
export default {
name: "category-edit-modal",
data (){
    return {
       item: '' 
        
    }
},
props: {
    
},
mounted(){
    
},
methods:{
   beforeOpen (event) {
    this.item = event.params.item;
  },
  close(){
      this.$modal.hide('category-edit-modal');
  },
  save(){
      
      this.$store.dispatch('updateCategory', {category :this.item }).then(response => this.$modal.hide('category-edit-modal'));
      
  }
}
}
</script>

<style>

</style>
