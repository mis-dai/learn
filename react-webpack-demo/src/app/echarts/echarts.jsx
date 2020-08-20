import React, {useRef} from 'react';
import { Button} from 'antd';
import echarts from 'echarts/lib/echarts.js';
import  'echarts/lib/chart/bar';
import  'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/title'

export default () => {
    const ref1 = useRef()
    const changeView = () => {
        var dom = document.getElementById("echart01")
        var chart = echarts.init(dom)
        var option = {
            xAxis:[
              {type: 'category',gridIndex: 0},
              {type: 'category',gridIndex: 1},

            ],
            yAxis: [
              {gridIndex: 0},
              {gridIndex: 1}
            ],
            grid:[
              {bottom: '55%'},
              {top: '55%'}
            ],
            legend: {},
            tooltip: {},
            dataset:{
                source: [
                    ["name","1月","2月","3月"],
                    ["衣服", 12, 26, 78],
                    ["裤子",35, 12, 32],
                    ["袜子",12, 11, 22]
                  ]
                },
            series:[
              // 不用dataset
              /*{ 
                name: '1月',
                type: 'bar',
                data: [12,35,12]
              },
              {
                name: '2月',
                type: 'bar',
                data: [26,12,11]
              }*/

              // 用dataset
              {type: 'bar', seriesLayoutBy: 'row'},
              {type: 'bar', seriesLayoutBy: 'row'},
              {type: 'bar', seriesLayoutBy: 'row'},
              /*
              {type: 'bar',color: 'yellow'},
              {type: 'bar',color: '#342232'},
              {type: 'bar'},*/

              // 饼图
              {
                  type: 'pie',
                  radius: 30,
                  center: ['80%',75],
                  data:[
                      {value:235, name:'视频广告'},
                      {value:274, name:'联盟广告'},
                      {value:310, name:'邮件营销'},
                  ]
              },
              {
                  type: 'bar',
                  xAxisIndex: 1, 
                  yAxisIndex: 1,
                  encode: {
                      x: 'name',
                      y: '3月'
                  }
              }
            ]
        }
          chart.setOption(option)
  }

  return(
    <>
        <Button onClick={changeView}> 点击</Button>
        <div id="echart01" ref={ref1} style={{width: '1000', height: '600'}}></div>
    </>
  )
}