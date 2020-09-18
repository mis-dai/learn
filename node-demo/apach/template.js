var tp1 = require('art-template')
var fs = require('fs')

var people = tp1.render('hello,{{name}}',{
  name: '小绿'
})
console.log(people)

var m = fs.readFile("./temp.html",(err, data) => {
    if(err) {
      console.log("获取失败")
    } else {
      var people2 = tp1.render(data.toString(), {
      name : '测试',
      age: 18,
      hobby: '看书'
    })
      console.log(people2)
  }

})
module.exports = {
  people,
  m
}