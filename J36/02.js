const binToDec = (bin) => {
  return parseInt(bin + '', 2).toString(10);
}

console.log(binToDec(1100));
console.log(binToDec(1010));
console.log(binToDec(1011));
