<template>
  <div>
    <div :style="{height:'700px',width:'100%'}" ref="myEchart"></div>
  </div> 
</template>
<script>
import { mapState, mapActions,mapMutations } from 'vuex';
import '../../../node_modules/echarts/map/js/china.js' // 引入中国地图数据

export default {  
    props:{
        areaData:{}
    },
    data(){
        return{
            geoCoordMap:{
                    '北京':[116.405289,39.904987],
                    '上海':[121.472641,31.231707],
                    '天津':[117.190186,39.125595],
                    '香港':[114.10000,22.20000],
                    '辽宁':[123.429092,41.796768],
                    '吉林':[125.324501,43.886841],
                    '黑龙江':[126.642464,45.756966],
                    '内蒙古':[111.751990,40.841490],
                    '宁夏':[106.232480,38.486440],
                    '山西':[112.549248,37.857014],
                    '河北':[114.502464,38.045475],
                    '山东':[117.000923,36.675808],
                    '河南':[113.665413,34.757977],
                    '陕西':[108.948021,34.263161],
                    '湖北':[114.298569,30.584354],
                    '江苏':[118.76741,32.041546],
                    '安徽':[117.283043,31.861191],
                    '湖南':[112.982277,28.19409],
                    '江西':[115.892151,28.676493],
                    '浙江':[120.15358,30.287458],
                    '福建':[119.306236,26.075302],
                    '广东':[113.28064,23.125177],
                    '台湾':[121.5200760,25.0307240],
                    '海南':[110.199890,20.044220],
                    '广西':[108.320007,22.82402],
                    '重庆':[106.504959,29.533155],
                    '云南':[102.71225,25.040609],
                    '贵州':[106.713478,26.578342],
                    '四川':[104.065735,30.659462],
                    '甘肃':[103.834170,36.061380],
                    '青海':[101.777820,36.617290],
                    '西藏':[91.11450,29.644150],
                    '新疆':[87.616880,43.826630],
                    '澳门':[113.549130,22.198750]
                },         
        }
    },   
    methods:{
        chinaConfigure() {
            var _me = this;
            var convertData = function (data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = _me.geoCoordMap[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value),
                            symbol:'image:/'+data[i].img+'',
                            symbolSize:18
                        });
                    }
                }
                return res;
            };           
            if (_me.chinaMap && !_me.chinaMap.isDisposed()) {
            _me.chinaMap.clear();
            _me.chinaMap.dispose();
            }
            let mapChart = this.$echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置   
            _me.chinaMap = mapChart
            window.onresize = mapChart.resize;
            mapChart.setOption({ // 进行相关配置
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
                symbol:'circle',
                
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                }
            ]
            })
        },
    },
    created(){
        
    },
    watch:{
        areaData(){
            this.chinaConfigure();            
        }
    },
    mounted() {
        this.chinaConfigure();
    },
}
</script>
<style lang="less">

</style>

