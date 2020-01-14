function smallestCommons(arr) {
 function sc (a,b){
    let[x,y]=[a,b]
    for(;;){
      if(a == 0 || b == 0){return x*y/(a+b);}
      if (a > b){a = a % b}
      else{b = b % a}
    }
  }
  arr = arr.sort((a,b)=>a-b);
  let mult = 1;
  for(let i = arr[0];i<=arr[1];i++){
    mult = sc(mult,i)
  }
  return mult
}


