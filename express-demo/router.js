var fs = require('fs')
var express = require('express')
var router = express.Router()
var util = require('./util.js')
// 路由访问资源
    //（1）以get 方法请求 / 的时候
    router.get('/',(req, res) => {
        res.send(`<h1>hello</h1>`)
    })
    router.get('/main',(req, res) => {
        res.send("测试")
    })
    router.get('/view',(req, res) => {
      // 未封装的写法
      // fs.readFile('./db.json', 'utf-8', (err, data) => {
      //   if(err) {
      //       return res.status(500).send('server err')
      //     } else {
      //         res.render('view.html',{
      //           title: '管理系统',
      //           comments: JSON.parse(data).comments,
      //       })
      //     }
      //   })
        util.findAll((err, datas) => {
            if (err) {
                return res.status(500).send(err)
            }
            res.render('view.html',{
                title: '管理系统',
                comments: datas,
            })
        })
    })
    //默认在views,是个约定文件夹里找模板
    router.get('/comments',(req, res) => {
        res.render('comments.html')
    })
    //（2）以post方法请求 /view 的时候
    router.post('/comments',(req, res) => {
        var comment = req.body //1.获取表单数据
        util.add(comment, (err) => {
            if(err) {
                return res.status(500).send(err)
            }
            res.redirect('view')
        })
    })
      //表单为get方法提交数据时
      // app.get('/add',(req, res) => {
      //   var adds = req.query
      //   comments.push(adds)
      //   res.redirect('/view') //重定向
      // })
      module.exports = router