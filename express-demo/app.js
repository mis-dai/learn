var express = require('express')
var bodyParser = require('body-parser')
  //1.相当于 var app = createServer() 创建实例
    var app = express() 
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
        app.use('/views',express.static('views'))
        app.use('/public/', express.static('public')) //等同于app.use('/public/', express.static('./public/'))
        app.use('/node_modules/', express.static('node_modules'))

    // 模板引擎 第一个参数为访问文件类型
        app.engine('html',require('express-art-template'))

    // 配置body-parser,编译post请求传递的数据格式
        app.use(bodyParser.urlencoded({ extended: false}))
        app.use(bodyParser.json())

    // 路由访问资源
        //（1）以get 方法请求 / 的时候
        app.get('/',(req, res) => {
          res.send(`<h2>html模板</h2>`)
        })
        app.get('/main',(req, res) => {
          res.send("测试")
        })
        app.get('/view',(req, res) => {
          res.render('view.html',{
            title: '管理系统',
            comments: comments,
          })
        })//默认在views,是个约定文件夹里找模板
        app.get('/comments',(req, res) => {
          res.render('comments.html')
        })
        //（2）以post方法请求 /view 的时候
          app.post('/comments',(req, res) => {
              var comment = req.body
              comments.push(comment)
              res.redirect('view')
          })
        // //表单为get方法提交数据时
            // app.get('/add',(req, res) => {
            //   var adds = req.query
            //   comments.push(adds)
            //   res.redirect('/view') //重定向
            // })


    // 2.监听接口
        app.listen(3000,() => {
          console.log("server is running")
        })
