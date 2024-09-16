<template>
    <div class="container">
        <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default"> {{ title }} </span>
            <input type="number" v-model="montoMoneda" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
          </div>
    </div>
</template>
<script>
export default {
    name:"ConvertidorMonedaSComponent",
    props:{
        title:String
    },
    data() {
        return {
            montoMoneda:null,
        }
    },
}
</script>