<template>
  <v-app>
    <v-main>
      <v-card class="h-100">
        <v-tabs
          v-model="tab"
          align-tabs="center"
          color="deep-purple-accent-4"
        >
          <v-tab :value="1"><router-link to="/">Contador vista 1</router-link></v-tab>
          <v-tab :value="2"> <router-link to="/contadorSegundaVista">Contador vista 2</router-link></v-tab>
        </v-tabs>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item
            v-for="n in 2"
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
