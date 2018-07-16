let vowelCount = (str) => {
  let vowelCount = 0;

  for(let i = 0; i <= str.length - 1; i++) {
    if(str.charAt(i) === 'a' || str.charAt(i) === 'A' || str.charAt(i) === 'e' || str.charAt(i) === 'e' || str.charAt(i) === 'i' || str.charAt(i) === 'I' || str.charAt(i) === 'o' || str.charAt(i) === 'O' || str.charAt(i) === 'u' || str.charAt(i) === 'U') {
      vowelCount += 1;
    }
  }
  return vowelCount;
}

console.log('Vowels: ');
console.log(vowelCount(`This is a vOwel strIng counter`));