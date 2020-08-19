import React, { useStore, useContext } from 'react';

const store = () =>{
  const [ data, setData ] = useStore({
    name: '团子',
    age: 25,
    sex: "女",
    address: "上海市静安区",
    phone: '1372929387923'
  })

  return {
    data,
    setData
  }
}

export default store()()