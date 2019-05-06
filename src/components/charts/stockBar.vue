<template> 
    <div>
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
                    this.maxNum = this.chartData.all;
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
                        color:this.chartColor
                    }
                });
                xAxisData.push(tmp.name);
              }
              seriesData.push({
                  type: 'bar',	      
                  data: yAxisData,
                  barWidth:5,
                  itemStyle:{
                    shadowColor:this.chartshadowColor,
                    shadowBlur: 20,
                    shadowOffsetX:0,
                    barBorderRadius:3.5
                  }    
                });
              //判断图形已初始化,且未销毁
              if (this.barChart && !this.barChart.isDisposed()) {
                this.barChart.clear();
                this.barChart.dispose();
              }
              this.barChart = this.$echarts.init(document.getElementById(this.chartId));
              let option = chartOption.bar;
              option.xAxis.data = xAxisData;
              option.xAxis.name = '参与商家';
              option.xAxis.type = 'category',
              option.series = seriesData;
              this.barChart.setOption(option);
              let toolTipLbl = this.tooltipLbl;
              let color = this.chartColor;
              let max = this.maxNum;
              this.barChart.setOption({
                    tooltip: {
                        formatter:function(params) {
                            let per = '';
                            if(!max || max == 0 || params[0].value == 0){
                                per = '-';
                            }else{
                                per = (params[0].value/max*100).toFixed(2)+'%';
                            }
                            let txt = '';                              
                            txt = txt+'<div><span style="width:60px;text-align:right;display:inline-block">'+toolTipLbl[0]+'：</span><span  style="color:'+color+'">'+formatDataCommas(params[0].value)+'</span></div>';
                            txt = txt+'<div><span  style="width:60px;text-align:right;display:inline-block">'+toolTipLbl[1]+'：</span><span  style="color:'+color+'">'+per+'</span></div>';
                            return txt;
                        }   	 	
                    },
                    axisPointer: { 
                        lineStyle: {
                            color:this.chartColor,
                            width:60
                        }
                    }
                });
            }      	     		
            }		    
        }  	        
    </script>
    <style lang="less">
    .chart {
      .bar-chart {
        width: 100%;
        height: 260px;
      }
    }
    </style>