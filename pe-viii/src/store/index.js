import { createStore } from 'vuex'

export default createStore({
  state: {
    // aqui va el estado de las variables globales
    contador: 0
  },
  getters: {
    getContador(state){
      return state.contador
    },
    multiplicarContador(state){
      return state.contador * 2
    }
  },
  mutations: {
    agregarContador(state, cantidad){
      state.contador += cantidad
    }
  },
  actions: {
    agregarContadorAcction(context, cantidad){
      context.commit('agregarContador', cantidad)
    }
  },
  modules: {
  }
})
