import React ,{useState} from 'react';

export default () => {
  const [name, setName] = useState("ceshi")
  const [data, setData] = useState(1)
  const change =() =>{
    setData(data+1)
    setData(data+1)
  }
  return(
    <>
    <h1>this is food</h1>
    <h1>{name}</h1>
    <button onClick={() => setData(data+1)}>改变</button>
    显示：{data}
    </>
  )
}

// 状态更新异步的解决方法
/* 
  1、函数式写法
  直接传入一个函数
    setState: this.setState((state, props) => ({data: 111}))

    useState:  setState( x => x+1 )
 

2、加入第二个参数，第二个参数是个回调函数，可以在这个回调函数中获取到刚刚更新得到的值，不过这个值实在 render 方法执行完毕之后才进行回调的
  this.setState({data: 111}, function(){ console.log(this.state.data) })


3、对象的扩展运算符
用户自定义的属性，放在扩展运算符后面，则扩展运算符内部的同名属性会被覆盖掉
      setBtnArrStatus({
      ...btnArrStatus,
      [`${key}Disabled`]: true,
    });
**/
