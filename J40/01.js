const arraySum = (val) => {
  sum = val.reduce((total, num) => total + num);
  return sum;
}

console.log(arraySum([-11, 3, 7]));
console.log(arraySum([0, 30, 3]));
console.log(arraySum([6, 6, 7]));
console.log(arraySum([1, 23, 71]));
