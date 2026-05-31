import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Usuarios from '../views/PersonagemDetalhes.vue/index.js'
import NaoExiste from '../views/NaoExiste.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/Usuarios/', component: Usuarios },
    { path: '/Usuarios/:id', component: Usuarios },
    { path: '/:pathMatch(.*)*', component: NaoExiste },
    { path: '/inicio', redirect: '/' }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

