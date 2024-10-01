<template>
    <div class="pa-md-4 mx-lg-auto">
        <v-alert text="contador de vista actual:" type="success" icon="$last" class="mx-auto rounded-0" max-width="344"></v-alert>
        <v-card title="" class="mx-auto  bg-purple-darken-2 rounded-0" max-width="344">
            <v-card-text>
                cantidad actual: <b>{{ cantidad }}</b>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'ContadorSegundaVista',
    data() {
        return {
            cantidad: this.$store.getters.getContador
        }
    },
    
}
</script>