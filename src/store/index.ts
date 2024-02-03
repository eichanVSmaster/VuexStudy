import { createStore } from "vuex"

export default createStore({
  state: {
    users: [
      { name: "John", email: "john@example.com", age: 22 },
      { name: "Merry", email: "merry@facebook.com", age: 33 },
      { name: "Ken", email: "ken@amazon.com", age: 29 },
    ],
  },
  getters: {
    users: function (state) {
      return state.users.filter((user) => user.age < 30)
    },
  },
  mutations: {},
  actions: {},
  modules: {},
})
