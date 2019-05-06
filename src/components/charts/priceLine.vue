<template>
    <div class="chart">
        <div class="chart-title">
            <span class="chart-title-pre">价格指数</span>
            <span class="chart-title-brand">稻花香</span>
        </div>
        <div class="price-line-chart" id="priceLine"></div>
    </div>
</template>
      
<script>
    import chartOption from '../../assets/js/chartOption.js'

    export default {
        data() {
            return {
                chart: '',
                legend: [],
                legendMin:1,
                legendMax:6,
                checkedLegends:[],
                checkedLegendColors:[],
                defaultLegend:[]
            }
        },
        props: {
            lineData: Object        
        },
        watch: {
            lineData() {
                this.initLine();
            }
        },
        methods: {
            initLine() {
            let that = this
            that.legend = []
            let legendData = []  // legend
            let xAxisData = []   // x轴数据
            let seriesData = []   // 系列数据
            let isPercent = false   // 数据是否为百分比

            if (!that.lineData) {
                return
            }
            let theadData = that.lineData.thead;
            for(let k=1,len=theadData.length;k<len;k++){
              xAxisData.push(theadData[k].name);
            }
            for (let i = 0, len = that.lineData.tbody.length; i < len; i++) {
                let tmp = that.lineData.tbody[i];
                let show = true;
                that.legend.push({
                    name: tmp.name,
                    show: show,
                    textStyle: {
                        color: '#666'
                    }
                })
                if(show){
                    let yAxisData = []; //y轴数据
                    let items = Object.keys(tmp);
                    for (let j = 0, pLen = xAxisData.length; j < pLen; j++) {    
                        // if(i==0){
                        //     xAxisData.push(items[j]);
                        // } 
                        let item = xAxisData[j];
                        let yData = tmp[item]?tmp[item]:'';
                        if(yData.includes('%')){
                            yData = yData.replace('%','');
                            isPercent = true;
                        }
                        yAxisData.push(yData)
                    }
                    let itemColor = "#3AA1FF";
                    seriesData.push({
                        name: tmp.name,
                        type: 'line',
                        symbol: 'circle',
                        showAllSymbol:true,
                        symbolSize: 6,
                        hoverAnimation: false,
                        data: yAxisData,
                        itemStyle:{
                            normal: {
                                show:true,
                                color:itemColor
                            }
                        },
                        lineStyle: {
                            normal: {
                                color:itemColor,
                                width:1,             
                            }
                        }
                    });
                }
               
            }

            //判断图形已初始化,且未销毁
            if (that.chart && !that.chart.isDisposed()) {
                that.chart.clear();
                that.chart.dispose();
            }
            that.chart = this.$echarts.init(document.getElementById('priceLine'));
            let option = chartOption.line;
            option.xAxis.data = xAxisData;
            if (isPercent) {
                option.yAxis.axisLabel.formatter = '{value} %';
            } else {
                option.yAxis.axisLabel.formatter = '{value}';
            }
            option.series = seriesData;
            option.legend.show = false;
            that.chart.setOption(option);
            that.chart.setOption({
                    yAxis:[{
                        name:'元/吨',
                        type:"value"
                    }]
                });
            }
        },

    }
</script>
      
<style lang="less" scoped>
    @import "./charts.less";
</style>
      