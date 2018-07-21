const rangeNum = (x, y) => {
  let result = [];
  for(let i = x + 1; i < y; i++) {
    result.push(i);
  }
  return result.join();
}

console.log(rangeNum(2, 8));