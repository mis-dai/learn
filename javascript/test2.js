
async function main() {
  let n = await new Promise(resolve => {
    return resolve("test")
  })
  let m = await new Promise(resolve => {return resolve(n+2)}) 
    
  console.log(n)
  console.log(m)
}
console.info(main())


