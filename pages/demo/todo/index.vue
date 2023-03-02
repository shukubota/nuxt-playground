<script setup lang="ts">
import {useTodo} from "~/hooks/useTodo";
import {Ref} from "vue";
const { addTodo, state, onChangeAddTodoText, onSubmit } = useTodo();
console.log(state.todos)
console.log(state.addTodoText);
console.log(state.addTodoText);

console.log("========99999")
</script>

<template>
  <div>
    <p>{{ state.addTodoText }}</p>
    <span>{{ state.todos }}</span>
    <div class="todoContainer">
      <div class="headerContainer">
        <p class="headerTitle">ToDoリスト</p>
      </div>
      <div v-for="(todo, index) in state.todos">
        <div class="todo">
          <div class="todoTitle">
            <p class="todoText">{{ todo.title }}</p>
          </div>
          <div class="todoStatus">
            <p class="todoText">終わった</p>
          </div>
          <div class="buttonContainer">
            <button class="button">
              完了
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="addContainer">
      <form class="form" @submit="onSubmit">
        <div class="textInputContainer">
          <input
            key="state.addTodoText"
            id="task"
            placeholder="買い物"
            class="textInput"
            ref="state.addTodoText"
            @input="onChangeAddTodoText"
          />
        </div>
        <div class="addButtonContainer">
          <button class="button" type="submit">
            追加
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.headerContainer {
  background-color: cornflowerblue;
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
.addContainer {
  background-color: #f5f5f5;
  margin: 1rem auto auto auto;
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
  width: 30%;
}
.buttonContainer {
  width: 20%;
  padding: 0.8rem;
}
.button {
  width: 100%;
  height: 100%;
  color: black;
}
.form {
  display: flex;
  flex-direction: row;
}
.textInputContainer {
  padding: 0.8rem 1rem 0.8rem 0.8rem;
  width: 50%;
}
.textInput {
  width: 100%;
  height: 100%;
  font-size: 12px;
}
.addButtonContainer {
  width: 20%;
  height: 100%;
  padding: 0.8rem;
}
</style>