// INPUT IS 3 ITEMS IN ARRAY
// OUTPUT IS CONSOLE.LOGS

function plusMinus(arr) {
    let total = arr.length; 
    let pos = 0; 
    let neg = 0; 
    let zero = 0; 
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            zero += 1; 
        }
        if(arr[i] > 0){
            pos += 1; 
        }
        if(arr[i] < 0){
            neg += 1; 
        }
    }
    let posAns = (pos / total).toFixed(6);
    let negAns = (neg / total).toFixed(6);
    let zeroAns = (zero / total).toFixed(6); 
   
    console.log(+posAns);
    console.log(+negAns);
    console.log(+zeroAns);
}