import React, { Component } from 'react';
import store from './store';
import { Input, Button } from 'antd'
import { ITEM_ADD } from './store/actionType'

export default class App extends Component {
  constructor(props) {
    super(props)
    console.log("app",store.getState())
    store.subscribe(this.storeChange)
    // this.changeHandle = this.changeHandle.bind(this)
}
  storeChange = () => {
    this.setState(store.getState())
    console.log("更新后的数据",store.getState())
  }

  // 选择框出发的
  changeHandle = (e) => {
    const action = {
      // 封装为了快速查找错误
      type: ITEM_ADD,
      value: e.target.value
    }
    store.dispatch(action)
  }

  // 按钮事件
  clickBtn = () => {
    console.log("按钮触发的值",store.getState())
  }

  // 删除事件
  delete = (i) => {
    console.log("下标",i)
    let action = {
      type: 'delete',
      value: i
    }
    store.dispatch(action)
  }

  render() {
    return(
      <>
        <h1>hello,world</h1>
        {/* 数据循环 */}
        { 
            store.getState().list.map((item,i) => {
              return <div onClick={() => this.delete(i)} key={i}>{item}</div>
          })
        }
        <Input onChange={this.changeHandle}></Input>
        <Button onClick={this.clickBtn}></Button>
        
      </>
    )
  }
}