import {Ref} from "vue";

export const useCounter = () => {
  const counter: Ref<number> = useState('counter', () => 2)

  const updateCounter = (counter: Ref<number>) => () => {
    counter.value = counter.value + 1;
  }

  return {
    counter: readonly(counter),
    updateCounter: updateCounter(counter),
  }
}
