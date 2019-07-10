import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        msg: "test message",
        recipes: [],
        categories: [],
        frontRecipes: [],
        
    },
    getters: {
        allRecipes(state){
            return state.recipes
        },
        allCategories(state){
            return state.categories
        }, 
        allFrontRecipes(state){
            return state.frontRecipes
        },
        
    },
    actions: {
        retrieveFrontRecipes(context){
            axios.get('/api/front')
            .then(response => {
               
                context.commit('retrieveFrontRecipes', response.data)
            })
            .catch(error => {
              console.log(error)
            })
        },
        retrieveRecipes(context){
            axios.get('/api/recipes')
            .then(response => {
                context.commit('retrieveRecipes', response.data)
            })
            .catch(error => {
              console.log(error)
            })
        },
        retrieveCategories(context){
            axios.get('/api/categories')
            .then(response => {
                context.commit('retrieveCategories', response.data)
            })
            .catch(error => {
            console.log(error)
            })
        },
        deleteCategory(context, id){
            axios.delete('api/categories/' + id)
        .then(response => {
          context.commit('deleteCategory', id)
        })
        .catch(error => {
          console.log(error)
        })
        }
},
    mutations: {
        retrieveFrontRecipes(state, payload) {
            state.frontRecipes = payload
          },
        retrieveRecipes(state, payload) {
            state.recipes = payload
          },
          retrieveCategories(state, payload) {
            state.categories = payload
          },
          deleteCategory(state, payload) {
            const index = state.categories.findIndex(item => item.id == payload)
            state.categories.splice(index, 1)
          },
    }
});