const firstLastElem = (values) => {
  let last = values.length - 1;

  if(values.length >= 1) {
    return values[0] == values[last];
  }
  else if(values.length === 0) {
    return 'Nothing here';
  }
  else {
    return false;
  }
}

console.log(firstLastElem([10, 20, 30, 40, 50]));
console.log(firstLastElem([10, 20, 30, 40, 10]));
console.log(firstLastElem([]));