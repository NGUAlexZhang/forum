import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
export const constantRoutes = [
    {
        path: '/login',
        component: () => import('../views/Login/index'),
        name: 'login'
    },
    {
        path: '/register',
        component: () => import('../views/Register/index'),
        name: 'register'
    }
]

const router = new VueRouter({
    routes: constantRoutes
})

export default router
