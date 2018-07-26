const powerOfTwo = val => {
  return Number.isInteger(Math.log2(val));
}

console.log(powerOfTwo(128));
console.log(powerOfTwo(32));
console.log(powerOfTwo(6));
console.log(powerOfTwo(`Andromeda`));