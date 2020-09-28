var express = require('express')

var app = express()  //1.相当于 var app = createServer() 创建实例
    var comments = [
      {
        message: '今天天气不错'
      },
      {
        message: '这个作者的文采很优秀'
      },
      {
        message: '我很喜欢这个作者写的一系列的作品'
      },
    ]
    // 公开指定目录,可以直接访问路径
    app.use('/public/', express.static('public')) //等同于app.use('/public/', express.static('./public/'))
    app.use('/node_modules/', express.static('node_modules'))
    app.engine('html',require('express-art-template'))
    // 路由访问资源
    //（1）以get 方法请求 / 的时候
    app.get('/',(req, res) => {
      res.send(`<h2>html模板</h2>`)
    })
    app.get('/main',(req, res) => {
      res.send("测试")
    })
    app.get('/views',(req, res) => {
      res.render('view.html',{
        title: '管理系统'
      })
    })//默认在views,是个约定 里找模板
    
    app.get('/comments',(req, res) => {
      res.render('view.html', {
        comments: comments
      })
    })

    // 2.监听接口
    app.listen(3000,() => {
      console.log("连接成功")
    })
