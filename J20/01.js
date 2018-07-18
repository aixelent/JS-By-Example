const reverseNum = (num) => {
  num = num.toString();
  return num.split("").reverse().join("");
}

console.log(reverseNum(6000000));