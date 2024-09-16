<template>
    <div>
        <h3>Calculadora Moneda</h3>
        <ConvertidorMonedaSComponent title="monto:"/>
    </div>
</template>
<script>

import ConvertidorMonedaSComponent from '@/components/ConvertidorMonedaSComponent.vue'
export default {
    name:'CalculadoraMonedaSView',
    components:{
        ConvertidorMonedaSComponent
    }
}
</script>