let i = 2, sum = 0;

while(i++, i < 1000) {
  sum += (i % 3 && i % 5) ? 0 : i;
}
console.log(sum);