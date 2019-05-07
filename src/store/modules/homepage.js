
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
    platIndexData:[],
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
        let data=[
          {
              "img":"/static/banner-1.png"
          },
          {
              "img":"/static/banner-2.png"
          },
          {
              "img":"/static/banner-3.png"
          },
          {
              "img":"/static/banner-4.png"
          }
          ];
          commit('setTopBanners', {
              topBanners: data
          })
        // return axios.get(api.getTopBanners).then(res => {
        //     commit('setTopBanners', {
        //         topBanners: res.data.data
        //     })
        // })
    },
    getNotice({commit,state,dispatch}){
      // return axios.get(api.getNotice).then(res => {
      //     commit('setNotice', {
      //       notice: res.data.data
      //     })
      // })
    },
    getTradeDynamics({commit,state,dispatch}){
      let data=[
        {
            "id":"001",
            "producingArea":"岔路口",
            "productName":"玉米",
            "finalPrice":"100",
            "businessVolume":"100",
            "closingTime":"1月15日"
        },
        {
            "id":"002",
            "producingArea":"岔路口",
            "productName":"玉米",
            "finalPrice":"100",
            "businessVolume":"100",
            "closingTime":"1月15日"
        },
        {
            "id":"003",
            "producingArea":"岔路口",
            "productName":"玉米",
            "finalPrice":"100",
            "businessVolume":"100",
            "closingTime":"1月15日"
        },
        {
            "id":"004",
            "producingArea":"岔路口",
            "productName":"玉米",
            "finalPrice":"100",
            "businessVolume":"100",
            "closingTime":"1月15日"
        }
        ]
        commit('setTradeDynamics', {
          tradeDynamics: data
        })    
      // return axios.get(api.getTradeDynamics).then(res => {
      //     commit('setTradeDynamics', {
      //       tradeDynamics: res.data.data
      //     })
      // })
    },       
    getBookingMonthList({commit,state,dispatch}){
      let data = [
      {
           
          "date":"2019-5",
          "dateString":"五月",
          "list":[
              {
                  "proName":"花生","proId":"pro_0","proId":"pro_0",
                  "img":"/static/peanut.png",
                  "price":"3",
                  "stock":"6"
              },
              {
                  "proName":"葵花","proId":"pro_1",
                  "img":"/static/sunflowerSeed.png",
                  "price":"3",
                  "stock":"6"
              }
          ]
      },
      {
         
          "date":"2019-6",
          "dateString":"六月",
          "list":[
              {
                  "proName":"花生","proId":"pro_0","proId":"pro_0",
                  "img":"/static/peanut.png",
                  "price":"3",
                  "stock":"6"
              },
              {
                  "proName":"葵花","proId":"pro_1",
                  "img":"/static/sunflowerSeed.png",
                  "price":"3",
                  "stock":"6"
              }
          ]
      },
      {
         
          "date":"2019-7",
          "dateString":"七月",
          "list":[
              {
                  "proName":"花生","proId":"pro_0","proId":"pro_0",
                  "img":"/static/peanut.png",
                  "price":"3",
                  "stock":"6"
              },
              {
                  "proName":"葵花","proId":"pro_1",
                  "img":"/static/sunflowerSeed.png",
                  "price":"3",
                  "stock":"6"
              }
          ]
      },
      {
         
          "date":"2019-8",
          "dateString":"八月",
          "list":[
              {
                  "proName":"花生","proId":"pro_0","proId":"pro_0",
                  "img":"/static/peanut.png",
                  "price":"3",
                  "stock":"6"
              },
              {
                  "proName":"葵花","proId":"pro_1",
                  "img":"/static/sunflowerSeed.png",
                  "price":"3",
                  "stock":"6"
              }
          ]
      },
      {
         
          "date":"2019-9",
          "dateString":"九月",
          "list":[
              {
                  "proName":"花生","proId":"pro_0","proId":"pro_0",
                  "img":"/static/peanut.png",
                  "price":"3",
                  "stock":"6"
              },
              {
                  "proName":"葵花","proId":"pro_1",
                  "img":"/static/sunflowerSeed.png",
                  "price":"3",
                  "stock":"6"
              }
          ]
      },
      {
         
          "date":"2019-10",
          "dateString":"十月",
          "list":[
              {
                  "proName":"花生","proId":"pro_0","proId":"pro_0",
                  "img":"/static/peanut.png",
                  "price":"3",
                  "stock":"6"
              },
              {
                  "proName":"葵花","proId":"pro_1",
                  "img":"/static/sunflowerSeed.png",
                  "price":"3",
                  "stock":"6"
              }
          ]
      },
      {
         
          "date":"2019-11",
          "dateString":"十一月",
          "list":[
              {
                  "proName":"花生","proId":"pro_0","proId":"pro_0",
                  "img":"/static/peanut.png",
                  "price":"3",
                  "stock":"6"
              },
              {
                  "proName":"葵花","proId":"pro_1",
                  "img":"/static/sunflowerSeed.png",
                  "price":"3",
                  "stock":"6"
              }
          ]
      },
      {
         
          "date":"2019-12",
          "dateString":"十二月",
          "list":[
              {
                  "proName":"花生","proId":"pro_0","proId":"pro_0",
                  "img":"/static/peanut.png",
                  "price":"3",
                  "stock":"6"
              },
              {
                  "proName":"葵花","proId":"pro_1",
                  "img":"/static/sunflowerSeed.png",
                  "price":"3",
                  "stock":"6"
              }
          ]
      }
      ];
      commit('setBookingMonthList', {
        bookingMonthList: data
      })
      // return axios.get(api.getBookingMonthList).then(res => {
      //     commit('setBookingMonthList', {
      //       bookingMonthList: res.data.data
      //     })
      // })
    },    
    getMapData({commit,state,dispatch},proId){
      let data1=[
        {
          "img":"/static/sunflowerSeed.png",
          "name":"山东"
        },
        {
            "img":"/static/sunflowerSeed.png",
            "name":"甘肃"
        },
        {
            "img":"/static/sunflowerSeed.png",
            "name":"河北"
        }        
      ];
      let data2=[
        {
          "img":"/static/peanut.png",
          "name":"黑龙江"
        },
        {
            "img":"/static/peanut.png",
            "name":"山东"
        }       
      ];  
      let data;
      if(proId == 'pro_0'){
        data = data2;
      }else{
        data = data1;
      }  
      commit('setMapData', {
        mapData: data
      })        
      // let url = api.getMapData1;
      // if(proId == 'pro_0'){
      //   url = api.getMapData2;
      // }else{
      //   url = api.getMapData1;
      // }
      // return axios.get(url).then(res => {
      //     commit('setMapData', {
      //       mapData: res.data.data
      //     })
      // })
    }, 
    getPriceData({commit,state,dispatch},proId){
      let data = {
        "tbody": [
          {
              "name": "价格",
              "04/01": "40252",
              "04/02": "46905",
              "04/03": "5313",
              "04/04": "87366",
              "04/05": "43214",
              "04/06": "53582",
              "04/07": "35325"
          }
      ],
      "thead": [
          {
              "name": "部门",
              "value": "name"
          },
          {
              "name": "04/01"
          },
          {
              "name": "04/02"
          },
          {
              "name": "04/03"
          },
          {
              "name": "04/04"
          },
          {
              "name": "04/05"
          },
          {
              "name": "04/06"
          },
          {
              "name": "04/07"
          }
      ]        
      }
      commit('setPriceData', {
        priceData: data
      })
      // return axios.get(api.getPriceData).then(res => {
      //     commit('setPriceData', {
      //       priceData: res.data.data
      //     })
      // })
    }, 
    getStockData({commit,state,dispatch},proId){
      let data={
        "list": [
          {
            "value": 35,
            "name": "西南"
          },
          {
            "value": 50,
            "name": "西北"
          },
          {
            "value": 83,
            "name": "东北"
          },
          {
            "value": 43,
            "name": "华南"
          },
          {
              "value": 60,
              "name": "华中"
          },
          {
          "value": 66,
          "name": "华东"
          },
          {
          "value": 78,
          "name": "华北"
          }
        ]        
      };
      commit('setStockData', {
        stockData: data
      })      
      // return axios.get(api.getStockData).then(res => {
      //     commit('setStockData', {
      //       stockData: res.data.data
      //     })
      // })
    },
    getTradeData({commit,state,dispatch},proId){
      let data = {
        "tbody": [
          {
              "name": "交易",
              "04/01": "40252",
              "04/02": "46905",
              "04/03": "43130",
              "04/04": "77366",
              "04/05": "43214",
              "04/06": "53582",
              "04/07": "65325"
          }
      ],
      "thead": [
          {
              "name": "部门",
              "value": "name"
          },
          {
              "name": "04/01"
          },
          {
              "name": "04/02"
          },
          {
              "name": "04/03"
          },
          {
              "name": "04/04"
          },
          {
              "name": "04/05"
          },
          {
              "name": "04/06"
          },
          {
              "name": "04/07"
          }
      ]        
      }
      commit('setTradeData', {
        tradeData: data
      })      
      // return axios.get(api.getTradeData).then(res => {
      //     commit('setTradeData', {
      //       tradeData: res.data.data
      //     })
      // })
    },
    getPlatIndexData({commit,state,dispatch},proId){
      let data = [
        {
          "id":"001",
          "producingArea":"岔路口",
          "productVariety":"稻花香",
          "productName":"富硒稻花香-原粮",
          "growingAreas":"800（公顷）",
          "predictYield":"534（吨）",
          "yield":"698（吨）",
          "storage":"4.59（吨）",
          "latestTransactionPrice":"4.56（元/公斤）"
      },
      {
          "id":"002",
          "producingArea":"岔路口",
          "productVariety":"小町米",
          "productName":"德惠小町米-大米",
          "growingAreas":"800（公顷）",
          "predictYield":"534（吨）",
          "yield":"698（吨）",
          "storage":"4.59（吨）",
          "latestTransactionPrice":"4.56（元/公斤）"
      },
      {
          "id":"003",
          "producingArea":"岔路口",
          "productVariety":"稻花香",
          "productName":"优质稻花香",
          "growingAreas":"800（公顷）",
          "predictYield":"534（吨）",
          "yield":"698（吨）",
          "storage":"4.59（吨）",
          "latestTransactionPrice":"4.56（元/公斤）"
      },
      {
          "id":"004",
          "producingArea":"岔路口",
          "productVariety":"稻花香",
          "productName":"富硒补血稻花香",
          "growingAreas":"800（公顷）",
          "predictYield":"534（吨）",
          "yield":"698（吨）",
          "storage":"4.59（吨）",
          "latestTransactionPrice":"4.56（元/公斤）"
      },
      {
          "id":"005",
          "producingArea":"岔路口",
          "productVariety":"稻花香",
          "productName":"富硒稻花香-原粮",
          "growingAreas":"800（公顷）",
          "predictYield":"534（吨）",
          "yield":"698（吨）",
          "storage":"4.59（吨）",
          "latestTransactionPrice":"4.56（元/公斤）"
      }        
      ]
      commit('setPlatIndexData', {
        platIndexData: data
      })      
      // return axios.get(api.getPlatIndexData).then(res => {
      //     commit('setPlatIndexData', {
      //       platIndexData: res.data.data
      //     })
      // })
    }, 
    getHotProList({commit,state,dispatch},proId){
      let data = [
        {
          "img":"/static/u832.png",
          "id":"001",
          "name":"大豆",
          "desc":"包括黄豆、黑豆、青豆等，是一种油粮兼用的农产品，蛋白质含量高",
          "minPrice":"2000",
          "maxPrice":"3000",
          "onsaleNum":"20"
      },
      {
          "img":"/static/u832.png",
          "id":"002",
          "name":"大豆",
          "desc":"包括黄豆、黑豆、青豆等，是一种油粮兼用的农产品，蛋白质含量高",
          "minPrice":"2000",
          "maxPrice":"3000",
          "onsaleNum":"20"
      },
      {
          "img":"/static/u832.png",
          "id":"003",
          "name":"大豆",
          "desc":"包括黄豆、黑豆、青豆等，是一种油粮兼用的农产品，蛋白质含量高",
          "minPrice":"2000",
          "maxPrice":"3000",
          "onsaleNum":"20"
      },
      {
          "img":"/static/u832.png",
          "id":"004",
          "name":"大豆",
          "desc":"包括黄豆、黑豆、青豆等，是一种油粮兼用的农产品，蛋白质含量高",
          "minPrice":"2000",
          "maxPrice":"3000",
          "onsaleNum":"20"
      },
      {
          "img":"/static/u832.png",
          "id":"005",
          "name":"大豆",
          "desc":"包括黄豆、黑豆、青豆等，是一种油粮兼用的农产品，蛋白质含量高",
          "minPrice":"2000",
          "maxPrice":"3000",
          "onsaleNum":"20"
      }        
      ];
      commit('setHotProList', {
        hotProList: data
      })
      // return axios.get(api.getHotProList).then(res => {
      //     commit('setHotProList', {
      //       hotProList: res.data.data
      //     })
      // })
    },
    getPlatNotices({commit,state,dispatch},proId){
      let data = [
        {
          "id":"001",
          "img":"/static/u267.png"
      },
      {
          "id":"002",
          "img":"/static/u268.png"
      },
      {
          "id":"003",
          "img":"/static/u267.png"
      },
      {
          "id":"004",
          "img":"/static/u268.png"
      }        
      ]
      commit('setPlatNotices', {
        platNotices: data
      })
      // return axios.get(api.getPlatNotices).then(res => {
      //     commit('setPlatNotices', {
      //       platNotices: res.data.data
      //     })
      // })
    },         
  }
}
export default homepage;