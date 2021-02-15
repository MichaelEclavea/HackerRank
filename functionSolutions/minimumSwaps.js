// RETURNS SWAP COUNT 

function minimumSwaps(arr) {
    let swapCount = 0;
    for(let i = 0; i < arr.length; i++){
        if(i + 1 !== arr[i]){
            let t = i;
            while(arr[t] !== i+1){
                t++;
            }
            let temp = arr[t];
            arr[t] = arr[i];
            arr[i] = temp;
            swapCount++;
        }
    }
    return swapCount;
}