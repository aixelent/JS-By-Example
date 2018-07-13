let replaceChar = (char) => {
  switch(char) {
    case '': 
      break;
    case 'z': 
      char = 'a'
    case 'z':
      char = 'A';
      break;
    default:
      char = String.fromCharCode(char.charCodeAt() + 1);
  }
  return char;
}

let charChanger = (str) => {
  return str.split("").map(replaceChar).join("");
}

console.log(charChanger(`Sunny`));