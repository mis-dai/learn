var http = require('http')

http.createServer((req, res) => {
  var meg = "今日天气凉爽"
  // res.setHeader('Content-Type','text/plain;charset=utf-8')
  // 或者用类型转换
  res.writeHeader(200,{
    "Content-Type":"text/plain;charset=utf-8"
  }) 
  // res.write(`document.write("${meg}")`) //方案1：由于数据类型转换的问题 这边填充js代码
  res.write(`show("${meg}")`)  //方案二：为了解决方案一后续遇到各项应用 应该客户端封装一个方法，注意<script>插入执行的顺序  方法放在标签前
  res.end()

}).listen(3000);
