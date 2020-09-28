1、文件加载可以省略 './'
  fs.readFile('app.js')

  非核心模块或者第三方插件，模块加载文件不可以省略 './'
  如 require('./)

2、使用第三方命令行工具nodemon实现修改完代码后 自动重启服务器 
  node xxx.js 改为 nodemon xxx.js

3、若要修改模板约定的指定views 目录，则可以使用
  xx.set('views',要修改的目录路径)