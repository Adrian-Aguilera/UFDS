<template>
    <div>
        <h1>vista del contador 1</h1>
        <p>componente:</p>
        <ContadorComponent />
    </div>
</template>
<script>
import ContadorComponent from '@/components/ContadorComponent.vue'
export default {
    name: 'ContadorVista',
    components: {
        ContadorComponent
    }

}
</script>