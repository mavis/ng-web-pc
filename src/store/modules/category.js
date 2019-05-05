
import {api} from '../../assets/js/api'
import axios from 'axios'
const REQ_SUCCESS = 200

const categroy={
  namespaced:true,
  state: {
    categoryList:[]
  },
  mutations: {
    setCategory(state, payload){
      state.categoryList = payload.categoryList
    } 
  },
  actions: {
    getCategory({commit,state,dispatch}){
      return axios.get(api.getCategory).then(res => {
        commit('setCategory', {
          categoryList: res.data.data
        })
      })
    } 
  }
}
export default categroy;