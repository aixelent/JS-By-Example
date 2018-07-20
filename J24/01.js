const isPrime = (num) => {
  for(let i = 2; i <= Math.ceil(num / 2); i++) {
    if(num % i === 0) {
      return `Not a prime`;
    }
  }
  return `Prime`;
}

console.log(isPrime(41));