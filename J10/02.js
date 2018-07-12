let firstCase = (str) => {
  return (str.length <= 1) ? str.substring(0, 1).toUpperCase() + str.substring(1) : str.toUpperCase();
}

console.log(firstCase(`bADGER! BADGER! BADGER!`))