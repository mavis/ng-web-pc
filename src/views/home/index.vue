<template>
  <div v-title="''">
      <layout>
        <div slot="content"  class="main-content clearfix">
            <div class="content-1">
              <div class="content-1-l fl">
              <!-- <category-module></category-module> -->
              llllll
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
                        <div class="tab-pane">
                          222222
                        </div>
                      </a-tab-pane>
                    </a-tabs>
                </div>
              </div>
            </div>
            <div class="content-moudle">
                <div class="echarts">
                  <div :style="{height:'600px',width:'100%'}" ref="myEchart"></div>
                </div>
            </div>
            <div class="content-moudle">
              
            </div>
        </div>
      </layout>
  </div> 
</template>
<script>
import { mapState, mapActions,mapMutations } from 'vuex';
import Layout from '../../components/layout/layout'
import categoryModule from '../../components/category/category'
import '../../../node_modules/echarts/map/js/china.js' // 引入中国地图数据
export default {  
  components: {
    Layout,categoryModule
  },
  data(){
      return{
         autoplay:true,
         dots:false,
         areaData:[
                {name: '河北', value: 18},
                ],
         geoCoordMap:{
                    '海门':[121.15,31.89],
                    '鄂尔多斯':[109.781327,39.608266],
                    '招远':[120.38,37.35],
                    '舟山':[122.207216,29.985295],
                    '齐齐哈尔':[123.97,47.33],
                    '盐城':[120.13,33.38],
                    '赤峰':[118.87,42.28],
                    '青岛':[120.33,36.07],
                    '乳山':[121.52,36.89],
                    '河北':[114.48,38.04]
                }
      }
  },  
  computed: {
    ...mapState('homepage',[
       'topBanners'
    ]),
  },  
  methods:{
    ...mapActions('homepage',[
      'getTopBanners'
    ]),
    chinaConfigure() {
      var _me = this;
      var convertData = function (data) {
          var res = [];
          for (var i = 0; i < data.length; i++) {
              var geoCoord = _me.geoCoordMap[data[i].name];
              if (geoCoord) {
                  res.push({
                      name: data[i].name,
                      value: geoCoord.concat(data[i].value)
                  });
              }
          }
          return res;
      };           
      let myChart = this.$echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置    
      window.onresize = myChart.resize;
      myChart.setOption({ // 进行相关配置
        backgroundColor: "#fff",
        tooltip: {
          show:false
        }, // 鼠标移到图里面的浮动提示框
        dataRange: {
          show: false,
          min: 0,
          max: 1000,
          text: ['High', 'Low'],
          realtime: true,
          calculable: true,
          color: ['orangered', 'yellow', 'lightskyblue']
        },
        geo: { // 这个是重点配置区
          map: 'china', // 表示中国地图
          roam: false,
          label: {
            normal: {
              show: false, // 是否显示对应地名
              textStyle: {
                color: 'rgba(0,0,0,0.4)'
              }
            },
            emphasis: {
              show:false
            }
          },
          itemStyle: {
            normal: {
              borderColor: '#fff',
              areaColor:'#4A82BA'
            },
            emphasis: {
              areaColor: '#3AA0FF',
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        },
        series: [
          {
            type: 'scatter',
            coordinateSystem: 'geo', // 对应上方配置
            data: convertData(_me.areaData),
            symbol:"image://static/u832.png",
            symbolSize:18
          }
        ]
      })
      }
  },
  created(){
    this.getTopBanners();
  },
      mounted() {
      this.chinaConfigure();
    },
}
</script>
<style lang="less">
@import url(./index.less);
</style>

