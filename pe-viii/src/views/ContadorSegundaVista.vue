<template>
    <div>
        <h1>vista del para saber cuanto va en el contador </h1>
        <p>cantidad: {{cantidad}}</p>
    </div>
</template>

<script>
export default {
    name: 'ContadorSegundaVista',
    data() {
        return {
            cantidad: this.$store.getters.getContador
        }
    },
    
}
</script>