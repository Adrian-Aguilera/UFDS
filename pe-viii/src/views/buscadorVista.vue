<template>
    <div class="pa-md-4 mx-lg-auto">
        <v-alert class="text-center rounded-0" type="info" max-width="5000"> Vista del buscador de productos</v-alert>
        <BuscadorProductoComponent />
    </div>
    <AddProductosComponent />
</template>
<script>
import BuscadorProductoComponent from '../components/BuscadorProductoComponent.vue'
import AddProductosComponent from '../components/AddProductosComponent.vue'
export default {
    name: 'buscadorVista',
    components: {
        BuscadorProductoComponent,
        AddProductosComponent
    }
}
</script>