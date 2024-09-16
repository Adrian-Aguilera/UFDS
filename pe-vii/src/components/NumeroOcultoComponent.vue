<template>
    <div class='container'>
        <h6>Ingresa un numero hasta adivinarlo!</h6>
        <div class="input-group mb-3">
            <span class="input-group-text"> {{ texto }} </span>
            <input type="number" v-model="numero" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
        </div>
        <div v-if="numeroEncontrado === true" class="alert alert-success" role="alert">
            Demaciado alto
        </div>
        <div v-else class="alert alert-danger" role="alert">
            Demaciado bajo
        </div>
    </div>
</template>

<script>
export default {
    name: 'NumeroOcultoComponent',
    props:{
        texto:String,
    },
    data() {
        return {
            numero: null,
            numeroEncontrado: false
        }
    },
    methods:{
        encontrarNumero(numero){
            const numeroOculto = 10;
            const diferencia = Math.abs( numero - numeroOculto)

            console.log('>>', diferencia)
            if (diferencia < numeroOculto ){
                console.log('has encontrado el numero correcto')
                this.numeroEncontrado = true
            }
            else{
                console.log('el numero esta lejos!')
                this.numeroEncontrado =  false
            }
        }
    },
    watch:{
        numero:{
            deep:true,
            handler(){
                    this.encontrarNumero(this.numero);
            }
        }
    }
}
</script>