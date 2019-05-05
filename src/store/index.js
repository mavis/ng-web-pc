import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
// import {api} from '../assets/js/api'
// import axios from 'axios'
import homepage from './modules/homepage'
import procategory from './modules/procategory'

Vue.use(Vuex)
const REQ_SUCCESS = 200

export default new Vuex.Store({
  state: {
    
  },
  mutations: {
    
  },
  actions: {
     
  },
  modules: {
    procategory:procategory,
    homepage:homepage
  }
})