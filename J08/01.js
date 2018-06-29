let strReplace = (str) => {
  let f = str.slice(0,1);
  let l = str.slice(-1);

  if(str.length >= 1) {
    return str.replace(l, f).replace(f, l);
  }
  else {
    return str;
  }
}

console.log(strReplace(any));