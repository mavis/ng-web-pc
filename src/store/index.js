import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
// import {api} from '../assets/js/api'
// import axios from 'axios'
import category from './modules/category'
import homepage from './modules/homepage'
Vue.use(Vuex)
const REQ_SUCCESS = 200

export default new Vuex.Store({
  state: {
    categoryL1:[]
  },
  mutations: {
    setCategoryL1(state, payload){
      state.categoryL1 = payload.categoryL1
    } 
  },
  actions: {
     
  },
  modules: {
    category:category,
    homepage:homepage
  }
})