import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const index = () => import("../view/index")
const home = () => import("../view/home")
const animate = () => import("../view/animate")
let router = new Router({
    routes: [
        {
            path: "/",
            redirect: "/index"
        },
        {
            path: "/index",
            name: "index",
            component: index
        },
        {
            path: "/home",
            name: "home",
            component: home
        },
        {
            path: "/animate",
            name: "animate",
            component: animate
        }
    ]
})
export default router

