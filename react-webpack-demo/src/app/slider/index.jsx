import  React, {useState} from 'react'
import  { Menu } from 'antd'
import { MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import { rotues } from './menuData.js'


export default () => {
 const { SubMenu } = Menu
 const { menuList} =  rotues()

//  方法
const jump = ({ item, key, keyPath, domEvent }) => {
  console.log("跳转",item)
  console.log("跳转",key)
  console.log("跳转",keyPath)
  console.log("跳转",domEvent)

}

  return(
    <>
          {/* 循环多层  要return 多层才能拿到值 */}
            {/* { menuList.map((item, index) => {
                 return item.children.map((it, i) => {
                    return <h1>{it.name}</h1>
                    })
                })
            } */}
        <Menu  mode="inline" onClick={jump}>
            { menuList.map((item, index) => {
              return  <SubMenu key={index} icon={<MailOutlined />} title={item.name}>
                      {item.children.map((it,i) => {
                        return <Menu.Item key={it.url} >{it.name}</Menu.Item>
                        })}
                      </SubMenu>
              })
            }
        </Menu>
    </>
  )
}
