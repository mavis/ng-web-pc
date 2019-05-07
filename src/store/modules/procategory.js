
import {api} from '../../assets/js/api'
import axios from 'axios'
const REQ_SUCCESS = 200

const categroy={
  namespaced:true,
  state: {
    categoryList:[],
    productList:[]
  },
  mutations: {
    setCategory(state, payload){
      state.categoryList = payload.categoryList
    } ,
    setProductList(state, payload){
      state.productList = payload.productList
    } 
  },
  actions: {
    getCategory({commit,state,dispatch}){
      return axios.get(api.getCategory).then(res => {
        commit('setCategory', {
          categoryList: res.data.data
        })
      })
    } ,
    getProductList({commit,state,dispatch}){
      return axios.get(api.getProductList).then(res => {
        commit('setProductList', {
          productList: res.data.data
        })
      })
    } ,
  }
}
export default categroy;