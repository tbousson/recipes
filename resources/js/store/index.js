import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import auth from "./modules/auth";
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        msg: "test message",
        recipes: [],
        categories: [],
        frontRecipes: [],
        token: window.localStorage.getItem('access_token') || null,
    },
    modules: {
        auth
    },
    getters: {
        loggedIn(state){
          return state.token !== null
        },
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
      retrieveToken(context, credentials) {
        return new Promise ((resolve,reject) => {
        axios.post("/api/login", { 
            username: credentials.username,
            password: credentials.password
        }).then(response => {const token = response.data.access_token;
                                localStorage.setItem('access_token', token)
                            context.commit('retrieveToken', token)
                            
                            resolve(response)
                        }).catch(error=> {console.log(error)
                        reject(error)})

        })
    },
    destroyToken(context){
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token;
        
        if(context.getters.loggedIn){
            return new Promise ((resolve,reject) => {
                axios.post("/api/logout").then(response => {
                                    localStorage.removeItem('access_token')
                                    context.commit('destroyToken')
                                    resolve(response)
                                }).catch(error=> {
                                context.commit('destroyToken')
                                localStorage.removeItem('access_token')
                                reject(error)})
    
                })
        }
    },
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
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
            axios.get('/api/recipes')
            .then(response => {
                context.commit('retrieveRecipes', response.data)
            })
            .catch(error => {
              console.log(error)
            })
        },
        retrieveCategories(context){
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
            axios.get('/api/categories')
            .then(response => {
                context.commit('retrieveCategories', response.data)
            })
            .catch(error => {
            console.log(error)
            })
        },
        deleteCategory(context, id){
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
            axios.delete('api/categories/' + id)
        .then(response => {
          context.commit('deleteCategory', id)
        })
        .catch(error => {
          console.log(error)
        })
        },
        addCategory(context, data){
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
            axios.post('/api/categories', data)
                .then(response => {
                  context.commit('addCategory', response.data)
                })
                .catch(error => {
                  console.log(error)
                })
        },
        updateCategory(context, data){
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
          axios.patch('/api/categories/'+ data.category.id, {
            name: data.category.name
          })
              .then(response => {
                
                context.commit('updateCategory', response.data)
              })
              .catch(error => {
                console.log(error)
              })
        },
        createRecipe(context, data){
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
            axios.post('/api/recipes', data)
                .then(response => {
                  context.commit('createRecipe', response.data)
                })
                .catch(error => {
                  console.log(error)
                })
        },
        deleteRecipe(context, id){
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
            axios.delete('/api/recipes/' + id)
        .then(response => {
          context.commit('deleteRecipe', id)
        })
        .catch(error => {
          console.log(error)
        })
        },
},
    mutations: {
        retrieveToken(state, payload){
            state.token = payload
        },
        destroyToken(state){
            state.token = null
        },
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
          addCategory(state, payload) {
            state.categories.push({
              id: payload.id,
              name: payload.name
            })
          },
          updateCategory(state, payload) {
            const index = state.categories.findIndex(item => item.id == payload.id)
            state.categories.splice(index, 1, {
              'id': payload.id,
              'name': payload.name
            })
          },
          createRecipe(state, payload) {
            state.recipes.push({
                id: payload.id,
                name: payload.name,
                category_id: payload.category_id,
                ingredients: payload.ingredients,
                directions: payload.directions,
                time: payload.time,
                show: payload.show
            })
          },
          deleteRecipe(state, payload) {
            const index = state.recipes.findIndex(item => item.id == payload)
            state.recipes.splice(index, 1)
          },
    }
});