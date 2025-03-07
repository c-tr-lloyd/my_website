import { createRouter, createWebHistory } from 'vue-router'
import MAIN from './pages/main.vue'
import AB_CON from './pages/ab_con.vue'

const routes = [
    {
        path: '/', 
        name: 'index', 
        component: MAIN
    },
    {
        path: '/about',
        name: 'about/contact',
        component: AB_CON
    },
]

const router = createRouter({
    history: createWebHistory(), 
    routes
})

export default router