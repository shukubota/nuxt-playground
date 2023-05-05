<script lang="ts" setup>
const dropFile = (e: DragEvent) => {
  console.log(e);
  console.log(e.dataTransfer?.files);
};
</script>

<template>
  <div>
    <div>
      <p>uploadサンプル</p>
    </div>
    <div @dragover.prevent="" @drop.prevent="dropFile" class="upload-area">
      <p>アップロード</p>
    </div>
  </div>
</template>

<style scoped>
.upload-area {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
