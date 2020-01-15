function rot13(str) { // LBH QVQ VG!
  let alf = '_ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let length = 26;
  return str.replace(/([A-Z])/g, function (w, letter){
     return alf[(alf.indexOf(letter)+13)%26||26]
  });
}
