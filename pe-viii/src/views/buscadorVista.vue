<template>
    <div>
        <v-alert class="text-center rounded-0" type="info" max-width="5000"> Vista del buscador de productos</v-alert>
        <BuscadorProductoComponent />
    </div>
</template>
<script>
import BuscadorProductoComponent from '../components/BuscadorProductoComponent.vue'
export default {
    name: 'buscadorVista',
    components: {
        BuscadorProductoComponent
    }
}
</script>