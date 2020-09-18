
//fs是 file-system的简写 引入fs 可以进行对文件的操作
var fs = require("fs");

function copy(src,dst) {
  fs.writeFileSync(dst,fs.readFileSync(src))
}

module.exports = copy;  //返回当前对象
// exports.copy = copy  //返回当前对象的属性
