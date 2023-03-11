<template>
  <div>
    <DemoName :message="demoName"/>
    <DemoNameForm :onSubmit="onSubmit" :inputValue="inputValue" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import {useStore} from "vuex";
const store = useStore()
console.log({ store })
console.log("==================")
function onSubmit(e: any) {
  console.log(e.target.value)
  console.log('oonsubmit')
  console.log(inputValue)
  store.dispatch('updateDemoName', { payload: inputValue.value })
  inputValue.value = ""
}
const inputValue = ref<string>("")
const demoName = computed<string>(() => store.state.demo.name)
</script>