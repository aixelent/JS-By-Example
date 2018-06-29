let two = (str) => {
  if(str === undefined || str.substring(0, 1) === 'X' || str.substring(0, 1) === 'x') {
    return str;
  }
  else {
    return 'X' + str;
  }
}

console.log(two('xcited'));
console.log(two('excited')); 