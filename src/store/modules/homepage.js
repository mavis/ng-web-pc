
import {api} from '../../assets/js/api'
import axios from 'axios'
const REQ_SUCCESS = 200

const homepage={
  namespaced:true,
  state: {
    topBanners:[]
  },
  mutations: {
    setTopBanners(state, payload){
      state.topBanners = payload.topBanners
    } 
  },
  actions: {
    getTopBanners({commit,state,dispatch}){
        return axios.get(api.getTopBanners).then(res => {
            commit('setTopBanners', {
                topBanners: res.data.data
            })
        })
    } 
  }
}
export default homepage;