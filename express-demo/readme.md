1.文件加载可以省略 './'
  fs.readFile('app.js')

  非核心模块或者第三方插件，模块加载文件不可以省略 './'
  如 require('./)

2.使用第三方命令行工具nodemon实现修改完代码后 自动重启服务器 
  node xxx.js 改为 nodemon xxx.js

3.若要修改模板约定的指定views 目录，则可以使用
  xx/实列.set('views',要修改的目录路径)

4. res.query只能读取get 方法的请求传递的数据。在express中没有内置获取表单 post 请求体的API，借助第三方插件 body-parser
//加入这个配置后 在req请求里多一个 body 的参数 res.body