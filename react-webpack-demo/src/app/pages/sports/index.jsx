import React, { useEffect, useRef } from 'react';
import {store, Context} from './store.js'
import { Detail } from './detail.jsx'
import { post, get } from '../../../axios.js'
import  { API } from '../../request.js'

export default () => {
  const values = store()
  const { requestUrl } = API
  const {data, setData} = values
    const root = useRef(null)
  console.log(this)
  useEffect(() => {
    request()
    console.log('effect',Detail,this)
    console.log('root',root)
  },[])

  // 请求
  const request = ()  => {
    post(requestUrl,
    {
      stageId: 247,
      pageSize: 30
    }
    ).then(res => {
      console.log(res)
    })
  }
  
  return(
    <Context.Provider value={values}>
        <h1>测试是否接收store的数据:{data.age}</h1>
        <Detail />
        <div ref={root}>i hate the work</div>
    </Context.Provider>
  )
}
