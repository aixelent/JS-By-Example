const val_replace = (arr, n, o) => {
  for (let i = 0; i < arr.length; i++) {
     let index = arr.indexOf(n, i)

     if (index === -1 || n === o) break;
     arr[index] = o;
  }
  return arr;
}

arr = [1, 3, 4, 4, 5, 4, 3, 4, 7];
console.log(val_replace(arr, 4, 9));