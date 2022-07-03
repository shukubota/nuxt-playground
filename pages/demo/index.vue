<template>
  <div>
    demo
    <Sample
        :test="a"
        :foo="foo"
        :readersNumber="readersNumber"
        :book="book"
        :onClick="onClick"
    />
  </div>
</template>
<script setup>
import Sample from "./sample"
import {reactive, ref} from "vue";

definePageMeta({
  title: 'My home page'
})

const route = useRoute()
const a = ref(1)
const readersNumber = ref(0);
const book = reactive({ title: 'Vue 3 Guide' })
console.log(route.meta.title);
function onClick() {
  console.log("onclick")
  readersNumber.value = readersNumber.value + 1
}
</script>