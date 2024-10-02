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
            {{ this.pruductoEncontrado }}
        </v-alert>
    </div>
</template>
<script>
export default {
    name: 'BuscadorProductoComponent',
    data() {
        return {
            BuscarProducto: null,
            pruductoEncontrado: null
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