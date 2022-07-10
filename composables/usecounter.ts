import { ref } from "vue";

const count = ref(0);
const inc = () => (count.value = count.value + 1);
const dec = () => (count.value = count.value - 1);

export function useCounter() {
  return {
    count,
    inc,
    dec,
  };
}
