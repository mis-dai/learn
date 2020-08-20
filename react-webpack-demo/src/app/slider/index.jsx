import  React from 'react'
import  { Menu } from 'antd'
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import MenuItem from 'antd/lib/menu/MenuItem';
import { Link } from 'react-router-dom'


export default () => {
 const { SubMenu } = Menu
  return(
    <>
        <Menu mode="inline">
            <SubMenu key="sub1"
                icon={<MailOutlined />} 
                title="运动"
            >
                <Menu.Item><Link to="/bootstrap">瑜伽</Link></Menu.Item>
                <Menu.Item><Link to="/sports">跑步</Link></Menu.Item>
            </SubMenu>

            <SubMenu key="sub2"
                icon={<AppstoreOutlined />} 
                title="饮食"
            >
                <MenuItem>水果</MenuItem>
                <MenuItem>饮料</MenuItem>
                <MenuItem><Link to="/foods">正餐</Link></MenuItem>
            </SubMenu>

            <SubMenu key="sub3"
                title="美妆"
                icon={<AppstoreOutlined />} 
            >
                <MenuItem>护肤</MenuItem>
                <MenuItem>化妆</MenuItem>
            </SubMenu>

            <SubMenu key="sub4"
              title="服饰"
              icon={<AppstoreOutlined />}
            >
                <MenuItem>穿搭</MenuItem>
            </SubMenu>
        </Menu>
    </>
  )
}