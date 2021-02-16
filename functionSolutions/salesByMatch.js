// RETURN SOCK COUNT ARRAY, TOTAL PAIRS

function sockMerchant(n, ar) {
    let pair = {};   
    let total = 0; 
      for(let i = 0; i < ar.length; i++) {
          if(!pair[ar[i]]){ // ------- IF PAIR DOESN'T EXIST / ADD
            pair[ar[i]] = 1; 
          } else { //--------------- IF PAIR DOES EXIST / ++ 
            pair[ar[i]]++;
            if(pair[ar[i]] % 2 === 0){ //-------- IF PAIR / 2 = 0 / TOTAL++
                total++;
            }
          }
      }
      return total; 
  }