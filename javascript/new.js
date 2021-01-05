function _new (ctor, ...parms) {
  let obj ={} //创建对象
  obj.__proto__ = ctor.prototype //实例的原型绑定在构造函数的原型
  var result =ctor.call(obj,...parms)
  return typeof(result) =="object"? result: obj
}

function cons(name) {
  this.name = name
}

cons.prototype.age = 28

var person = _new(cons,"小蓝")
console.info(person.name)
console.info(person.age)