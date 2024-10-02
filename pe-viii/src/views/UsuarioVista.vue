<template>
    <div>
        <v-alert>
            Usuario vista
        </v-alert>
        <UsuarioComponent/>
    </div>
</template>

<script>
import UsuarioComponent from '../components/UsuarioComponent.vue'
export default {
    name: 'UsuarioVista',
    components: {
        UsuarioComponent
    }
}
</script>