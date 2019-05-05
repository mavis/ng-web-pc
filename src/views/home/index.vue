<template>
  <div v-title="''">
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
                    <a-tabs defaultActiveKey="1">
                      <a-tab-pane tab="消息通知" key="1">
                        <div class="tab-pane">
                            1111
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
            <div class="content-moudle">
                <div class="content-moudle-title">
                  预售专区
                </div>
                <slider :list="bookingMonthList" @pro-area="getProArea"></slider>                
                <div class="echarts">
                  <china-map :area-data="mapData"></china-map>
                </div>
            </div>
            <div class="content-moudle">
              <div class="content-moudle-title" style="color:#6699FF;border-color:#6699FF">
                  平台指数
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

export default {  
  components: {
    Layout,categoryModule,slider,ChinaMap
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
          dynamicsTablePage:false     
      }
  },  
  computed: {
    ...mapState('homepage',[
       'topBanners','notice','tradeDynamics','bookingMonthList','mapData'
    ])
  },  
  methods:{
    ...mapActions('homepage',[
      'getTopBanners','getNotices','getTradeDynamics','getBookingMonthList','getMapData'
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
  },

}
</script>
<style lang="less">
@import url(./index.less);
</style>

