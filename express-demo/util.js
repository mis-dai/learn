/* 
   封装 操作文件里的数据 api文件
*/

  /* 
    如果需要获取一个函数中的异步操作的结果，则必须通过回调函数来获取
    函数也可以作为一个参数 
  for example :
    function fn(callback) {
        //相当于 var callback = (data) => {console.log(data)}
      setTimeout( () => {
        var datas = 'hello'
        callback(datas)
      },1000)
    }
    调用
    fn( function(data){
        console.log(data)
    })
  
  */
var dbPath = './db.json'
var fs = require('fs')

exports.findAll = (callback) => {
    fs.readFile(dbPath,'utf-8',(err, data) => {
        if(err) {
            return callback(err)
        }
        else callback(null, JSON.parse(data).comments)
    })
}

exports.add = (infor, callback) => {
    fs.readFile(dbPath, 'utf-8',(err, data) => {
        if(err) {
            return callback(err)
        }
        var comments = JSON.parse(data).comments
        comments.push(infor)
        var newData = JSON.stringify({
              comments: comments
        })
        fs.writeFile(dbPath, newData, (err) => {
            if(err) {
                return callback(err)
            }
            callback(null)
        })
    })
}