import React, { useRef, createRef } from 'react';
import Slider from './Slider.jsx'
import Echarts from './echarts/echarts.jsx'
import { Layout, Menu, Button} from 'antd';
import  'echarts/lib/chart/bar';
import  'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/title'

export default () =>{
  const { Header, Content, Sider } = Layout
  return(
    <>
        <Layout>
          {/* 头部导航 */}
            <Header>
                <Menu theme="dark" mode="horizontal">
                  <Menu.Item key="1">nav 1</Menu.Item>
                  <Menu.Item key="2">nav 2</Menu.Item>
                  <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
        </Layout>
        <Layout>
          {/* 侧边导航栏 */}
            <Sider>
                <Slider />
            </Sider>
            {/* 正文内容 */}
            <Layout style={{ padding: '0 24px 24px' }}>  
                <Content style={{background: '#fff'}}>
                  <Echarts />
                </Content>
            </Layout>
        </Layout>

    </>
  )
}