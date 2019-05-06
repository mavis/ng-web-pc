
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
    mapData:[],
    priceData:{},
    stockData:{},
    tradeData:{},
    platIndexData:{},
    hotProList:[],
    platNotices:[]
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
    },
    setPriceData(state, payload){
      state.priceData = payload.priceData
    } ,
    setStockData(state, payload){
      state.stockData = payload.stockData
    } ,
    setTradeData(state, payload){
      state.tradeData = payload.tradeData
    } ,
    setPlatIndexData(state, payload){
      state.platIndexData = payload.platIndexData
    } ,
    setHotProList(state, payload){
      state.hotProList = payload.hotProList
    } ,
    setPlatNotices(state, payload){
      state.platNotices = payload.platNotices
    } ,
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
    getPriceData({commit,state,dispatch},proId){
      return axios.get(api.getPriceData).then(res => {
          commit('setPriceData', {
            priceData: res.data.data
          })
      })
    }, 
    getStockData({commit,state,dispatch},proId){
      return axios.get(api.getStockData).then(res => {
          commit('setStockData', {
            stockData: res.data.data
          })
      })
    },
    getTradeData({commit,state,dispatch},proId){
      return axios.get(api.getTradeData).then(res => {
          commit('setTradeData', {
            tradeData: res.data.data
          })
      })
    },
    getPlatIndexData({commit,state,dispatch},proId){
      return axios.get(api.getPlatIndexData).then(res => {
          commit('setPlatIndexData', {
            platIndexData: res.data.data
          })
      })
    }, 
    getHotProList({commit,state,dispatch},proId){
      return axios.get(api.getHotProList).then(res => {
          commit('setHotProList', {
            hotProList: res.data.data
          })
      })
    },
    getPlatNotices({commit,state,dispatch},proId){
      return axios.get(api.getPlatNotices).then(res => {
          commit('setPlatNotices', {
            platNotices: res.data.data
          })
      })
    },         
  }
}
export default homepage;