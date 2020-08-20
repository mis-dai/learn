import React,{ useState } from 'react';
// import $ from 'jquery' //bootstrap 的安装必须依赖jquery的安装为前提
import 'bootstrap/dist/css/bootstrap.css'


export default () => {
  const [data,setData] = useState({})
  return(
    <>
      <h1>this is foods</h1>
      <h1>Example heading <span className="badge badge-secondary">New</span></h1>
    </>
  )
}