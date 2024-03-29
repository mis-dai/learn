/*
 es6中 新增 API promise 解决回调地狱问题
 js语法新增， promise 是一个构造函数 promise 里面的任务是异步
*/
var fs = require('fs')

//1.创建promise 容器 一旦创建，自动执行里面的函数
var p1 = new Promise((resolve, reject) => {
  console.log(2)
  fs.readFile('./data.txt','utf-8',(err, res) => {
    if(err) {
      reject(err)
    }
    resolve(res)
    })
  }
)

// then 链式方法 
p1
  .then((data) => { //当前resolve状态的结果
    console.log("数据",data)
    return "hello,world"  // 1.return xxx 后面的then 就接收xxx; 2.没有return的话 后面接受 undefine; 3. return 一个新promise对象的时候 ，后面就变成接收 新promise的resolve 结果
  })
  .then((data2) => {
      console.log(data2)
    }, (err) => {
      console.log("err")
  })


// new Promise((resolve, reject) => {
//   resolve("成功")
// }).then(value => {
//     if(value !== "success") {
//       return Promise.reject("fail")
//     }
// }).catch(err => console.info("失败信息："+err)) 


/**
 注意点
*/

Promise.resolve(1)
.then(res => {
    return 2
})
.then(
    Promise.resolve(5)
)
.then(console.log )

//此时打印的是2  因为值穿透
/**
 .then 或者 .catch 的参数期望是函数，传入非函数则会发生值穿透,值return 
*/

  


