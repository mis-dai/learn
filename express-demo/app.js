var express = require('express')
var bodyParser = require('body-parser')
var router = require('./router')

  //1.相当于 var app = createServer() 创建实例
    var app = express();
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
        // app.use('/views',express.static('views'))
        app.use('/public/', express.static('public')) //等同于app.use('/public/', express.static('./public/'))
        app.use('/node_modules/', express.static('node_modules'))

    // 模板引擎 第一个参数为访问文件类型  要在挂载之前（router）
        app.engine('html',require('express-art-template'))
    // 配置body-parser,编译post请求传递的数据格式 要在挂载之前（router）
        app.use(bodyParser.urlencoded({ extended: true }))
        app.use(bodyParser.json())

    // 路由配置
        app.use(router)

    // 2.监听接口
        app.listen(3000,() => {
          console.log("server is running")
        })
