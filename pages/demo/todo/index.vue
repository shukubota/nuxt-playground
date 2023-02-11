<template>
  <div class="todoContainer">
    <div class="headerContainer">
      <p class="headerTitle">ToDoリスト</p>
    </div>
    <div class="todo">
      <div class="todoTitle">
        <p class="todoText">買い物</p>
      </div>
      <div class="todoStatus">
        <p class="todoText">終わった</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "todo"
}
</script>

<style scoped>
.headerContainer {
  background-color: cornflowerblue;
  /*height: 50px;*/
  width: 100%;
  text-align: center;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
}
.headerTitle {
  margin-top: 1rem;
  color: white;
}
.todoContainer {
  background-color: #f5f5f5;
  margin: auto;
  width: 40rem;
}
.todoText {
  color: #444444;
}
.todo {
  display: flex;
  flex-direction: row;
}
.todoTitle {
  width: 50%;
  margin-left: 1rem;
}
.todoStatus {
  width: 50%;
}
</style>