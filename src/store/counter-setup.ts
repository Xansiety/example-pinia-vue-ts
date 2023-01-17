import { defineStore } from "pinia";
import { ref, computed } from "vue";
export const useCounterSetupStore = defineStore("counterSetup", () => {
  const count = ref<number>(0);
  const lastChangue = ref<Date>();

  const incrementBy = (value: number) => {
    count.value += value;
    lastChangue.value = new Date();
  };

  return {
    //state properties
    count,
    lastChangue,
    // Getters
    squareCount: computed(() => count.value * count.value),
    //Actions
    incrementBy,
    increment: () => incrementBy(1),
  };
});
