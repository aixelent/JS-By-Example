const cons_numbers = (arr, k) => {
  let res = 0;
  arr.sort((a, b) => b - a);
  if(arr.length > 1) {
    for(let i = 0; i < k; i++) {
      res += arr[i];
    }
  }
  return res;
}

console.log(cons_numbers([1, 3, 5], 2));           // 3 + 5 = 8
console.log(cons_numbers([3, 3, 3, 3, 5], 2))      // 3 + 5 = 8
console.log(cons_numbers([1, 3, 5, 7, 9, 1], 2))   // 7 + 9 = 16 
console.log(cons_numbers([1, 3, 5, 7, 9, 1], 3))   // 5 + 7 + 9 = 21
