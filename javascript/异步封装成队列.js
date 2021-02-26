
// 异步函数a
var a = function () {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve('a')
      }, 1000)
    })
  }
  
  // 异步函数b
  var b = function (data) {
    return new Promise(function (resolve, reject) {
      resolve(data + 'b')
    })
  }
  
  // 异步函数c
  var c = function (data) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(data + 'c')
      }, 2000)
    })
  }


function queue(arr) {
    var sequence = Promise.resolve()
    arr.forEach(function (item) {
      sequence = sequence.then(item)
    })
    return sequence
  }
  
  // 执行队列
  queue([a,b,c])
    .then(data => {
      console.log(data)// abc
    })
