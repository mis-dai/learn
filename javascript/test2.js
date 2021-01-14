
async function main() {
  let n = await new Promise(resolve => {
    return resolve("test")
  })
  let m = await new Promise(resolve => {return resolve(n+2)}) 
    
  console.log(n)
  console.log(m)
}
console.info(main())

//vue 
//8个  1.beforecreate  loading 2.created: 数据加载完成，el 未显示

//3。beforemount 

// 

function deep(arr) {
  if(typeof arr =='object' && arr !=null){
      var result = arr.constractor == Array?[]:{}
      for( i in arr) {
        result[i] = typeof arr[i] == 'object'?deep(arr[i]):arr[i]
      }
  } else {
    var result = arr
  }
  console.info(result)
  return result
}

deep([2,3,4,5])
//http缓存 分为浏览器缓存和http 缓存：强制缓存和协商缓存 cache-ctrol.expires  

//请求头： connection content-type cache-control cookie  request:set setcookie etag last-modified

//
arr.soft((data) => {
return  data[]
})