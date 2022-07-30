<template>
  <div>
    sample text: {{ text }}
    readersNumber: {{ readersNumber }}
    <button @click="onClick">足す</button>
  </div>
</template>
<script>
import {onMounted, onUnmounted, onUpdated, reactive, ref, nextTick} from 'vue'
const text = ref('default');
export default {
  name: "Sample",
  props: {
    test: Number,
    foo: String,
    readersNumber: Number,
    book: Object,
    onClick: Function,
  },
  data() {
    return {
      text,
    }
  },
  setup(props) {
    console.log({ props });
    console.log(props.book)
    console.log(text);
    console.log('render')
    nextTick((s) => {
      console.log(s)
      console.log(text);
    });
    onMounted(() => {
      console.log('mounted!')
      text.value = "mounted"
    })
    onUpdated(() => {
      console.log('onupdated!')
    })
    onUnmounted(() => {
      console.log('unmounted!')
    })
  }
}
</script>