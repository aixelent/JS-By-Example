const passGenerator = (howLong) => {
  let generated = '';
  let chars = '1234567890abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ';

  for(let i = 0; i < howLong; i++) {
    generated += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return generated;
}

console.log(passGenerator(15));