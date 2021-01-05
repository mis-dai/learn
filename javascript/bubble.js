function bubble(arr) {
  for(i = 0; i < arr.length-1; i++){
    for(j = 0; j <= arr.length - 1 - i; j++) {
      var tem = []
      if(arr[j] > arr[j+1]){
        let tem = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = tem
      }
    }
  }
  console.log(arr)
}

bubble([8,6,89,1,11,34,3])