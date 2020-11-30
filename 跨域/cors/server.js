var http = require('http')

var server2 = http.createServer()
server2.on('request',(req, res) => {
  if(req.url == '/') {
      res.setHeader("Access-Control-Allow-Origin","*")
      res.setHeader('Content-Type','text/plain;charset=utf-8')
      res.write("你好")
      res.end()
  }
}).listen(7000)