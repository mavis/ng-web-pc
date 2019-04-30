
// import {api} from '../assets/js/api'
// import axios from 'axios'
const REQ_SUCCESS = 200

const categroy={
  namespaced:true,
  state: {
    categoryL1:[],
    categoryL2:[],
  },
  mutations: {
    setCategoryL1(state, payload){
      state.categoryL1 = payload.categoryL1
    } 
  },
  actions: {
    getCategoryL1({commit,state,dispatch}){
       let list = [
         {
           id:'c-0-001',
           lv:0,
           childrenList:[
             {
               id:'c-1-001',
              name:'粮油',
              lv:1,
              childrenList:[
                {
                  id:'c-2-001',
                  name:'大米'
                }
              ]
             }
           ]
         }
       ]
    } 
  }
}
export default categroy;