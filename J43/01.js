const newArray = (arr1, arr2) => {
  let newArr = [];
  newArr.push(arr1[0], arr2[arr2.length - 1]);
  return newArr;
}

console.log(newArray([1, 3, 5], [3, 5, 7]));
console.log(newArray([1, 4, 14], [13, 25, 32]));
console.log(newArray([6, 11, 20], [4, 8, 19]));
console.log(newArray([0, 1, 1], [1, 2, 0]));
console.log(newArray([4, 2, 2], [2, 2, 4]));
