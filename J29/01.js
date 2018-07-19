const subset = (arr) => {
  let subs = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      subs.push(arr[i], arr[j]);
    }
  }
  return subs;
}

console.log(subset([3, 5, 7]));