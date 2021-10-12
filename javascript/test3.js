//可以用对象表示链
const a = { val: 'a' }
const b = { val: 'b' }
const c = { val: 'c' }
const d = { val: 'd' }
a.next = b
b.next = c
c.next = d
// console.info(a)
// 链转换
const way = (a) => {
  for( let i in a) {
    if(typeof a[i] == 'object') {
      return way(a[i])
    }else {
      console.log('val:'+a[i])
    }
  }
}
way(a)

console.log(a.constructor)
console.log(way.constructor)

// 遍历
// let point = a
// while (point) {
//     console.log(point.val)
//     point = point.next
// }

//队列 先进先出 如数组
//元素 
const tree = {
    val: 'a',
    children: [
      {
        val: 'b',
        children: [
          {
            val: 'd',
            children: [
              
            ]
          },
          {
            val: 'e',
            children: [
              
            ]
          }
        ]
      },
      {
        val: 'c',
        children: [
          {
            val: 'f',
            children: [
              
            ]
          },
          {
            val: 'g',
            children: [
              
            ]
          }
        ]
      }
    ]
  }

//广度遍历
// const bfc = (root) => {
//     const q = [root]
//     const arr = []
//     const n = q.shift()
//     console.log('111',q.shift())
//     n.children.map(item => {
//        return arr.push(item)
//     })
//     console.log('新数组',arr)
//   }

//   bfc(tree)
  

