<template>
    <div class="pa-md-4 mx-lg-auto">
        <v-alert class="text-center rounded-0" type="info" max-width="5000"> Vista del buscador de productos</v-alert>
        <BuscadorProductoComponent />
    </div>
    <AddProductosComponent />
    <div class="pa-md-4 mx-lg-auto">

        <v-alert class="text-center rounded-0" type="info" max-width="5000"> 

            <v-table class="mx-auto">
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
    
        </v-alert>
    </div>
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