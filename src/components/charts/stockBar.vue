<template> 
    <div class="chart">
        <div class="chart-title">
            <span class="chart-title-pre">库存指数</span>
            <span class="chart-title-brand">稻花香</span>
        </div>        
        <div class="chart">
          <div class="bar-chart" id="stockBar"></div>
        </div>	
    </div> 
    </template> 
    <script>
        import chartOption from '../../assets/js/chartOption.js'

        export default{ 
            data(){
                return {
                   maxNum:0
                }
            },           
            props: [
            'chartData'
            ],	
            watch: {
                chartData(){
                    // this.maxNum = this.chartData.all;
                    this.initBarChart();	
                }
            },			         
            methods:{
            initBarChart() {
              let xAxisData = [];//x轴数据
              let seriesData = [];//y轴数据
              let yAxisData =[];//y轴数据 
              for (let i = 0, len = this.chartData.list.length; i < len; i++) {
                let tmp = this.chartData.list[i];                           
                yAxisData.push({
                    name:tmp.name,
                    value:tmp.value,
                    itemStyle: {
                        color:"#3AA1FF"
                    }
                });
                xAxisData.push(tmp.name);
              }
              seriesData.push({
                  type: 'bar',	      
                  data: yAxisData,
                  barWidth:15,
                //   itemStyle:{
                //     shadowColor:this.chartshadowColor,
                //     shadowBlur: 20,
                //     shadowOffsetX:0,
                //     barBorderRadius:3.5
                //   }    
                });
              //判断图形已初始化,且未销毁
              if (this.barChart && !this.barChart.isDisposed()) {
                this.barChart.clear();
                this.barChart.dispose();
              }
              this.barChart = this.$echarts.init(document.getElementById('stockBar'));
              let option = chartOption.bar;
              option.xAxis.data = xAxisData;
              option.xAxis.name = '参与商家';
              option.xAxis.type = 'category',
              option.series = seriesData;
              this.barChart.setOption(option);
              let toolTipLbl = this.tooltipLbl;
              let color = '#3AA1FF';
            //   let max = this.maxNum;
              this.barChart.setOption({
                    axisPointer: { 
                        lineStyle: {
                            color:'#3AA1FF',
                            width:60
                        }
                    },
                    yAxis:[{
                        name:'(吨)',
                        type:"value"
                    }]
                });
            }      	     		
            }		    
        }  	        
    </script>
 <style lang="less" scoped>
    @import "./charts.less";
</style>