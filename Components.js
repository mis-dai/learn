import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Input } from 'antd';
// import store from './store';

class Components extends Component {
  // constructor(props) {
  //   super(props)
    // // 只会获取store里的初始值
    // console.log("子组件",store.getState())
    // // 回调跟踪store的状态变化
    // store.subscribe(() => {
    //   console.log("fingyue",store.getState())
    // })
  // }

  render(){
    return(
      <>
        <h1>子组件</h1>
        {this.props.newlist.list.length}
        <Input onChange={this.props.inputValue}></Input>
        {this.props.newlist.input}
      </>
    )
  }
}
// connect 第一个参数 定义store里面所需数据的映射关系
    const propsState = (state) => {
      return{
        newlist: state
      }
    }
// connect 第二个参数 
    const changePropsState = (dispatch) => {
      return {
        inputValue(e) {
          let action = {
            type: 'input_value',
            value: e.target.value
          }
          dispatch(action)
        }
      }
    }

export default connect(propsState,changePropsState)(Components)