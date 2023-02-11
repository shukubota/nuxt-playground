import {reactive} from "vue";

type TodoStatus = 'doing' | 'done'
interface Todo {
  title: string;
  status: TodoStatus;
}

interface State {
  todos: Todo[];
  addTodoText: string;
}

interface HTMLEvent<T extends HTMLElement> extends Event {
  target: T;
}

export const useTodo = () => {
  const state = reactive<State>({
    todos: [],
    addTodoText: '',
  });
  const addTodo = (todo: Todo) => {
    state.todos = [...state.todos, todo];
  }
  const onChangeAddTodoText = (e: HTMLEvent<HTMLInputElement>) => {
    state.addTodoText = e.target.value;
    console.log(state);
  }

  console.log(state, "----hook")
  return {
    state,
    addTodo,
    onChangeAddTodoText,
  }
}