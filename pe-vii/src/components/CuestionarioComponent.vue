<template>
    <div class="container">
        <div class="form-check">
            <div v-for="(datos, indexPregunta) in preguntasArray" :key="datos.id">
                <p> {{ datos.pregunta }} </p>
                <div style="display: flex;" >
                    <select class="form-select"  aria-label="Default select example" v-model="valor[indexPregunta]">
                        <option v-for="(opciones, index ) in datos.opciones" :key="index +1" :value="index +1 " > {{ opciones }} </option>
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
            valor: Array(null),
        }
    },
    watch: {
        valor: {
            deep: true,
            handler(nuevoValor) {
                // Recorremos las respuestas para comparar con la respuesta correcta
                nuevoValor.forEach((respuestaSeleccionada, indexPregunta) => {
                    const correcta = this.preguntasArray[indexPregunta].correcta;
                    if (respuestaSeleccionada == correcta) {
                        console.log(`Pregunta ${indexPregunta}: Respuesta correcta`);
                    } else {
                        console.log(`Pregunta ${indexPregunta}: Respuesta incorrecta`);
                    }
                });
            }
        }
    }
}
</script>
