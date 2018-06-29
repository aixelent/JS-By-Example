let two = (x, y) => {
  if(x === y) {
    return x - y;
  }
  else if(x <= y) {
    return x * y;
  }
  else {
    return 'First value is bigger than second';
  }
}

console.log(two(5, 6));
console.log(two(5, 5));
console.log(two(11, 7));