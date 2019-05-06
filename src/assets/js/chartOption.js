export default {
    line: {
      title: {
        text: '',
        textStyle: {
          color: '#333',
          fontWeight: 'normal',
          fontSize: '15',
        },
        left: 'center',
      },
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: [8,10,8,10],
        borderColor:'#eee',
        borderWidth:1,
        textStyle: {
          fontSize: '10px',
          color:'#666'
        },
        extraCssText: 'z-index: 100',
        hideDelay:0
      },
      axisPointer: { // 选中线
        lineStyle: {
          color: '#c5c5c5'
        },
        z: 1
      },
      legend: {
        y: 'top',
        x:'left',
        itemWidth: 14,
        itemHeight: 8,
        textStyle: {
          color: '#333',
          fontSize: 12,
          fontFamily:'PingFangSC-Regular'
        },
        padding:[0,10,10,10],
        data: []
      },
      grid: {
        top: '35px',
        left: '5px',
        right: '15px',
        bottom: '0',
        containLabel: true
      },
      toolbox: {
        show: false
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLine: {
          lineStyle: {
            color: '#eee'
          }
        },
        axisTick: {
          show: true,
          inside: true,
          length: 3,
          interval:0 ,  
          lineStyle: {
            color: '#eee'
          }
        },
        axisLabel: {
          color:'#333',
          fontSize:10,
          fontFamily:'DIN',
          textStyle: {
            color: '#333'
          },
          margin: 12,
         //  interval: 0
          // rotate: 60
        },
        data: []
      },
      yAxis: {
        type: 'value',
        axisLine: { // 网格线
          show: false,
          color: '#a7a7a7'
        },
        splitLine: { // 分隔线
          lineStyle: {
            color: ['#eee']
          }
        },
        axisTick: { // 网格线间隔
          show: false,
        },
        axisLabel: {
          color:'#333',
          fontSize:10,
          fontFamily:'DIN',
          textStyle: {
            color: '#333'
          }
        }
      },
      series: [],
      animation: false
    },
    lineDb: {
     title: {
       text: '',
       textStyle: {
         color: '#333',
         fontWeight: 'normal',
         fontSize: '12px'
       },
       left: 'center'
     },
     tooltip: {
       trigger: 'axis',
       backgroundColor: 'rgba(255, 255, 255, 0.9)',
       padding: [8,10,8,10],
       borderColor:'#eee',
       borderWidth:1,
       textStyle: {
         fontSize: '10px',
         color:'#666'
       },
       extraCssText: 'z-index: 100',
       hideDelay:0
     },
     axisPointer: { // 选中线
       lineStyle: {
         color: '#c5c5c5'
       },
       z: 1
     },
     legend: {
       y: 'top',
       x:'left',
       itemWidth: 14,
       itemHeight: 8,
       textStyle: {
         color: '#333',
         fontSize: 12,
         fontFamily:'PingFangSC-Regular'
       },
       padding:[0,10,10,10],
       data: []
     },
     grid: {
       top: '50px',
       left: '5px',
       right: '20px',
       bottom: '0',
       containLabel: true
     },
     toolbox: {
       show: false
     },
     xAxis: {
       type: 'category',
       boundaryGap: false,
       axisLine: {
         lineStyle: {
           color: '#eee'
         }
       },
       axisTick: {
         show: true,
         inside: true,
         length: 3,
         interval:0 ,  
         lineStyle: {
           color: '#eee'
         }
       },
       axisLabel: {
         color:'#a7a7a7',
         fontSize:10,
         fontFamily:'DIN',
         textStyle: {
           color: '#a7a7a7'
         },
         margin: 12,
        //  interval: 0
         // rotate: 60
       },
       data: []
     },
     yAxis: [],
     series: [],
     animation: false
   },
    bar: {
      title: {
        text: '',
        textStyle: {
          color: '#666',
          fontWeight: 'normal',
          fontSize: '12px'
        },
        left: 'center'
      },
      tooltip: {
       trigger: 'axis',
       backgroundColor: 'rgba(255, 255, 255, 0.9)',
       padding: [8,10,8,10],
       borderColor:'#eee',
       borderWidth:1,
       textStyle: {
         fontSize: '10px',
         color:'#666'
       },
       extraCssText: 'z-index: 100',
       hideDelay:0
     },
      axisPointer: { // 选中线
       type:'shadow',
        lineStyle: {
          width:100,
          color:'rgb(28, 129, 242)',
          opacity: 0.05
        },
        z: 1
      },
      legend: {
        y: 'bottom',
        itemWidth: 10,
        itemHeight: 10,
        borderRadius:0,
        borderWidth:0,
        selectedMode:false,
        padding:[0,10,10,10],
        textStyle: {
          color: '#666',
          fontSize: 12,
          fontFamily:'PingFangSC'
        },
        data: []
      },
      grid: {
        top: '20px',
        left: '10px',
        right: '10px',
        bottom: '10px',
        containLabel: true
      },
      toolbox: {
        show: false
      },
      xAxis: {
        type: 'category',
        axisLine: {
          lineStyle: {
            color: '#a7a7a7'
          }
        },
        axisTick: {
          show: true,
          inside: true,
          length: 3,
          lineStyle: {
            color: '#f1f1f1'
          }
        },
        axisLabel: {
         fontSize:10,
         fontFamily:'DIN',
          textStyle: {
            color: '#a7a7a7'
          },
          margin: 12,
          interval: 0
        },
        data: []
      },
      yAxis: {
        type: 'value',
        axisLine: { // 网格线
          show: false
        },
        splitLine: { // 分隔线
          lineStyle: {
            color: ['#eee']
          }
        },
        axisTick: { // 网格线间隔
          show: false
        },
        axisLabel: {
         color:'#a7a7a7',
         fontSize:10,
         fontFamily:'DIN',
         textStyle: {
           color: '#a7a7a7'
         }
       }
      },
      series: [],
      animation: false
    },
    pie: {         
     clockWise : false,          // 默认逆时针
     minAngle: 0,                // 最小角度改为0
     animation: false,
     hoverAnimation:false,
     legend:{
       orient: 'vertical',
       right: 10,
       itemWidth: 10,
       itemHeight: 10,
       top:'15%',
       data:[],
       selectedMode:false,
       textStyle:{
         color: '#666',
         fontSize: 12,
         fontFamily:'PingFangSC'
       }
     },
     tooltip: {
       trigger: 'item',
       backgroundColor: 'rgba(255, 255, 255, 0.9)',
       padding: [8,10,8,10],
       borderColor:'#eee',
       borderWidth:1,
       textStyle: {
         fontSize: '10px',
         color:'#666'
       },
       extraCssText: 'z-index: 300',
       hideDelay:0
     },
     grid: {
       left: 80,
       top:50
     },
     itemStyle:{
       normal:{
         borderColor:'#fff',
         borderWidth:2            
       }
     }
   }
  }