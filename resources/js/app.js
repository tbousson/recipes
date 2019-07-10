import App from "./views/App"
import VueRouter from "vue-router"
import router from "./router"
import {store} from "./store"
import VModal from 'vue-js-modal'


require('./bootstrap');





window.Vue = require('vue');
Vue.use(VueRouter)
Vue.use(VModal)

const app = new Vue({
    el: '#app',
    components: { App},
    router,
    store
});
