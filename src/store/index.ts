import { createStore } from "vuex"

export default createStore({
  state: {
    count: 0,
  },
  getters: {},
  mutations: {
    increment(state) {
      state.count++
    },
  },
  actions: {
    incrementOne(context) {
      setTimeout(() => {
        context.commit("increment")
      }, 3000)
    },
  },
  modules: {},
})
