function sumPrimes(num) {
  if(num<=1){return 0}
  if(num==2 || num==3){return num}
  let sum = 5;
  for(let i = 3;i <= num;i+=2){
    let sqrt = Math.floor(Math.sqrt(i))%2 ? Math.floor(Math.sqrt(i)) :Math.floor(Math.sqrt(i))+1;
    if(!i%2){continue}
    for(let j = 3;j<=sqrt;j+=2){
      if(i%j==0){break; }
      if(j==sqrt){sum+=i;}
    }
  }
  return sum;
}

console.log(sumPrimes());
