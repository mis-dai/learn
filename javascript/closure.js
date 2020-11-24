/* 
    函数内部可以使用全局变量
    闭包  一个作用域可以访问另外一个函数的作用域

*/

    //闭包函数
    // function fn() {
    //   var num = 10;
    //   function fun() {
    //     console.log(num)
    //   }
    //   fun()
    // }
    // fn()

    //1.闭包函数
    function f1() {
      var n = 1
      return function sum(){   //正常函数每次调用后都会被清理内存，return 表示使用该函数 就不会清理
        　console.log(n++);
      } 
    }
/*相当于
      let q1 = 1;
      function f6() {
        console.info(++q1)
      }
      f6() //2
      f6() //3
*/
    f1()()
    f1()()
    f1()() //立即执行 是隔离作用域的
    console.log('__')
    var b = f1()
    b()  
    b()
    console.log('__')
    var c = f1()
    c() 
    c()
    c()  //每次调用函数都会创建一个新的内存
    console.log('______')

    //2.复杂一点的
    function f2() {
      var n = 1
      return function sum(){ //第一个 return将sum 返回 ，相同环境下的变量 n 也保留
        var m = 1;
        return function show() {  //第二个将 show 返回  相同环境下的变量 m 也保留
          console.log(++m)
          console.log('n:'+ ++n)
        }
      }
    }
    var p = f2()()
    p()
    p()
    console.log('___复杂的闭包___')


    let arr = [1,2,32,34,5,6,7,3,2]

    function between(x, y) {
      return function(v) {
          return v>x&&v<y
      }
    }
   console.log(arr.filter(between(6,34))) 
   console.log(arr.filter(between(2,34)))

   let arr2 = [
      {
        age: 19,
        score: 89
      },
      {
        age: 20,
        score: 79
      },
      {
        age: 16,
        score: 92
      },
      {
        age: 12,
        score: 67
      }
   ]
   
   function f5(filed) {
      return function(a, b) {
        return a.filed > b.filed ? 1 : -1
      }
   }
   console.table(arr2)
   console.log("___分割_______")
   
const n = 100;
const arr3 = [100,200]
arr3[0] = 20;
// arr3 = [20,10] 
console.log(arr3)
   






