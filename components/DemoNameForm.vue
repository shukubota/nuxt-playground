<template>
  <div>
    <form @submit.prevent="props.onSubmit">
      <input type="text" name="name" v-model="inputName"/>
      <button type="submit" style="margin-left: 10px">
        送信
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">

import {Ref} from "vue";

interface Props {
  onSubmit: (e: any) => void;
  inputValue: string;
}
const props = defineProps<Props>()
const inputName = ref<string>("")
</script>

<style scoped>

</style>