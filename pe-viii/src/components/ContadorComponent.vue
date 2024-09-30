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
            contador: 0
        }
    },
    methods: {
        incrementar() {
            //aqui llamamos a la accion de vuex
            this.$store.dispatch('agregarContadorAcction', 1)
            this.contador = this.$store.getters.getContador
        }
    }
}
</script>

<style scoped>
</style>