import React from 'react'
import { Button, Input } from 'antd';
// import echarts from 'echarts'
// var echarts = require('echarts')

export default () => {
  const change = () => {
    document.getElementById("div01").focus()
    console.log("ceshui",document.getElementById("div01"))
  }
  return(
    <>
      <Input id="div02" ></Input>
      <Input id="div01" placeholder="ceshi"></Input>
      <Button onClick={change}>点击</Button>

    </>
  )
}