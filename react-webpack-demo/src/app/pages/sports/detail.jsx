import React, { useContext } from 'react'
import {Context} from './store.js'

export const Detail = () => {
    const {data} = useContext(Context)
    return(
        <>
            <p>测试上下文的传值：{data.name}</p>
        </>
    )
}
