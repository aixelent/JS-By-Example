const longestWord = (str) => {
  let arr = str.split(' ');

  let longest = '';
  arr.forEach(function(word) {
    if(word.length > longest.length) {
      longest = word;
    }
  });
  return longest;
}

console.log(longestWord('Java Scala Golang Cobol'))