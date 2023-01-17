<script setup lang='ts'>
import { storeToRefs } from 'pinia';
import { useCounterOptionsStore } from '../../store/counter-options';
import CounterOptionValue from '../components/CounterOptionValue.vue';

const counterOptionsStore = useCounterOptionsStore();
//!! ESTO ROMPE LA REACTIVIDAD DE LAS PROPIEDADES Y/O GETTERS PERO SI PODEMOS DESESTRUCTURAR ACCIONES
// const { count, squareCount} = useCounterOptionsStore();

//* Pero podemos mantener la reactividad de la siguiente forma
const { count, squareCount } = storeToRefs(counterOptionsStore); 
const { increment, incrementBy } = counterOptionsStore;
</script> 

<template>
     <div class="container">
          <div class="header">
               <h1>Pinia Options</h1>
          </div>

          <main class="counter">
               <h4> Counter: {{ count }}</h4>
               <h4>Square Counter: {{ squareCount }}</h4>
          </main>

          <br>

          <section class="buttons">
               <button @click="increment" class="buttons__btn">+1</button>
               <button @click="incrementBy(2)" class="buttons__btn">+2</button>
               <button @click="incrementBy(5)" class="buttons__btn">+5</button>
               <button @click="counterOptionsStore.$reset()" class="buttons__btn">Reset</button>
          </section>

          <section class="render-counter">
               <CounterOptionValue />
          </section>
     </div>
</template> 

<style scoped>
.container {
     max-width: 100%;
     display: flex;
     flex-direction: column;
     text-align: center;
     align-items: center;
}

.header {
     text-transform: uppercase;
}

.buttons {
     display: grid;
     grid-template-columns: repeat(4, 2fr);
     gap: 2rem
}

.buttons__btn {
     background-color: rgb(114, 136, 112);
     width: 4rem;
     height: 4rem;
}

.buttons__btn:hover {
     background-color: rgb(39, 112, 17);
}

.render-counter {
     margin: 2rem 3rem;
}
</style>