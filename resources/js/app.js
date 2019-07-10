import App from "./views/App"
import VueRouter from "vue-router"
import router from "./router"
import {store} from "./store"

require('./bootstrap');





window.Vue = require('vue');
Vue.use(VueRouter)


const app = new Vue({
    el: '#app',
    components: { App},
    router,
    store
});
