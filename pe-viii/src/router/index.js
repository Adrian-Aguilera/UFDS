import { createRouter, createWebHistory } from 'vue-router'
import ContadorVista from '../views/ContadorVista.vue'
import ContadorSegundaVista from '../views/ContadorSegundaVista.vue'
import CarritoProductoVista from '../views/CarritoProductoVista.vue'
import UsuarioVista from '../views/UsuarioVista.vue'
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
  },
  {
    path: '/carroProducto',
    name: 'carroProducto',
    component: CarritoProductoVista
  },
  {
    path: '/usuario',
    name: 'usuario',
    component: UsuarioVista
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
