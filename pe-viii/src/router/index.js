import { createRouter, createWebHistory } from 'vue-router'
import ContadorVista from '../views/ContadorVista.vue'
import ContadorSegundaVista from '../views/ContadorSegundaVista.vue'
const routes = [
  {
    path: '/',
    name: 'contadorVista1',
    component: ContadorVista
  },
  {
    path: '/contadorSegundaVista',
    name: 'contadorSegundaVista',
    component: ContadorSegundaVista
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
