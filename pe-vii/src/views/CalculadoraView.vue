<template>
    <div>
        <p>Calculadora</p>
        <CalculadoraComponent titleFactura="Ingresa el monto de factura" titlePropina="Ingresa el porcentaje de propina deseado"/>
    </div>
</template>
<script>
import CalculadoraComponent from '@/components/calculadoraComponent.vue'
export default {
    name:'CalculadoraView',
    components:{
        CalculadoraComponent
    }
}
</script>