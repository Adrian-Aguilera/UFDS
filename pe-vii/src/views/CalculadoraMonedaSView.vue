<template>
    <div>
        <h3>Calculadora Moneda</h3>
        <h5>Calculadora que permite saber el monto equivalente de dolar a euro</h5>
        <ConvertidorMonedaSComponent title="monto:" />
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