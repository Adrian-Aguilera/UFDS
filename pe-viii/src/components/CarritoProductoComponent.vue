<template>
    <div>
        <p>Carrito componente de producto</p>

        <input v-model="producto" placeholder="Producto">
        <input v-model="precio" placeholder="Precio">

        <button @click="agregarProducto">Agregar</button>
    </div>
</template>

<script>
export default {
    name: 'CarritoProductoComponent',
    data() {
        return {
            producto: null,
            precio: null
        }
    }
}
</script>