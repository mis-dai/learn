function Father(name, age) {
  this.name = name,
  this.age = age
}
 Father.prototype.info = function () {
   console.log(this.name)
 }
 let People = new Father("父亲")
 People.info()

 function Son(name2) {
   Father.call(this, name2)
 }
 Son.prototype = new Father()
 Son.prototype.constructor = Son

 let son = new Son("小男孩")
 console.log(son)
 son.info()
console.info('_____继承______')