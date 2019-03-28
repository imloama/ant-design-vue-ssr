import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    IncreaseCount(state){
      state.count += 1
    }
  },
  actions: {
    Increase({commit}){
      commit('IncreaseCount')
    }
  }
})
