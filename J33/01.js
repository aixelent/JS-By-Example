const largestValue = (a, b, c, d) => {
  if(a > b && a > c && a > d) {
    return a;
  }
  if(b > a && b > c && b > d) {
    return b;
  }
  if(c > a && c > b && c > d) {
    return c;
  }
  else {
    return d;
  }
}

console.log(largestValue(-21, -25, -29, -13));