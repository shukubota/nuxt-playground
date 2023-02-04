<template>
  <div>
    demo count: {{ counter }}
    <button @click="dummyUpdate">たす</button>
    <Sample
      :test="a"
      :readersNumber="readersNumber"
      :book="book"
      :onClick="onClick"
    />
  </div>
</template>
<script setup lang="ts">
import Sample from "./sample/index.vue"
import {computed, reactive, ref, Ref} from "vue";
import { useCounter } from '../../hooks/useCounter';
import {useRoute} from "vue-router";
import {useStore} from "vuex";

// definePageMeta({
//   title: 'My home page'
// })

const route = useRoute()
const a = ref(1)
const readersNumber = ref(0);
const book = reactive({ title: 'Vue 3 Guide' })
console.log(route.meta.title);
// console.log(this.$store)
const store = useStore();
console.log({ store })
console.log('render demo')

const { counter, updateCounter } = useCounter();

function setup(props: any) {
  console.log('setup in demo')
  console.log({ props });
}

function dummyUpdate() {
  updateCounter()
}

function onClick() {
  console.log("onclick")
  readersNumber.value = readersNumber.value + 1
}
</script>