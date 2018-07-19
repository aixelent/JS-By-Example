// With special characters
const passGenerator = (howLong) => {
  let generated = '';
  let chars = '1234567890abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ';
  let specialChar = '!@#$%^&*()_-+=[{]}\|;:,<.>/?"';

  for(let i = 0; i < howLong; i++) {
    generated += chars.charAt(Math.floor(Math.random() * chars.length)) + specialChar.charAt(Math.floor((Math.random() * specialChar.length)));
  }
  return generated;
}

console.log(passGenerator(15));