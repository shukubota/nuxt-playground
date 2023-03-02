import { createApp } from 'vue'
import { createStore } from 'vuex'
// @ts-ignore
import App from '../app'

interface RootState {
  count: number;
}
const state = {
  count: 0
};
const mutations = {
  increment(state: RootState) {
    state.count++;
  },
  decrement(state: RootState) {
    state.count--;
  }
};
// const actions = {
//   increment: ({ commit }) => commit("increment"),
//   decrement: ({ commit }) => commit("decrement")
// };

export const store = createStore({
  state() {
    return state
  },
  mutations,
});

const app = createApp(App)
app.use(store)