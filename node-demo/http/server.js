// http 的模块 创建编写服务器
var https = require('http');
var fs = require('fs');
var tp1 = require('art-template')

//创建实例
var server = https.createServer()

// 后等待客户端请求 
    //两参数 request 访问请求 和 response
server.on('request',(req,res) => {
  console.log("收到客户端请求",req.url)
  console.log("端口号",req.socket.remotePort)
  console.log("ip地址",req.socket.remoteAddress)

    // 请求统一资源位 url,所有的 url 都默认为 /
  var url = req.url
  var product = [
    {
      name: '小明',
      age: 15
    },
    {
      name: '荒野',
      age: 15
    },
  ];
  var comments = [
    {
      message: "今天天气不错"
    },
    {
      message: "我觉得这个小说作者文采不错"
    },
    {
      message:"大家可以互相认识"
    }
  ]
  // 编码类型 否则乱码
  // res.setHeader('Content-Type','text/plain;charset=utf-8')
  switch(url) {
    case '/':
      res.end('hello mis_dai')
      break;
    case '/a':
      res.write('hello a')
      res.end()
      break;
    case '/product':
      res.end(JSON.stringify(product))
      break;
    case '/view':
      fs.readFile('../views/view.html',(err, data) => {
        if(err) {
          res.end('读取失败')
          } else {
            res.setHeader('Content-Type','text/html;charset=utf-8')
            res.end(data)
        }
      })
      break;
    case '/comments': 
      fs.readFile('../views/comments.html',(err,data) =>{
        if (err) {
          res.end("无法访问")
          }
        res.writeHead(200,{'Content-Type':'text/html'})
        // 模板渲染
        res.end(tp1.render(data.toString(),{
          comments:comments
          })
        )    
      })
      break;
    case '/lib/bootstrap/dist/css/bootstrap.css':
      console.log('测试',url)
      fs.readFile('..'+ url,(err, data) => {
        if(err) {
          res.end('不存在')
        }
        res.end(data)
      })
      break;
    default :
    res.end("未知");
  }

  // write 可以使用多次 但最后一定要end结尾 否则客户端一直等待
  // res.end() //内容必须是二进制 或 字符串
})


// 先 启动服务器
server.listen(9999,() => {
  console.log("服务器成功启动")
})
