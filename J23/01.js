const longestWord = (str) => {
  let arr = str.split(' ');
  let longest = arr[0];

  for(let i = 1; i < arr.length; i++) {
    if(longest.length < arr[i].length) {
      longest = arr[i];
    }
    else {
      longest;
    }
  }
  return longest;
}

console.log(longestWord('Java Scala Golang Cobol'));