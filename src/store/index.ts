import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    alert: [],
    url: 'http://shashurin.beget.tech/androbike/api',
    categories: {},
    params: {
      key: '6a25f16cfd58ed0e620febe6935f643341d5ec86',
      height: '',
      type: '',
      fork: ''
    },
    framest: {
      fork: []
    }
  },
  getters: {},
  mutations: {
    setCategories: (state, payload) => {
      state.categories = payload
    },
    setParamsMutation: (state, payload) => {
      state.params.height = payload.height
      state.params.type = payload.type
      state.params.fork = payload.fork
    },
    setFrameset: (state, payload) => {
      state.framest['fork'] = payload
    },
    setParams: (state, data) => {
      const { key, payload } = data
      state.params.key = key
      state.params.height = payload.height
      state.params.type = payload.type
      state.params.fork = payload.fork
    },
    setAlert: (state, data) => {
      state.alert = data
    }
  },
  actions: {
    async getCategories({commit, state}) {
      const { data } = await axios.get(`${state.url}/categories`)
      commit('setCategories', data)
    },
    async getType({commit, state}, payload) {
      const { data } = await axios.get(`${state.url}/categories`, {
        params: {
          id: payload,
          height: 1, //state.params.type,
          type: 2, // state.params.type,
          fork: 3 //state.params.fork 
        }
      })
      return data
    },
    async setParams({commit, state}, payload) {
      const { data } = await axios.post(`${state.url}/frameset`, payload)
      commit('setParams', { payload, data })
    },
    async saveFrameset({commit, state}, payload) {
      const { data } = await axios.put(`${state.url}/frameset`, {
        id: payload.id,
        name: payload.name,
        key: state.params.key
      })
    }
  }
})
