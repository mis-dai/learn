//async 和 await
//await 只在async里面，命令后面接的是一个Promise对象，等待Promise对象状态发生变化，得到返回值，但是也可以接任意表达式的返回结果

async function hd() {

}
console.info(hd())  //async 相当于promise对象；await 相当于then()


async function sleep(delay = 2000) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    },delay)
  })
}

async function show() {
  for(const user of ["小红","小绿"]) {
    await sleep()
    console.log(user)
  }
}
show()

/*解决了什么问题
    function login () {
        return new Promise(resolve => {
          resolve('aaaa')
        })
      }
    function getUserInfo (token) {
      return new Promise(resolve => {
        if (token) {
          resolve({
            isVip: true
          })
        }
      })
    }
    function getVipGoods (userInfo) {
      return new Promise(resolve => {
        if (userInfo.isVip) {
          resolve({
            id: 'xxx',
            price: 'xxx'
          })
        }
      })
    }
    function showVipGoods (vipGoods) {
      console.log(vipGoods.id + '----' + vipGoods.price)
    }

(1) promise 写法

    login()
      .then(token => getUserInfo(token))
      .then(userInfo => getVipGoods(userInfo))
      .then(vipGoods => showVipGoods(vipGoods))

(2) async 和 await 改进

    async function call() {
      const token = await login()
      const userInfo = await getUserInfo(token)
      const vipGoods = await getVipGoods(userInfo)
      showVipGoods(vipGoods)
    }
    call()

和Promise的then链调用相比，async/await的调用更加清晰简单，和同步代码一样
*/
