import React from 'react';
import Slider from './Slider.jsx'
import { Layout, Menu} from 'antd';

export default () =>{
  const { Header, Content, Sider } = Layout
  return(
    <>
        <Layout>
            <Header>
                <Menu theme="dark" mode="horizontal">
                  <Menu.Item key="1">nav 1</Menu.Item>
                  <Menu.Item key="2">nav 2</Menu.Item>
                  <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
        </Layout>
        <Layout>
            <Sider>
                <Slider />
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}
              >  
                <Content style={{background: '#fff'}}>ceshi</Content>
            </Layout>
        </Layout>

    </>
  )
}