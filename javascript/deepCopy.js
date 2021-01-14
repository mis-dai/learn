// function deepCopy(obj) {
//   //判断是否是简单数据类型，
//   if (typeof obj == "object") {
//       //复杂数据类型
//       var result = obj.constructor == Array ? [] : {};
//       for (let i in obj) {
//           result[i] = typeof obj[i] == "object" ? deepCopy(obj[i]) : obj[i];
//       }
//   } else {
//       //简单数据类型 直接 == 赋值
//       var result = obj;
//   }
//   console.info(result);
//   return result;
// }

// deepCopy([2,3])


function deepcopy(obj){
  if(typeof obj == 'object') {
    var result = obj.constructor ==Array? []:{}
    for ( let i in obj) {
      result[i] = typeof obj[i] == 'object'?deepcopy(obj[i]):obj[i]
    }
  }
  else {
    var result = obj
  }
  console.info(result)
  return result
}

deepcopy([1,2,3])
