<template>
    <div class="container">
        <div class="form-check">
            <div v-for="datos in preguntasArray" :key="datos.id">
                <p> {{ datos.pregunta }} </p>
                <div style="display: flex;">
                    <input class="form-check-input" v-model="respuesta" type="checkbox" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                      {{ datos.opcion1 }}
                    </label>
                </div>
                <div style="display: flex;">
                    <input class="form-check-input" v-model="respuesta" type="checkbox" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                      {{ datos.opcion2 }}
                    </label>
                </div>
                <div style="display: flex;">
                    <input class="form-check-input" v-model="respuesta" type="checkbox" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                      {{ datos.opcion3 }}
                    </label>
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
            respuesta: ''
        }
    },
    watch:{
        respuesta(nuevoValor, valorAnterior) {
            console.log('El mensaje cambió de:', valorAnterior, 'a:', nuevoValor);
        }
    }
}

</script>