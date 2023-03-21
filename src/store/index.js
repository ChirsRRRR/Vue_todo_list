import { createStore } from 'vuex'

export default createStore({
  state: {
    list: [
      {
          title: 'Having Lunch',
          complete: false
      },
      {
          title: 'buy bananas',
          complete: false
      },
      {
          title: 'meeting',
          complete: false
      },
  ]
  },
  getters: {
  },
  mutations: {
    addTodo(state, payload) {
      state.list.push(payload)
    },
    delTodo(state, payload) {
      state.list.splice(payload, 1)
    },
    clear(state, payload) {
      state.list = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
