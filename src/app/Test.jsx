import React from 'react'
import { Button, Input } from 'antd';
// import echarts from 'echarts'
// var echarts = require('echarts')

export default () => {
  const obj = {
    name: '小鹿',
    print: () =>{
      console.log('this2222',this)
    }
  }
  obj.print()
  const change2 = () => {
    var that = this
    console.log("this指向",that)
    // 构造函数
    let xiaohong = new Person("ming")
    console.log("11111",xiaohong.name) 
    // 对象调用
    obj.print()
  }


  function Person (name){
    this.name = name,
    change2.prototype.say = function () {
      console.log("this1111指向",this1)
    }
  }

  return(
    <>
      <Button onClick={change2}>点击2</Button>

    </>
  )
}