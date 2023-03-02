import {reactive, toRef, toRefs} from "vue";

type TodoStatus = 'doing' | 'done'
interface Todo {
  title: string;
  status: TodoStatus;
}

interface State {
  todos: Todo[];
  addTodoText: string;
}

interface HTMLEvent<T extends EventTarget> extends Event {
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
  const onChangeAddTodoText = (_e: Event) => {
    const e = _e as HTMLEvent<HTMLInputElement>
    state.addTodoText = e.target.value;
    console.log(state.addTodoText);
  }

  const onSubmit = (e: any) => {
    console.log(e.target)
    e.preventDefault()
    addTodo({
      title: state.addTodoText,
      status: "doing",
    });
    state.addTodoText = '';
  }

  console.log(state, "----hook")
  return {
    // state: toRefs(state),
    state,
    addTodo,
    onChangeAddTodoText,
    onSubmit,
  }
}