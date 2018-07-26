const powerOfTwo = (val) => {
  return (Math.log(val) / Math.log(2)) % 1 === 0;
}

console.log(powerOfTwo(128));
console.log(powerOfTwo(32));
console.log(powerOfTwo(6));
console.log(powerOfTwo(`Andromeda`));