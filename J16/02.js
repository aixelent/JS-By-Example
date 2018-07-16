let vowelCount = (str) => {
  return str.match(/[aAeEiIoOuU]/gi).length;
}

console.log('Vowels: ');
console.log(vowelCount(`This is a vOwel strIng counter`));