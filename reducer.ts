const defaultValue = {
  list: [
    "数据测试1",
    "数据测试2",
    "数据测试3",
    "数据测试4"
  ],
  input: ''
}
export default (state = defaultValue, action:any) =>{
  console.log(state, action)

  if(action.type === 'changeItem'){
    // reducer 只接受值
    let newData = JSON.parse(JSON.stringify(state))
    newData.inputValue = action.value
    newData.list.push(newData.inputValue)
    return newData
  }

  if(action.type === 'delete') {
    state.list.splice(action.value,1)
    return state
  }

  if(action.type === 'input_value') {
    let newInput = JSON.parse(JSON.stringify(state))
    newInput.input = action.value
    return newInput
  }


  return state
}