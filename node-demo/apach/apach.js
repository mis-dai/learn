var fs = require('fs')
var http = require('http')
var dir = "D:/测试"

var server = http.createServer(
  (req, res) => {
    console.log(req.url)
    // // 模板
    // var people = template(`hello,{{name}}`,{
    //   name: "小红"
    // })
    // console.log(people) 

    fs.readdir(dir, (err,file) => {
      if(err) {
       return res.end("fail")
      } 
    res.setHeader('Content-Type','text/plain;charset=utf-8')
    res.end(file.toString()) 
    })   
  }
).listen(8200,() =>{ 
  console.log("success")
})
