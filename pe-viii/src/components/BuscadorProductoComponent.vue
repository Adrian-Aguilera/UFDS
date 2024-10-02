<template>
    <div> 
        <v-alert text="Buscador de productos" type="success" icon="mdi-cloud-upload" class="mx-auto rounded-0" max-width="344"></v-alert>
    
        <v-sheet class="mx-auto" width="300">
            <v-form @submit.prevent>
              <v-text-field
                v-model="BuscarProducto"
                label="Buscar producto"
              ></v-text-field>
              <v-btn class="mt-2" type="submit" @click="buscarProducto" block>Buscar</v-btn>
            </v-form>
        </v-sheet>

        <v-alert>
            <div v-if="this.pruductoEncontrado.error">
                {{ this.pruductoEncontrado.error }}
            </div>
            <div v-else>
                producto: {{ this.pruductoEncontrado.nombre }}<br>
                precio: {{ this.pruductoEncontrado.precio }}<br>
                stock:  {{ this.pruductoEncontrado.stock }}<br>
            </div>
        </v-alert>
    </div>
</template>
<script>
export default {
    name: 'BuscadorProductoComponent',
    data() {
        return {
            BuscarProducto: null,
            pruductoEncontrado: []
        }
    },
    methods: {
        buscarProducto(){
            const BuscadorProducto = this.BuscarProducto
            this.pruductoEncontrado = this.$store.getters.buscarProductoStocksGetter(BuscadorProducto)
            this.BuscarProducto = null
        }
    }
}
</script>