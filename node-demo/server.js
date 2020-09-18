'use strict';
var greet1 = require('./index')
var http = require("http")

var s = "xiaohong"
greet1(s)
http.createServer(
  function(requset,response) {
    console.log("ceshi")
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello mis_dai");
    response.end()
  }
).listen(9999)

