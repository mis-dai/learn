/* 设计稿宽度 / 元素宽度 = 手机屏幕 / 手机中元素宽度
  => 手机元素宽度 = 手机屏幕 * 元素宽度 / 设计稿的宽度

*/

import { Dimensions } from 'react-native'

export const screenWidth = Dimensions.get('window').width
export const screenHeight = Dimensions.get('window').height

/**
 * 将px 转为 dp
 */
export const pxToDp =(elepx) => screenWidth *elepx / 375