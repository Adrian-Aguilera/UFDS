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
                    {id:1, pregunta:'que hace vue?', opcion1:'es un framework', opcion2:'es un framwork js', opcion3: 'xd'},
                    {id:1, pregunta:'que hace vue?1', opcion1:'es un framework1', opcion2:'es un framwork js', opcion3: 'xd'},
                    {id:1, pregunta:'que hace vue?2', opcion1:'es un framework2', opcion2:'es un framwork js', opcion3: 'xd'},
                ]
            }
        },
    }
</script>