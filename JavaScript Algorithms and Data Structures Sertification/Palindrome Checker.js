function palindrome(str) {
  str  = str.toLowerCase().match(/[a-z0-9]+/gi)
  return str.join('').split('').reverse().join('') == str.join('') ;
}
