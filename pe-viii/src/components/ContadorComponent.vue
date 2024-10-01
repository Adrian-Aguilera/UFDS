<template>
    <div>
        <v-card title="Contador" class="mx-auto" max-width="344">
            <v-card-text>
                calcular el doble de la cantidad: <b>{{ this.$store.getters.multiplicarContador }}</b>
            </v-card-text>
            <v-card-text>
                cantidad actual: <b>{{ contador }}</b>
            </v-card-text>
            <v-card-actions>
                <v-btn  @click="incrementar" prepend-icon="$vuetify" variant="outlined">
                    Incrementar
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            contador: this.$store.getters.getContador
        }
    },
    methods: {
        incrementar() {
            //aqui llamamos a la accion de vuex
            this.$store.dispatch('agregarContadorAcction', 2) //el primer argumento es el contexto, el segundo la cantidad a incrementar
            this.contador = this.$store.getters.getContador
        }
    }
}
</script>

<style scoped>
</style>