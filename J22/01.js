const stringVariations = (str) => {
  let temp = '';
  let arr = str.split("");

  for(let i =0; i < arr.length; i++) {
    temp = arr[i];
    console.log(temp);
    for (let j = i + 1; j < arr.length; j++) {
      temp += arr[j];
      console.log(temp);
    }
  }
}

stringVariations('dog')

