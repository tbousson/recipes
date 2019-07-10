import VueRouter from 'vue-router';
import Home from "../views/Home";
import Recipes from "../views/Recipes";
import Categories from "../views/Categories";
import Dashboard from "../views/Dashboard";
import Login from "../views/Login";
import Logout from "../views/Logout";
import {store} from "../store"
let routes = [
    {
        path: '/',
        name: "home",
        component: Home
    },
    {
        path: '/admin/dashboard',
        name: "dashboard",
        component: Dashboard,
        meta: { middlewareAuth: true }
    },
    {
        path: '/admin/recipes',
        name: "recipes",
        component: Recipes,
        meta: { middlewareAuth: true }
    },
    {
        path: '/admin/categories',
        name: "categories",
        component: Categories,
        meta: { middlewareAuth: true }
    },
    {
        path: '/login',
        name: "login",
        component: Login,
        meta: { notAuth: true}
    },
    {
        path: '/logout',
        name: "logout",
        component: Logout,
        meta: { middlewareAuth: true }
    }
];


const router = new VueRouter({
    
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.middlewareAuth)) {                
        if (!store.getters.loggedIn) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            }) } else {
                next()
              }
            } else if (to.matched.some(record => record.meta.notAuth)) {
              if (store.getters.loggedIn) {
                next({
                  name: 'home',
                })
              } else {
                next()
              }
            } else {
              next()
            }
          })
export default router;