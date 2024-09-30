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
            this.contador++
        }
    }
}
</script>

<style scoped>
</style>