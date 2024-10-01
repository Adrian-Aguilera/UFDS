<template>
    <div>
        <p>Vista de carro de productos</p>
        <CarritoProductoComponent />
    </div>
</template>

<script>
import CarritoProductoComponent from '@/components/CarritoProductoComponent.vue'
export default {
    name: 'CarritoProductoVista',
    components: {
        CarritoProductoComponent
    }
}
</script>