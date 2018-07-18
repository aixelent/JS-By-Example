let capitalizeFirstLetter = (str) => {
  let oldArr = str.split(" ");
  let newArr = [];
  oldArr.forEach(word => {
    newArr.push(word[0].toUpperCase() + word.slice(1));
  });
  return newArr.join(" ");
}

console.log(capitalizeFirstLetter(`learning multiple languages vs. mastering one`));