<template>
  <div class="pa-md-4 mx-lg-auto">
    <v-form @submit.prevent class="mx-auto mb-2" width="300">
      <v-container fluid class="pa-0 mg-3" width="300">
        <v-text-field
          v-model="nombre"
          label="Nombre del producto"
          hide-details
          required
        ></v-text-field>
        <v-text-field
          v-model="precio"
          label="Precio"
          hide-details
          required
        ></v-text-field>

        <v-text-field
          v-model="stock"
          label="Stock"
          required
        ></v-text-field>
      </v-container>
      <v-btn class="mt-2" type="submit" block>Agregar producto</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "AddProductosComponent",
  data() {
    return {
      nombre: null,
      precio: null,
      stock: null,
    };
  },
};
</script>
