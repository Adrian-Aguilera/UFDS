<template>
    <div>
        <v-alert>Buscador vista</v-alert>
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