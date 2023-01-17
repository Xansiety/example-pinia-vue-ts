<script setup lang='ts'>
import { useCounterSetupStore } from '../../store/counter-setup';
const counterSetupStore = useCounterSetupStore();
</script> 

<template>
    <h2> Componente Hijo de Counter Setup</h2>
    <h1> El valor es: {{ counterSetupStore.count }}</h1>
    <h3> Ultimo cambio fue en: {{ counterSetupStore.lastChangue }}</h3>
</template> 

<style lang='scss' scoped>

</style>