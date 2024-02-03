import { createStore } from "vuex"

export default createStore({
  state: {
    count: 0,
  },
  getters: {},
  mutations: {
    increment: function (state, number) {
      state.count = state.count + number
    },
  },
  actions: {},
  modules: {},
})
