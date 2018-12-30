const longestWord = (arr) => {
  let map = arr.map(x => x.length);
  let max = map.indexOf(Math.max(...map));

  return arr[max];
}

// longest: imagination
console.log(longestWord(["imagination", "word", "turtles", "ninja", "dub techno"]));