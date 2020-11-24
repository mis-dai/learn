

// reduce 封装promise队列
let arr = ["小女孩","test","nihao"]

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