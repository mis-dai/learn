    //3.块级作用域
    // let a1 = 1 
     //let 在同一个作用域下声明同个变量 会报错，在不同作用域下 就是不同的内存
    // console.log(a1)
    //for 系列特殊函数 具有块作用域的性质

    // var   //var 没有块的特性
    for (var i = 1; i <= 3; i++) {
      console.log(i)
    }
    console.log('打印：'+i) //实际改的时候是改地全局 window.i

    for(let j = 1; j <= 3; j++) {
      console.log(j)
    }                     //生成1，2，3， 4这4个块 外部访问不到
    console.log('___let 和 var for循环中的作用域___')
    //直观的应用
    for(let m1 = 1; m1 <= 3; m1++) {
      setTimeout(() => {
        console.log(m1)
      }, 1000)
    } 
    
    for(var m2 = 2; m2 <= 4; m2++) {
      setTimeout(() => {
        console.log(m2)
      }, 2000)
    }  //实际改变的全局变量m2，若要使var 具有块的作用域 可以封装在函数里形成伪块作用域， ()()


    for(var m3 = 2; m3 < 4; m3++) {
      ( (n) => {  //(function(a){ a是形参 })(传参)
        setTimeout(() => {
        console.log(n)
      }, 3000)
      } )(m3);
    }


