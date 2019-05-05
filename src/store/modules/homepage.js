
import {api} from '../../assets/js/api'
import axios from 'axios'
const REQ_SUCCESS = 200

const homepage={
  namespaced:true,
  state: {
    topBanners:[],
    notice:[],
    tradeDynamics:[],
    bookingMonthList:[],
    mapData:[]
  },
  mutations: {
    setTopBanners(state, payload){
      state.topBanners = payload.topBanners
    } ,
    setNotice(state, payload){
      state.notice = payload.notice
    }, 
    setTradeDynamics(state, payload){
      state.tradeDynamics = payload.tradeDynamics
    },
    setBookingMonthList(state, payload){
      state.bookingMonthList = payload.bookingMonthList
    }  ,
    setMapData(state, payload){
      state.mapData = payload.mapData
    } 
  },
  actions: {
    getTopBanners({commit,state,dispatch}){
        return axios.get(api.getTopBanners).then(res => {
            commit('setTopBanners', {
                topBanners: res.data.data
            })
        })
    },
    getNotice({commit,state,dispatch}){
      return axios.get(api.getNotice).then(res => {
          commit('setTsetNoticeopBanners', {
            notice: res.data.data
          })
      })
    },
    getTradeDynamics({commit,state,dispatch}){
      return axios.get(api.getTradeDynamics).then(res => {
          commit('setTradeDynamics', {
            tradeDynamics: res.data.data
          })
      })
    },       
    getBookingMonthList({commit,state,dispatch}){
      return axios.get(api.getBookingMonthList).then(res => {
          commit('setBookingMonthList', {
            bookingMonthList: res.data.data
          })
      })
    },    
    getMapData({commit,state,dispatch},proId){
      let url = api.getMapData1;
      if(proId == 'pro_0'){
        url = api.getMapData2;
      }else{
        url = api.getMapData1;
      }
      return axios.get(url).then(res => {
          commit('setMapData', {
            mapData: res.data.data
          })
      })
    },  
  }
}
export default homepage;