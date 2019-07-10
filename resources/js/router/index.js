import VueRouter from 'vue-router';
import Home from "../views/Home";
import Recipes from "../views/Recipes";
import Categories from "../views/Categories";
import Dashboard from "../views/Dashboard";
import Login from "../views/Login";
import Logout from "../views/Logout";
let routes = [
    {
        path: '/',
        name: "home",
        component: Home
    },
    {
        path: '/admin/dashboard',
        name: "dashboard",
        component: Dashboard
    },
    {
        path: '/admin/recipes',
        name: "recipes",
        component: Recipes
    },
    {
        path: '/admin/categories',
        name: "categories",
        component: Categories
    },
    {
        path: '/login',
        name: "login",
        component: Login
    },
    {
        path: '/logout',
        name: "logout",
        component: Logout
    }
]

const router = new VueRouter({
      
    routes
});


export default router;