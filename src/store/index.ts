import { createStore } from 'vuex'
import axios from "axios";
import defaultConfig from "../../axios.config";

export default createStore({
  state: {
    age: 0,
    frequency: [],
    nameWithHighestAge: ''
  },
  getters: {
  },
  mutations: {
    SET_AGE(state, age){
      state.age = age
    },
    SET_FREQUENCY(state, frequency){
      state.frequency = frequency
    },
    SET_NAME_WITH_HIGHEST_AGE(state, nameWithHighestAge){
      state.nameWithHighestAge = nameWithHighestAge;
    }
  },
  actions: {
    sendName({commit}, name){
      axios.get('https://kaplaan.ru/backend/naumen/api/v1/name/' + name, defaultConfig)
          .then(age =>
              commit('SET_AGE', age.data)
          )
    },
    sendNameToService({commit}, name){
      axios.get('https://api.agify.io/?name='+ name, defaultConfig)
          .then(age =>
             commit('SET_AGE', age.data.age)
          )

    },
    getStatisticByName({commit}){
      axios.get('https://kaplaan.ru/backend/naumen/api/v1/statistic/statsByName', defaultConfig)
          .then(statistic =>
          commit('SET_FREQUENCY', statistic.data))
    },
    getNameWithHighestAge({commit}){
      axios.get('https://kaplaan.ru/backend/naumen/api/v1/statistic/nameByHighestAge', defaultConfig)
          .then(name =>
                 commit('SET_NAME_WITH_HIGHEST_AGE',name.data)
          )
    }
  },
  modules: {
  }
})
