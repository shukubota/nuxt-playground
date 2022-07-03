<template>
  <div>
    sample: {{ test }}
    readersNumber: {{ readersNumber }}
    <button @click="onClick">足す</button>
  </div>
</template>
<script>
import {onMounted, onUnmounted, onUpdated, reactive, ref} from 'vue'
export default {
  name: "Sample",
  props: {
    test: Number,
    foo: String,
    readersNumber: Number,
    book: Object,
    onClick: Function,
  },
  setup(props) {
    console.log({ props });
    console.log(props.book)
    onMounted(() => {
      console.log('mounted!')
    })
    onUpdated(() => {
      console.log('updated!')
    })
    onUnmounted(() => {
      console.log('unmounted!')
    })
  }
}
</script>