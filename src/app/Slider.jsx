import  React from 'react'
import  { Menu } from 'antd'
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import MenuItem from 'antd/lib/menu/MenuItem';


export default () => {
 const { SubMenu } = Menu
  return(
    <>
    <Menu 
      mode="inline">
        <SubMenu key="sub1"
            icon={<MailOutlined />} 
            title="运动"
        >
            <Menu.Item>瑜伽</Menu.Item>
            <Menu.Item>跑步</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2"
            icon={<AppstoreOutlined />} 
            title="饮食"
        >
            <MenuItem>水果</MenuItem>
            <MenuItem>饮料</MenuItem>
            <MenuItem>正餐</MenuItem>
        </SubMenu>
        <SubMenu title="美妆"
            icon={<AppstoreOutlined />} 
        >
            <MenuItem>护肤</MenuItem>
            <MenuItem>化妆</MenuItem>
        </SubMenu>
        <SubMenu title="服饰"
          icon={<AppstoreOutlined />} >
            <MenuItem>穿搭</MenuItem>
        </SubMenu>
    </Menu>
    </>
  )
}