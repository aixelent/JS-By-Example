// Can't generate square output because console.log inserts new lines :'(
function matrix(n) {
  let i, j;

  for(i = 0; i < n; i ++) {
    for(j = 0; j < n; j++) {
      if(i === j) {
        console.log((Math.round(Math.random())));
      }
    }
  }
}

console.log(matrix(20));