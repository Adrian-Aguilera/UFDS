<template>
    <div>
        <h3>Encuentra el numero que esta oculto</h3>

        <NumeroOcultoComponent texto="Ingresa un numero!"/>
    </div>
</template>
<script>
import NumeroOcultoComponent from '@/components/NumeroOcultoComponent.vue'
export default {
    name: 'NumeroOcultoView',
    components: {
        NumeroOcultoComponent,
    }
}
</script>