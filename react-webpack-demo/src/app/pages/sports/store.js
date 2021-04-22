import React, { useState, createContext } from 'react';

export const store = () =>{
  const [ data, setData ] = useState({
    name: '团子',
    age: 30,
    sex: "女",
    address: "上海市静安区",
    phone: '1372929387923'
  })

  return {
    data,
    setData
  }
}

export const Context = createContext()
