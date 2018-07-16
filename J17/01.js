let moveCharacters = (str) => {
    if(str.length > 1) {
      return str.slice(5) + str.slice(0, 5);
    }
  return str;
}

console.log(moveCharacters(`Hello`));
console.log(moveCharacters(`HelloMotors `))
console.log(moveCharacters(`Dejavu`));
console.log(moveCharacters(`Assembler`));
