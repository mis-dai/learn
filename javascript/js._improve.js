/**
 * 判断是否为空 null undefine "" 0
 */
const m = undefined
const a = m||"11"
console.info(a)

/**
 * ?? 判断是否为null undefined
 */
console.log(null??'不存在')
console.log(0??'不存在')
console.log(undefined??'不存在')

/**
 *   ~ 等于 -(n+1) 可以用于判读是否含有
 */
let b = "nihao"
 console.log('判断是否含有n',~b.indexOf('n'))
 console.log('判断是否含有l',~b.indexOf('l'))

console.log(!!0) //转为布尔值

/**
 *  ~~ 等于 parseInt
 */

console.log('~~',~~4.5)
console.log('~~',~~-1.2)

/**
 * 取整 |0
 */

console.log('|0',1.3 | 0 )

/**
 * 判断奇偶数 & 1
 */
 console.log(' & 1', !!(3 & 1) )
 console.log(' & 1', !!(4 & 1) )
