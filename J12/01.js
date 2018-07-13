let replaceChar = (str) => {
  let newString = ``;
  
  for(let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    let char = String.fromCharCode(code + 1);
    newString += char;
  }
  return newString;
}

console.log(replaceChar(`Sunny`));