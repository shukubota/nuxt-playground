<script setup>
import {useSyncDataExample} from "../../../hooks/useSyncDataExample";
import {useSwrExample} from "../../../hooks/useSwrExample";
const {
  fetchWithUseAsyncData,
  state,
  errorMessage,
  isValidating: isValidatingAsyncData,
} = useSyncDataExample();

const { fetchWithUseSWRV } = useSwrExample();
const {
  data,
  isValidating,
  error,
  mutate,
} = fetchWithUseSWRV();

function reFetch() {
  mutate()
}

</script>
<template>
  <div>
    <ClientOnly>
      <h2>useSyncDataを使う場合</h2>
      <div>
        <p>randomValue(useAsyncData): {{ isValidatingAsyncData ? "validating..." : state }}</p>
      </div>
      <div v-if="errorMessage !== null">
        <p>{{ errorMessage }}</P>
      </div>
      <button @click.prevent="fetchWithUseAsyncData">
        fetchWithUseAsyncData
      </button>
    </ClientOnly>
    <ClientOnly>
      <h2>useSWRVを使う場合</h2>
      <div>
        <p>randomValue(useSWRV): {{ isValidating ? "validating..." : data.randomNumber }}</p>
      </div>
      <div v-if="error">
        <p>{{ error }}</P>
      </div>
      <button @click="reFetch">
        fetchWithUseSWRV
      </button>
    </ClientOnly>
  </div>
</template>
