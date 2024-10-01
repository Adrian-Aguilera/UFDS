<template>
    <div class="pa-md-4 mx-lg-auto">
        <v-alert text="contador" type="success" class="mx-auto" max-width="344"></v-alert>
        <ContadorComponent />
    </div>
</template>
<script>
import ContadorComponent from '@/components/ContadorComponent.vue'
export default {
    name: 'ContadorVista',
    components: {
        ContadorComponent
    }

}
</script>