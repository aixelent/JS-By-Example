// first possibility
function four(x, y) {
  if(x === y) {
    return (x + y) * 4;
  }
  else {
    return x + y;
  }
}

console.log(four(5, 6));
console.log(four(5, 5));

// second possibility
let two = (x, y) => {
  if(x === y) {
    return (x + y) * 4;
  }
  else {
    return x + y;
  }
}

console.log(two(5, 6));
console.log(two(5, 5))