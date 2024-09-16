<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/cuestionario">Cuestionario</router-link>|
    <router-link to="/calculadora">calculadora</router-link>|
    <router-link to="/calculadoraMoneda">calculadora Moneda</router-link>|
    <router-link to="/numeroOculto">Adivina el numero oculto</router-link>|
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
