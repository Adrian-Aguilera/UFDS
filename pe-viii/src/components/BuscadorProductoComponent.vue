<template>
    <div> 
        <v-alert text="Buscador de productos" type="success" icon="mdi-cloud-upload" class="mx-auto rounded-0" max-width="344"></v-alert>
    
        <v-sheet class="mx-auto" width="300">
            <v-form @submit.prevent>
              <v-text-field
                v-model="BuscarProducto"
                label="Buscar producto"
              ></v-text-field>
              <v-btn class="mt-2" type="submit" block>Submit</v-btn>
            </v-form>
        </v-sheet>

        <v-table>
            <thead>
              <tr>
                <th class="text-left">
                  Nombre producto
                </th>
                <th class="text-left">
                  Precio
                </th>
                <th class="text-left">
                    Stock
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in this.$store.getters.obtenerProductosStocks"
                :key="item.nombre"
              >
                <td>{{ item.nombre }}</td>
                <td>{{ item.precio }}</td>
                <td>{{ item.stock }}</td>
              </tr>
            </tbody>
          </v-table>
    </div>
</template>
<script>
export default {
    name: 'BuscadorProductoComponent',
    data() {
        return {
            BuscarProducto: null,
        }
    },
    methods: {
        buscarProducto(){
            console.log(this.BuscarProducto)
        }
    }
}
</script>