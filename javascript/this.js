var name = "golbal"
var main ={
    name: 'main',
    fn1: function() {setTimeout(function (){
        console.log(this.name)
        })
    },
    fn2: function(){
        setTimeout(() => {
            console.log(this.name)   //setTimeout 只是调用  () => {} 是在fn2里这个方法里声明
        })
    }
}

main.fn1()
main.fn2()



/**
 * 无调用者指向全局 window  严格模式下为undefine 
 * 简单的就是函数写成对象形式 因为普通函数 this 指向它的调用者
 */


/**
 * 法1
 * （“箭头函数中没有 this 绑定，必须通过查找作用域链来决定其值，如果箭头函数被非箭头函数包含，则 this 绑定的是最近一层非箭头函数的 this，否则，this 为 undefined”。）
 * 箭头函数 里的this 箭头函数的 this 始终指向函数定义时的 this，而非执行时
 */

/**
 * 法2 在函数里使用_this = this   表示调用这个函数的对象保存在变量 _this 
 */

/**
 * 法3 构造函数 this指向该实例
 */

/**
 * call  apply
 */

