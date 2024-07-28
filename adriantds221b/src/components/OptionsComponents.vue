<template>
  <nav class="navbar navbar-expand-sm justify-content-center">
    <ul class="navbar-nav">
        <li class="nav-item">
            <a class="original-button" href="#conoce">Conoce tu Biblioteca</a>
        </li>
        <li class="nav-item">
            <a class="original-button" href="#servicios">Servicios</a>
        </li>
        <li class="nav-item">
            <a class="original-button" href="#recursos">Recursos</a>
        </li>
        <li class="nav-item">
            <a class="original-button" href="#bibliografia">Nueva Bibliografía</a>
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
.nav-link {
  color: #333;
  transition: background-color 0.3s, color 0.3s;
}
.nav-link:hover {
  background-color: #333;
}

.original-button {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  text-decoration: none;
  color: #e75757;
  font-size: 18px;
  border-radius: 5px;
  width: 200px;
  height: 40px;
  font-weight: bold;
  border: 2px dashed #cb3030;
  transition: 0.3s;
  background-color: #fff176e2;
  margin-left: 10px;
}

.original-button:hover {
  opacity: .8;
}
</style>
