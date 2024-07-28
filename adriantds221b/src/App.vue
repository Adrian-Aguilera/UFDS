<template>
  <div id="app">
    <mainPage/>
  </div>
</template>

<script>
import mainPage from './pages/main.vue'

export default {
  name: 'App',
  components: {
    mainPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

:root {
  --bs-red: #b03060;  /* Un tono rojo suave */
  --bs-gold: #d4af37; /* Un tono dorado suave */
}
</style>
