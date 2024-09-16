<template>
    <div class='container'>
        <h6>Ingresa un numero hasta adivinarlo!</h6>
        <div class="input-group mb-3">
            <span class="input-group-text"> {{ texto }} </span>
            <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
        </div>
    </div>
</template>

<script>
export default {
    name: 'NumeroOcultoComponent',
    props:{
        texto:String,
    }
}
</script>