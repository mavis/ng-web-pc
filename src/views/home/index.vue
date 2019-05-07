<template>
  <div v-title="'云耕供销网'">
      <layout>
        <div slot="content"  class="main-content clearfix">
            <div class="content-1">
              <div class="content-1-l fl">
                <category-module></category-module>
              </div>
              <div class="content-1-m fl">
                  <a-carousel effect="fade" :dots='dots' :autoplay="autoplay" arrows>
                      <div
                        slot="prevArrow" slot-scope="props"
                        class="custom-slick-arrow"
                        style="left: 10px;zIndex: 1"
                      >
                        <a-icon type="left-circle" />
                      </div>
                      <div
                        slot="nextArrow" slot-scope="props"
                        class="custom-slick-arrow"
                        style="right: 10px"
                      >
                        <a-icon type="right-circle" />
                      </div>
                    <div v-for="item in topBanners" :key="item.img">
                      <img :src="item.img">
                    </div>
                  </a-carousel>
              </div>
              <div class="content-1-r fl">
                <div class="account-logo">
                  <img src="../../assets/img/u192.png">
                </div>
                <div class="account-welcome ">
                    Hi，欢迎来到云耕供销网
                </div>
                <div  class="account-btn">
                  <a-button type="primary" class="btn-login">登录</a-button>
                  <a-button class="btn-register">免费注册</a-button>
                </div>
                <div class="tabbox">
                    <a-tabs defaultActiveKey="2">
                      <a-tab-pane tab="消息通知" key="1">
                        <div class="tab-pane">
                            暂无数据
                        </div>
                      </a-tab-pane>
                      <a-tab-pane tab="成交动态" key="2" forceRender>
                        <div class="tab-pane dynamicsTable">
                         <a-table :columns="dynamicsColumns" :dataSource="tradeDynamics" :pagination="dynamicsTablePage">
                           
                         </a-table>
                        </div>
                      </a-tab-pane>
                    </a-tabs>
                </div>
              </div>
            </div>
            <div class="content-moudle clearfix content-moudle-border" >
                <div class="content-moudle-title">
                  预售专区
                </div>
                <slider :list="bookingMonthList"  @pro-area="getProArea" style="padding-bottom:20px"></slider>                
                <div class="echarts-map" >
                  <china-map :area-data="mapData"></china-map>
                </div>
                <div class="echarts-line">
                  <div class="echarts-price-line">
                    <price-line :line-data="priceData"></price-line>
                  </div>
                  <div class="echarts-stock-bar">
                    <stock-bar :chart-data="stockData"></stock-bar>
                  </div>
                  <div class="echarts-trade-line">
                    <trade-line :line-data="tradeData"></trade-line>
                  </div> 
                </div>

            </div>
            <div class="content-moudle">
              <div class="content-moudle-title" style="color:#6699FF;border-color:#6699FF">
                  平台指数
              </div>
              <div class="platIndex-table">
                <a-table :columns="platIndexColumns" :dataSource="platIndexData" :pagination="platIndexTablePage">
                           
                </a-table>
              </div>
            </div>
            <div class="content-moudle">
              <div class="content-moudle-title" style="color:#FF511A;border-color:#FF511A">
                  热销产品
                  <div class="more">
                    <router-link tag="a" :to="{path:'/productList'}">查看全部<a-icon type="right" /></router-link>
                  </div>
              </div>
              <div class="hot-pro-list">
                <a-card v-for="item in hotProList" :key="item.id" class="card"
                  hoverable
                  style="flex:1"
                >
                  <img
                    alt="example"
                    :src="item.img"
                    slot="cover"
                  />
                  <div class="name">{{item.name}}</div>
                  <a-card-meta>
                    <template slot="description">{{item.desc}}</template>
                  </a-card-meta>
                  <div class="price"><span >{{item.minPrice}}-{{item.maxPrice}}</span>元/吨</div>
                  <div><span>挂单量：</span><span  class="onsaleNum">{{item.onsaleNum}}</span>吨</div>
                </a-card>
              </div>
            </div> 
            <div class="content-moudle" >
              <div class="content-moudle-title" style="color:#4964BE;border-color:#4964BE">
                  平台公告
                  <div class="more">
                    <router-link tag="a" :to="{path:'/productList'}">更多品牌<a-icon type="right" /></router-link>
                  </div>
              </div>
              <div class="flex  platNotice-list">
                <div class="flex-item" v-for="item in  platNotices" :key="item.id">
                  <img :src="item.img">
                </div>
              </div>
            </div>           
        </div>
      </layout>
  </div> 
</template>
<script>
import { mapState, mapActions,mapMutations } from 'vuex';
import Layout from '../../components/layout/layout'
import categoryModule from '../../components/category/category'
import slider from '../../components/slider/slider'
import ChinaMap from '../../components/chinaMap/map'
import PriceLine from '../../components/charts/priceLine'
import StockBar from '../../components/charts/stockBar'
import TradeLine from '../../components/charts/tradeLine'
export default {  
  components: {
    Layout,categoryModule,slider,ChinaMap,PriceLine,StockBar,TradeLine
  },
  data(){
      return{
         autoplay:true,
         dots:false,
         chinaMap:'',
          dynamicsColumns:[
            {
              dataIndex: 'producingArea',
              key: 'producingArea',
              title:"产地"
            }, 
            {
              title: '产品名称',
              dataIndex: 'productName',
              key: 'productName',
            },
            {
              title: '成交价格',
              dataIndex: 'finalPrice',
              key: 'finalPrice',
            }, 
            {
              title: '成交量',
              key: 'businessVolume',
              dataIndex: 'businessVolume'
            },
            {
              title: '成交时间',
              key: 'closingTime',
              dataIndex: 'closingTime'
            }
          ] ,
          platIndexColumns:[
            {
              dataIndex: 'producingArea',
              key: 'producingArea',
              title:"产地"
            }, 
            {
              title: '品种',
              dataIndex: 'productVariety',
              key: 'productVariety',
            },
            {
              title: '商品名称',
              dataIndex: 'productName',
              key: 'productName',
            },
            {
              title: '种植面积',
              dataIndex: 'growingAreas',
              key: 'growingAreas',
            },
            {
              title: '预估产量',
              dataIndex: 'predictYield',
              key: 'predictYield',
            },
            {
              title: '实际产量',
              dataIndex: 'yield',
              key: 'yield',
            },
            {
              title: '剩余库存量',
              dataIndex: 'storage',
              key: 'storage',
            }, 
            {
              title: '最新成交价',
              key: 'latestTransactionPrice',
              dataIndex: 'latestTransactionPrice'
            }
          ] ,
          dynamicsTablePage:false,
          platIndexTablePage:false     
      }
  },  
  computed: {
    ...mapState('homepage',[
       'topBanners','notice','tradeDynamics','bookingMonthList','mapData',
       'priceData','stockData','tradeData','platIndexData','hotProList','platNotices'
    ])
  },  
  methods:{
    ...mapActions('homepage',[
      'getTopBanners','getNotices','getTradeDynamics','getBookingMonthList',
      'getMapData','getPriceData','getStockData','getTradeData','getPlatIndexData',
      'getHotProList','getPlatNotices'
    ]),

    getProArea:function(proId,date){
      this.getMapData(proId,date);
    }
  },
  created(){
    this.getTopBanners();
    this.getTradeDynamics();
    this.getBookingMonthList();
    this.getProArea();
    this.getPriceData();
    this.getTradeData();
    this.getStockData();
    this.getPlatIndexData();
    this.getHotProList();
    this.getPlatNotices();
  },

}
</script>
<style lang="less">
@import url(./index.less);   
</style>

