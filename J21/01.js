const isPalindrome = (str) => {
  let strr = str.replace(/\s/g, '');
  let strrr = str.split("").reverse().join("");

  if(strr === strrr) {
    console.log(str + ' is a palindrome.');
  }
  else {
    console.log(str + ' is not palindrome.');
  }
}

isPalindrome('moar');
isPalindrome('moyom');
isPalindrome('ommo');