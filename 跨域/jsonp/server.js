const http = require('http')
const url = require('url')

http.createServer((req, res) => {
  const meg = "今日天气凉爽"
  // console.log(url.parse(req.url))
  var Url = url.parse(req.url,true)
  var callback = Url.query.callback
  console.log(callback)
  // res.setHeader('Content-Type','text/plain;charset=utf-8')
  // 或者用类型转换
  res.writeHeader(200,{
    "Content-Type":"text/plain;charset=utf-8"
  }) 
  // res.write(`document.write("${meg}")`) //方案一：由于数据类型转换的问题 这边填充js代码
  // res.write(`show("${meg}")`)  //方案二：为了解决方案一后续遇到各项应用 应该客户端封装一个方法，注意<script>插入执行的顺序  方法放在标签前
  res.write(`${callback}("${meg}")`) //方案三：用请求参数，将函数名传给服务器
  res.end()

}).listen(3000);

/*
方案四：每次点击按钮时动态创建<script>元素
  客户端：例：$("button").click(function(){
                //不要用$("<script>")动态创建<script>元素，因为浏览器会强行将<script>解析为标签
               //错误的写法： $("<script src="http://169.254.180.179:3000?callback=show">").append("body")     
                var scritp = document.createElement("script")
                scritp.src=`http://169.254.180.179:3000?callback=show2`
                document.body.appendChild(scritp);            
  })
  //强调不要加</script>
  //问题  每次点击都会创建<script 反复点击会导致<script堆积 
  解决：回调函数结尾：删除用过的<script>
   $("body>script:last").remove()
  
*/