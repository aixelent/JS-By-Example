const arr = [...Array(101).keys()];

const FizzBuzz = n  => n % 3 && n % 5 === 0 ? `Fizz Buzz` : n;
const Fizz = n => n % 3 === 0 ? `Fizz` : n;
const Buzz = n => n % 5 === 0 ? `Buzz` : n;

const result = arr.map(Fizz).map(Buzz).map(FizzBuzz);
console.log(result);