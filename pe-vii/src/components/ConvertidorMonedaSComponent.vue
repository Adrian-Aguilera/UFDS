<template>
    <div class="container">
        <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default"> {{ title }} </span>
            <input type="number" v-model="montoMoneda" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
            <span class="input-group-text">Euro:</span>
            <span class="input-group-text">$ {{ equivalenteMoneda }} </span>
        </div>

    </div>
</template>
<script>
export default {
    name:"ConvertidorMonedaSComponent",
    props:{
        title:String,
    },
    data() {
        return {
            montoMoneda:null,
            equivalenteMoneda: null,
        }
    },
    methods:{
        calcularMoneda(montoMoneda){
            const EuroValor = 0.90;
            const nuevoValor = montoMoneda * EuroValor

            this.equivalenteMoneda = nuevoValor;
        }
    },
    watch:{
        montoMoneda:{
            deep: true,
            handler(){
                this.calcularMoneda(this.montoMoneda);
            }
        },
    }
}
</script>