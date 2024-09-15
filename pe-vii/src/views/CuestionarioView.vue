<template>
    <div>
        <h2>Cuestionario</h2>
        <CuestionarioComponent :preguntasArray="valoresPregunta"/>
    </div>
</template>
<script>
import CuestionarioComponent from '@/components/CuestionarioComponent.vue'
    export default {
        name:'CuestionarioView',
        components:{
            CuestionarioComponent,
        },
        data() {
            return {
                valoresPregunta:[
                    {id:1, pregunta:'que hace vue?', opciones:['hola','hola2','hola3','hyjtfjyhgfhj'], correcta:'3'},
                    {id:1, pregunta:'que hace vue?', opciones:['hola','hola2','hola3','asd'], correcta:'3'},

                ]
            }
        },
    }
</script>