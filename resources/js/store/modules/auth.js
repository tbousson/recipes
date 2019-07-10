import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const state = {
        token: window.localStorage.getItem('access_token') || null,
    }
const getters = {
        loggedIn(state){
            return state.token !== null
        }
    }
const actions = {
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
                    axios.post("api/logout").then(response => {
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
    }
const mutations = {
        retrieveToken(state, payload){
            state.token = payload
        },
        destroyToken(state){
            state.token = null
        }
    }
    
    


export default {
    state,
    actions,
    getters,
    mutations
}