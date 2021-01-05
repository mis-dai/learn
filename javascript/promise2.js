

// reduce 封装promise队列
let arr = ["小女孩","test","nihao"]
let arr2 = ["xiao红","nihao","hello","main"]

function queue(n) {
  n.reduce((promise, item) => {
    return promise.then(() => {
      return new Promise(resolve => {
        setTimeout(() => {
          console.info(item)
          resolve()  //触发里面promise里的状态 否则后续方法不触发
        },1000)
      })
    })
  },Promise.resolve())
}
queue(arr)
// 
// function test(m) {
//   m.reduce((current, i) => {
//     return current.then(() => {
//       return new Promise(resolve => {
//         setTimeout(() => {
//           console.info(i)
//           resolve() 
//         },2000)
//       })
//     })
//   },Promise.resolve())
// }

// test(arr2) //测试练习

function test(obj) {
 obj.reduce((promis,item) => {
    return promise.then(() => {
      return new Promise(resolve => {
        setTimeout
      })
    })
 },Promise.resolve())
}
