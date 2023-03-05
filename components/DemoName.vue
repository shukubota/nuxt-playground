<template>
  <div>
    <p>message: {{ props.message }}</p>
  </div>
</template>

<script setup lang="ts">

interface Props {
  message: string;
}
const props = defineProps<Props>()
</script>

<style scoped>

</style>