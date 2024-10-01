<template>
  <v-app>
    <v-main>
      <v-card class="h-100 rounded-0" >
        <v-tabs
          v-model="tab"
          align-tabs="center"
          bg-color="teal-darken-3"
          slider-color="teal-lighten-3"
          show-arrows
        >
          <v-tab to="/" :value="1" >Contador vista 1</v-tab>
          <v-tab to="/contadorSegundaVista" :value="2"> Contador vista 2</v-tab>
          <v-tab to="/carroProducto" :value="3"> Carrito de productos</v-tab>
        </v-tabs>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item
            v-for="n in 3"
            :key="n"
            :value="n"
            class="h-100"
          >
            <v-container>
              <v-row
              >
                <router-view/>
              </v-row>
            </v-container>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
     tab: null,
  }),
}
</script>
