const oddEven = (num) => {
  if((num & 1) === 0) {
    return `Even`;
  }
    return `Odd`;
}

console.log(oddEven(12));