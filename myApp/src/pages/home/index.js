// 主页
import React, { Component } from 'react'
import { View, Text } from 'react-native';

import { HeaderImageScrollView } from 'react-native-image-header-scroll-view';
import {inject, observer} from 'mobx-react'

@inject("RootStore")  //引入全局数据
@observer //当全局发生了改变，组件重新渲染

 class Home extends Component{
  handleChange = () => {
    console.log("3333",this)
    this.props.RootStore.changeName("hello")
  }
  render() {
    return(

          <View >
            {/* <HeaderImageScrollView></HeaderImageScrollView> */}
            <Text onPress={this.handleChange}>数据：{this.props.RootStore.name}</Text>
          </View>
    )
  }
}

export default Home
