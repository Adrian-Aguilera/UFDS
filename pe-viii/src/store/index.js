import { createStore } from "vuex";

export default createStore({
  state: {
    // aqui va el estado de las variables globales
    contador: 0,
    //productos: []
    productos: [],

    //usuarios
    usuarios: [
      {
        usuario: "Usuario1",
        pass: "123456",
      },
    ],
    productoStocks: [],
  },
  getters: {
    getContador(state) {
      return state.contador;
    },
    multiplicarContador(state) {
      return state.contador * 2;
    },
    //obtenerProductos
    obtenerProductos(state) {
      return state.productos;
    },
    //obtnerTotal
    obtenerTotal(state) {
      let total = 0;
      state.productos.forEach((producto) => {
        total = parseFloat(total) + parseFloat(producto.precio);
      });
      return total;
    },
    obtenerUsuarios(state) {
      //parcear el usaurio que esta logeado
      let usuarioContenedor = "";
      state.usuarios.forEach((usuario) => {
        usuarioContenedor = usuario.usuario;
      });
      return usuarioContenedor;
    },

    obtenerProductosStocks(state) {
      return state.productoStocks;
    },

    //buscarProductoStocks
    buscarProductoStocksGetter(state) {
      return (NombreProducto) => {
        const productoEncontrado = state.productoStocks.find(
          (producto) => producto.nombre === NombreProducto
        );
        
        if (!productoEncontrado) {
          return { error: "Producto no encontrado" };
        }
    
        return productoEncontrado;
      };
    }
  },
  mutations: {
    agregarContador(state, cantidad) {
      state.contador += cantidad;
    },
    //agregarProducto
    agregarProducto(state, producto) {
      state.productos.push(producto);
    },
    //eliminarProducto
    eliminarProducto(state, index) {
      state.productos.splice(index, 1);
    },

    editarUsuario(state, usuario) {
      state.usuarios.push(usuario);
    },

    //agregarProductoStock
    agregarProductosStpcks(state, productoStock) {
      state.productoStocks.push(productoStock);
    },

  },
  actions: {
    agregarContadorAcction(context, cantidad) {
      context.commit("agregarContador", cantidad);
    },
    //agregarProducto
    agregarProductoAccion(context, producto) {
      context.commit("agregarProducto", producto);
    },
    //eliminarProducto
    eliminarProductoAccion(context, index) {
      context.commit("eliminarProducto", index);
    },

    EditarUsuarioAcction(context, usuario) {
      context.commit("editarUsuario", usuario);
    },
    agregarProductosStpcksAcction(context, productoStock) {
      context.commit("agregarProductosStpcks", productoStock);
    },
  },
  modules: {},
});
