/**
 * 全局作用域就是window对象，node则是global对象。
 */

/**
 * 块级作用域可通过新增命令let和const声明，
 * 所声明的变量在指定块的作用域外无法被访问。块级作用域在如下情况被创建：
 *  1、在一个函数内部
    2、在一个代码块（由一对花括号包裹）内部
 *  
 */
// for(var i =0; i<5; i++) {
//     console.log(i)
// }
// for(let i =0; i<5; i++){
//     console.log(i)
// }
// console.log('全局',i)
/**对比let声明  let声明作用域是块级内部，外部是读取不到的， */

/**进阶 */
for(var i= 0; i<6; i++) {
    setTimeout(() => {
        console.log(i)
    })
}
console.log('全局',i)
/**
 * 打印结果：(全局，6) 6,6,6,6,6,6
 * 
 * 
 * 知识点 1、单线程 同步任务放在执行栈，先执行 ；
    异步任务放在任务队列，等栈中的任务执行完再执行
    执行顺序可视化： for(var i= 0; i<6; i++) {}  
                    console.log('全局',i)   
                    setTimeout(() => {console.log(i)})  执行6次

    知识点2：let var
            var 变量提升, 函数外部可以读取到i, 此时相当于全局变量 i,
            具体第一个列子已经解释了

    拓展：使它变成0，1，2，3，4，5，6

            法1： 使用立即执行函数()()形成一个块作用域 利用闭包的原理，
                  闭包使一个函数可以继续访问它定义时的作用域。
                  而这个新生成的作用域将每一次循环的当前i值单独保存了下来。
            法2： var 改成 let 注意外部打印获取不到i，声明的i 只在for这个函数作用域内，外部无法访问
*/