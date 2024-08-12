<template>
  <div class="mx-5 flex place-content-evenly">
    <CardsComponent
      urlImagen="https://www.itca.edu.sv/wp-content/uploads/2016/11/Ctecla.jpg"
      titulo="Sede Santa Tecla"
      MasInfo="https://www.itca.edu.sv/carreras-santa-tecla/"
      Informacion="Carreras impartidas en la sede de santa tecla, la libertad"
    />
    <CardsComponent
    urlImagen="https://www.itca.edu.sv/wp-content/uploads/2016/11/Cmiguel.jpg"
    titulo="Sede Regional San Miguel"
    MasInfo="https://www.itca.edu.sv/carreras-san-miguel/"
    Informacion="Carreras impartidas en la sede de San Miguel"
    />
    <CardsComponent
      urlImagen="https://www.itca.edu.sv/wp-content/uploads/2016/11/Cana.jpg"
      titulo="Sede Regional Santa Ana"
      MasInfo="https://www.itca.edu.sv/carreras-santa-ana/"
      Informacion="Carreras impartidas en la sede de Santa Ana"
    />
  </div>
  <div class="mx-5 flex place-content-evenly">
    <CardsComponent
      urlImagen="https://www.itca.edu.sv/wp-content/uploads/2016/11/Cunion.jpg"
      titulo="Sede La Union"
      MasInfo="https://www.itca.edu.sv/carreras-la-union/"
      Informacion="Carreras impartidas en la sede de La Union"
    />
    <CardsComponent
    urlImagen="https://www.itca.edu.sv/wp-content/uploads/2016/11/Czaca.jpg"
    titulo="Sede Regional Zacatecoluca"
    MasInfo="https://www.itca.edu.sv/carreras-zacatecoluca/"
    Informacion="Carreras impartidas en la sede de Zacatecoluca"
    />
    <CardsComponent
    urlImagen="https://www.itca.edu.sv/wp-content/uploads/2019/09/carreras_virtualesmin.jpg"
    titulo="Carreras Semi Presenciales"
    MasInfo="https://www.itca.edu.sv/formulario-carreras-virtuales/"
    Informacion="Modalidad Semi Presencia!"
    />
    <CardsComponent
    urlImagen="https://www.itca.edu.sv/wp-content/uploads/2019/10/carreras-duales-min.jpg"
    titulo="Carreras Duales!"
    MasInfo="https://www.itca.edu.sv/educacion-dual/"
    Informacion="Modalidad Dual!"
    />
  </div>
</template>

<script>
import CardsComponent from "@components/card/CardComponent.vue";
export default {
  name: "App",
  components: {
    CardsComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-image: url("assets/stacked-waves-haikei.svg");
}
</style>
