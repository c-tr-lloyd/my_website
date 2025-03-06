import { createRouter, createWebHistory } from 'vue-router'
import MAIN from './pages/main.vue'

const routes = [
    {
        path: '/', 
        name: 'index', 
        component: MAIN
    },
]

const router = createRouter({
    history: createWebHistory(), 
    routes
})

export default router