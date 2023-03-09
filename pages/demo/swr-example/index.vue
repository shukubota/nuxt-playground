<template>
  <div>
    <ClientOnly>
      <p>useSyncDataを使う場合</p>
      <div>
        <p>randomValue(useAsyncData): {{ isValidating ? "validating..." : state }}</p>
      </div>
      <div v-if="errorMessage !== null">
        <p>{{ errorMessage }}</P>
      </div>
      <button @click.prevent="fetchWithUseAsyncData">
        fetchWithUseAsyncData
      </button>
    </ClientOnly>
    <ClientOnly>
      <p>swr-example</p>
      <div>
        <p>randomValue(useAsyncData): {{ isValidating ? "validating..." : state }}</p>
      </div>
      <div v-if="errorMessage !== null">
        <p>{{ errorMessage }}</P>
      </div>
      <button @click.prevent="fetchWithUseAsyncData">
        fetchWithUseAsyncData
      </button>
    </ClientOnly>
  </div>
</template>
<script setup>
console.log('setup');
import {useSwrExample} from "../../../hooks/useSwrExample";
const {
  fetchWithUseAsyncData,
  state,
  errorMessage,
  isValidating,
  fetchWithUseSWRV,
} = useSwrExample();

watchEffect(() => {
  fetchWithUseAsyncData();
})
</script>
