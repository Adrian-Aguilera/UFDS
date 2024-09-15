import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CuestionarioView from '@/views/CuestionarioView.vue'
import CalculadoraView from '@/views/CalculadoraView.vue'

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
    name: 'cuestionarioName',
    component: CalculadoraView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
