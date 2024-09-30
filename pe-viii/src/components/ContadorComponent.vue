<template>
    <div>
        <h1>Contador</h1>
        <p>Valor: {{ contador }}</p>
        <button @click="incrementar">Incrementar</button>
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