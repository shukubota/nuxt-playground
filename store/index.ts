import { createApp } from 'vue'
import { createStore } from 'vuex'
// @ts-ignore
import App from '../app'

interface RootState {
  count: number;
  demo: Demo;
}

interface Demo {
  name: string;
}
const state = {
  count: 0,
  demo: {
    name: "",
  },
};
const mutations = {
  increment(state: RootState) {
    state.count++;
  },
  decrement(state: RootState) {
    state.count--;
  },
  updateDemoName(state: RootState, payload: Demo) {
    state.demo = { ...state.demo, ...payload }
    return state
  }
};
const actions = {
  increment: ({ commit }: any) => commit("increment"),
  decrement: ({ commit }: any) => commit("decrement"),
  updateDemoName: (context: any, data: any) => {
    context.commit("updateDemoName", { name: data.payload })
  },
};

export const store = createStore({
  state() {
    return state
  },
  mutations,
  actions,
});


// const app = createApp(App)
// console.log({ app })
// app.use(store)