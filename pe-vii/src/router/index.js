import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CuestionarioView from '@/views/CuestionarioView.vue'
import CalculadoraView from '@/views/CalculadoraView.vue'
import CalculadoraMonedaSView from '@/views/CalculadoraMonedaSView.vue'
import NumeroOcultoView from '@/views/NumeroOcultoView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cuestionario',
    name: 'cuestionarioName',
    component: CuestionarioView
  },
  {
    path: '/calculadora',
    name: 'calculadoraName',
    component: CalculadoraView
  },
  {
    path: '/calculadoraMoneda',
    name: 'calculadoraMonedaName',
    component: CalculadoraMonedaSView
  },
  {
    path: '/numeroOculto',
    name: 'numeroOcultoName',
    component: NumeroOcultoView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
