<script setup lang='ts'>
import { useCounterOptionsStore } from '../../store/counter-options';
const counterOptionsStore = useCounterOptionsStore();
</script> 

<template>
    <h2> Componente Hijo</h2>
    <h1> El valor es: {{ counterOptionsStore.count }}</h1>
    <h3> Ultimo cambio fue en: {{ counterOptionsStore.lastChanged }}</h3>
</template> 

<style lang='scss' scoped>

</style>