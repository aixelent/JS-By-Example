let firstCase = (str) => {
  if(str.length <= 1) {
    return str.toUpperCase();
  }
  else {
    let firstUp = str.substring(0, 1).toUpperCase();
    let other = str.substring(1, str.length);
    return firstUp + other;
  }
}

console.log(firstCase(`bADGER! BADGER! BADGER!`));
