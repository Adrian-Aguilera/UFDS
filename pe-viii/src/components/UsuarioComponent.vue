<template>
    <div class="pa-md-4 mx-lg-auto">
        <v-alert text="Editar usuario" type="success" class="mx-auto" max-width="344"></v-alert>
        <v-sheet class="mx-auto mb-2" width="300">
            <v-form fast-fail @submit.prevent>
              <v-text-field
                v-model="usuario"
                label="Usuario"
              ></v-text-field>

              <v-text-field
                v-model="pass"
                label="Contraseña"
              ></v-text-field>

            <div style="display: flex; justify-content: center;">
                <v-btn class="mt-2" type="submit" @click="agregarProducto" block>
                    <v-icon
                    icon="mdi-minus-circle"
                    start
                  ></v-icon>
                    Editar
                </v-btn>
            </div>
            </v-form>

            <v-alert>
                usaurio que esta logeado {{  this.$store.getters.obtenerUsuarios }}
            </v-alert>
        </v-sheet>
        <hr>
    </div>
</template>
<script>
export default {
    name: 'UsuarioComponent',
    data() {
        return {
            usuario: null,
            pass: null
        }
    },
    methods: {
        editarUsuario(){
            const usuarioParcer = {"usuario": this.usuario, "pass": this.pass}
            this.$store.dispatch('EditarUsuarioAcction', usuarioParcer)
            this.usuario = null
            this.pass = null
        }
    }
}
</script>