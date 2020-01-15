function convertToRoman(num) { 
 let res ='';   
 let nums = ['IV','XL','CD','MV']
 let length = String(num).length;
 let aver = 10**(length-1)*5;
 for (let i = length; i!=0;i--){
   let rom = Math.floor((num%10**i)/10**(i-1));
   let c = nums[i-1][0];
   let d = nums[i-1][1];
   if(rom==0){continue}
   else if(rom == 1){res += c}
   else if(rom == 2){res += c+c}
   else if(rom == 3){res += c+c+c}
   else if(rom == 4){res += c+d}
   else if(rom == 5){res += d}
   else if(rom == 6){res += d+c}
   else if(rom == 7){res += d+c+c}
   else if(rom == 8){res += d+c+c+c}
   else if(rom == 9){res += c+nums[i][0]}    
   }
    return res 
  }
