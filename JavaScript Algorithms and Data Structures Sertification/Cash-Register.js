function checkCashRegister(price, cash, cid) {
  if(price == cash){return {status: "CLOSED", change: cid}}
  let name =["PENNY","NICKEL","DIME","QUARTER","ONE","FIVE","TEN","TWENTY","ONE HUNDRED"];
  let val = [0.01, 0.05, 0.1, 0.25, 1, 5 ,10 ,20 ,100]
  let change = cash - price;
  if(change == cid.reduce((ac,a)=>ac+=a[1],0)){return {status: "CLOSED", change: cid}}
  let st = val.length-1;
  for (let i = 0; i < val.length; i++){
    if(val[i] > change){st = i-1;break}
  }
  let mas = []
  for(let i=0;;){
    change = Math.round(change*100)/100; 
    if(change<=0){mas.push([name[st], val[st]*i]);break;}
    if(st<0){return {status: "INSUFFICIENT_FUNDS", change: []}}
    if(cid[st][1] - val[st] >= 0 && change - val[st] >= 0){
      cid[st][1] -= val[st];
      change -= val[st];
      i++
    }else{
      if(i!=0){mas.push([name[st], val[st]*i])}
      st--;
      i=0
    }
  }
  return {status: "OPEN", change: mas};
}
