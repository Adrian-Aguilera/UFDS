import { createStore } from 'vuex'

export default createStore({
  state: {
    // aqui va el estado de las variables globales
    contador: 0,
    //productos: []
    productos: [],
  },
  getters: {
    getContador(state){
      return state.contador
    },
    multiplicarContador(state){
      return state.contador * 2
    },
    //obtenerProductos
    obtenerProductos(state){
      return state.productos
    },
    //obtnerTotal
    obtenerTotal(state){
      let total = 0
      state.productos.forEach(producto => {
        total = parseFloat(total) + parseFloat(producto.precio)
      })
      return total
    }
  },
  mutations: {
    agregarContador(state, cantidad){
      state.contador += cantidad
    },
    //agregarProducto
    agregarProducto(state, producto){
      state.productos.push(producto)
    },
    //eliminarProducto
    eliminarProducto(state, index){
      state.productos.splice(index, 1)
    }
  },
  actions: {
    agregarContadorAcction(context, cantidad){
      context.commit('agregarContador', cantidad)
    },
    //agregarProducto
    agregarProductoAccion(context, producto){
      context.commit('agregarProducto', producto)
    },
    //eliminarProducto
    eliminarProductoAccion(context, index){
      context.commit('eliminarProducto', index)
    }
  },
  modules: {
  }
})
