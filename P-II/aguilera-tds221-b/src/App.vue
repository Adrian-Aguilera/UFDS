<template>
  <div class="mx-5 flex">
    <CardsComponent
      urlImagen="https://www.itca.edu.sv/wp-content/uploads/2016/11/Ctecla.jpg"
      titulo="Sede Santa Tecla"
      MasInfo="https://www.itca.edu.sv/carreras-santa-tecla/"
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
