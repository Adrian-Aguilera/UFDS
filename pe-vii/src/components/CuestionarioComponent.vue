<template>
    <div class="container">
        <div class="form-check">
            <div v-for="(datos) in preguntasArray" :key="datos.id">
                <p> {{ datos.pregunta }} </p>
                <div style="display: flex;" >
                    <select class="form-select"  aria-label="Default select example" v-model="valor">
                        <option v-for="(opciones, index ) in datos.opciones" :key="opciones.id" :value="index +1 " > {{ opciones }} </option>
                    </select>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'CuestionarioComponent',
    props:{
        preguntasArray:Array
    },
    data() {
        return {
            valor: [],
            respuestaCorrecta: ''
        }
    },
    watch:{
        valor(nuevoValor, valorAnterior) {
            console.log('asd', this.preguntasArray);
            console.log('El mensaje cambió de:', valorAnterior, 'a:', nuevoValor);

        }
    }
}

</script>