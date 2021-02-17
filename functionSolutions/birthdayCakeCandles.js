// RETURNS MAX NUMBER OF THE LARGEST CANDLES ON THE CAKE. SIZE RANGES FROM 1 - 4.

function birthdayCakeCandles(candles) {
    let max = 0; 
    let count = 0; 
    for(let i = 0; i < candles.length; i++){
        if(candles[i] > max){
            max = candles[i];
            count = 0; 
        } if(candles[i] === max){
            count += 1; 
        }
    }
    return count;
}