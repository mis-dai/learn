
//promise 


//检测到settimeout 存入队列中 准备执行

//先同步，当前存在微任务的话，那么就执行所有的微任务 ，微任务都执行完之后，执行下一个宏任务
// settimeout宏任务  promise的微任务 

setTimeout(() => {
  console.log("1")
},2000)

new Promise((resolve) =>{
  resolve("2") //promise里是同步任务  then里是微任务
  console.log("3")
  }
).then(value => console.log(value))

console.log("4")  //3,4,2,1


// new Promise((resolve) =>{
//   setTimeout(() => {
//     console.log("1")
//     resolve("2") 
//     }, 0)
//   console.log("3")
//   }
// ).then(value => console.log(value))
// console.log("4")  //3,4,1,2