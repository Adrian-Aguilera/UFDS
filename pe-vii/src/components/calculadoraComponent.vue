<template>
    <div class="container">
        <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default"> {{ titleFactura }} </span>
            <input type="number" v-model="facturaInput" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default"> {{ titlePropina }} </span>
            <input type="number" v-model="porcentajePropina" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
        </div>

        <div v-if="total != null" class="alert alert-primary" role="alert">
           Total: {{ total }}
        </div>
    </div>
</template>
<script>
export default {
    name: 'CalculadoraComponent',
    props:{
        titleFactura:String,
        titlePropina:String,
    },
    data() {
        return {
            facturaInput: null,
            porcentajePropina: null,
            total: null
        }
    },
    methods:{
        calcularMonto(facturaInput, porcentajePropina){
            const montoPropina = facturaInput * (porcentajePropina / 100);
            const montoTotal = facturaInput + montoPropina
            this.total = montoTotal
        }
    },
    watch:{
        facturaInput:{
            deep:true,
            handler(){
                this.calcularMonto(this.facturaInput, this.porcentajePropina)
            }
        },
        porcentajePropina:{
            deep:true,
            handler(){
                this.calcularMonto(this.facturaInput, this.porcentajePropina)
            }
        }
    }
}
</script>