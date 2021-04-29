import React, { useState } from 'react';

export const rotues = () => {
    const [menuList, setMenuList] = useState([
        {
            name: '食物',
            children: [
                {name: '甜点', url: '/sweety'},
                {name: '蔬菜', url: '/vegetables'}
            ]
        },
        {
            name: '运动',
            children: [
                {name: '游泳', url: '/swimming'},
                {name: '跑步', url: '/running'}
            ]
        },        
    ])

    return {
        menuList,
        setMenuList,
    }
}


