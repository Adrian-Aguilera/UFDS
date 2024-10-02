<template>
    <div class="pa-md-4 mx-lg-auto">
        <v-alert class="text-center" type="info">
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