function telephoneCheck(str) {
  let length = str.match(/\d/g).length;
  if(/[^\d-()\s]/.test(str) || str[str.length-1]== ')'){return false}
  if(length==10||(length == 11 && str[0]=='1')){
    if(/[\(\)]/.test(str)){
       return /\([^\(\)]+\)/.test(str);
    }
    return true 
  }
  return false;
}
