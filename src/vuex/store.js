import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  articles: [],
  labels: [],
  isLoading: false,
  article: {},
  comments: []
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
