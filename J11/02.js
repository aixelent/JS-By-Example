let strReverse = (str) => {
  let result = ``;
  for(let i = str.length; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

console.log(strReverse(`cosmo`));
