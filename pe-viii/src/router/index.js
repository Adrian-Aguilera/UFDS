import { createRouter, createWebHistory } from 'vue-router'
import ContadorVista from '../views/ContadorVista.vue'
const routes = [
  {
    path: '/',
    name: 'contadorVista1',
    component: ContadorVista
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
