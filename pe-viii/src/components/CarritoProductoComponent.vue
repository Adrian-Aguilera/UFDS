<template>
    <div class="pa-md-4 mx-lg-auto">
        <v-alert text="carro de productos" type="success" class="mx-auto" max-width="344"></v-alert>
        <v-sheet class="mx-auto mb-2" width="300">
            <v-form fast-fail @submit.prevent>
              <v-text-field
                v-model="producto"
                label="Producto"
              ></v-text-field>

              <v-text-field
                v-model="precio"
                label="Precio"
              ></v-text-field>

            <div style="display: flex; justify-content: center;">
                <v-btn class="mt-2" type="submit" @click="agregarProducto" block>
                    <v-icon
                    icon="mdi-minus-circle"
                    start
                  ></v-icon>
                    Agregar
                </v-btn>
                <v-btn class="mt-2" type="submit" @click="eliminarProducto" block>
                    <v-icon
                    icon="mdi-minus-circle"
                    start
                  ></v-icon>
                    Eliminar
                </v-btn>
            </div>

            </v-form>
        </v-sheet>
        <hr>
        <v-table>
            <thead>
              <tr>
                <th class="text-left">
                  Producto
                </th>
                <th class="text-left">
                  Precio
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in this.$store.getters.obtenerProductos"
                :key="item.name"
              >
                <td>{{ item.producto }}</td>
                <td>{{ item.precio }}</td>
              </tr>
            </tbody>
        </v-table>
        <v-alert title="Gasto total: " type="success" icon="mdi-plus" class="mx-auto" max-width="344">
            {{ this.$store.getters.obtenerTotal }}
        </v-alert>
    </div>
</template>

<script>
export default {
    name: 'CarritoProductoComponent',
    data() {
        return {
            producto: null,
            precio: null,
            Total: this.$store.getters.obtenerTotal
        }
    },
    methods: {
        agregarProducto() {
            //parcer el producto y el precio
            const parcerData = { "producto": this.producto, "precio": this.precio }
            this.$store.dispatch('agregarProductoAccion', parcerData)
            this.producto = null
            this.precio = null
        },
        eliminarProducto(index) {
            this.$store.dispatch('eliminarProductoAccion', index)
            this.producto = null
            this.precio = null
        }
    }
}
</script>