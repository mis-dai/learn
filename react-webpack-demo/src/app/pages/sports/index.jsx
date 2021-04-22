import React from 'react';
import {store, Context} from './store.js'
import { Detail } from './detail.jsx'


export default () => {
  const values = store()
  const {data, setData} = values
  return(
    <Context.Provider value={values}>
        <h1>测试是否接收store的数据:{data.age}</h1>
        <Detail />
    </Context.Provider>
  )
}
