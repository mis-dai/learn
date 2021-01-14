
//继承
function Father(name,age) {
  this.name = name
  this.age = age
}
Father.prototype.hobby = function() {
  console.info("唱歌")
}

function Son(name2) {
  Father.call(this,name2)
}
Son.prototype = new Father()
Son.prototype.constructor = Son 

var people = new Son("小敏")
console.info(people)


//new 字符
function _new(fn,...param) {
  var obj = {}
  obj._proto_ = fn.prototype
  var result = fn.call(obj,...param)
  return typeof result == 'object'?result:obj
}
 
var people2 = _new(Father,"茗")
console.info(people2)

//深拷贝
function copy(obj) {
  if( typeof obj =='object'&& obj != null){
    var result = obj.constructor == Array? []:{}
    for (i in obj) {
      result[i] = typeof obj[i] == 'object'?copy(obj[i]):obj[i]
    }
  } else{
    var result = obj
  }
  console.info(result)
  return result
}

copy([3,4,undefined,null])

//冒泡排序
function sort(arr) {
  var len = arr.length
  for(var i = 0;i<len-1; i++) {
    for(var j = 0;j<len-1-i; j++) {
      if(arr[i]>arr[i+1]) {
        var tem = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = tem
      }
    }
  }
  console.info(arr)
  return arr
}

sort([4,2,3,6,7,8])