const rangeNum = (x,y) => {
  x++;
  if(x === y - 1) {
    return [x];
  }
  return [x].concat(rangeNum(x, y));
}

console.log(rangeNum(2, 8));