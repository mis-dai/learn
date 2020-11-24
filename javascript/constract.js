
//1.构造函数+原型 (组合继承)
/*
若公共方法存放在constract 里 每次创建实例的时候  都会为这个方法开创一个内存空间，浪费内存
每一个构造函数都有一个原型 prototype属性  指向一个对象，我们可以把不变的方法直接定义在prototype对象里,
这样对象的所有实例都可以共享。
  1.原型是什么？ 一个对象
  2.原型作用是什么？ 共享方法
  3.原型链 实例的_proto_指向原型对象。原型对象的_proto_指向Object, Object的_proto_指向 null 形成一条链 用于查找成员，一层一层查找
*/
// 父
function Father(x, y){
    this.x = x
    this.y = y
    /*
      this.sing = function() {
      console.log("唱歌")
    } //每次创建实例的时候 也会为方法创建内存 占内存 所以修改成如下
    */
}
  Father.prototype.dance = function() { //不会占内存 实现方法共享
    console.log("跳舞")
  }
  var father = new Father("father","fathername")
  console.log(father.dance())
  console.log('-----方法共享-------')
  

//列子：数组内扩展一个方法 求累加和
  Array.prototype.add = function() {
    var sum = 0
    for(i = 0; i < this.length; i++) {
      sum += this[i]  //原型对象和构造函数里的this 都指向实例
    }
    return sum
  }
   var arr = [1, 3, 5]
   console.log(arr.add())
  
   console.log('-----数组内增求和方法-------')

  // 子继承父属性+方法
    // 子构造函数
    function Son(uname) {
      //这里this 指向子构造函数的实例
      Father.call(this, uname) 
      //Son.prototype = Father.prototype  会有问题 如果子修改了赋值对象 父也会跟着变化
    }
    Son.prototype = new Father() //将父构造函数实例化变为子的原型对象
    Son.prototype.constructor = Son  //利用对象的形式修改原型对象，别忘了利用constructor指回原来的构造函数
    var son = new Son('红')
    console.log(son)
    son.dance()

  console.log('-----子继承父的 属性+方法-------')



// 2.es6 新增class 类   解决构造+原型
  //父类 
  class Star {
    // 类的共有属性放在constructor里,
    constructor(name) {
      this.name = name //this 指向实列
    }
    sing(song) {
        console.log(this.name+'在'+song)
    }
  }
  var ldh = new Star("小红")
  console.log(ldh.name)
  console.log(ldh.sing("绘画"))

  //子类
  class People extends Star {
    constructor(name2, age) {
      super(name2)  //super可以调用父类构造函数 也可以调用普通函数 super.函数名
      this.age = age
    }
  }
    //子
    var son = new People("son")
    console.log(son.name)

    
  console.log('----es6的class--------')
  function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {        // 相邻元素两两对比
                var temp = arr[j+1];        // 元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
            console.log(arr[j])
            
        }
        console.log("______")
    }
    console.log(arr)
    return arr;
}
bubbleSort([3,2,1,5,8,9,4])
