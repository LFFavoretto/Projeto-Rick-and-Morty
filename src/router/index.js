import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Personagem from '../views/PersonagemDetalhes.vue'
import NaoExiste from '../views/NaoExiste.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/character/:id', component: Personagem},
    { path: '/about'},
    { path: '/:pathMatch(.*)*', component: NaoExiste },
    { path: '/inicio', redirect: '/' }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

