<template>
  <nav class="navbar navbar-expand-sm bg-light justify-content-center">
    <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" href="#conoce">Conoce tu Biblioteca</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#servicios">Servicios</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#recursos">Recursos</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#bibliografia">Nueva Bibliografía</a>
        </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'OptionsButtons',
  props: {
    msg: String
  }
}
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
