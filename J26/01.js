const letterOccur = (str) => {
  for(let char of str) {
    let arr = str.split(char).length - 1;
    console.log(`'` + char + `': ` + arr);
  }
}

console.log(letterOccur(`Superordinate`))