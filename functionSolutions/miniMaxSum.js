// -- INPUTS ONLY 4 NUMBERS IN ARRAY. RETURNS MIN - MAX OF 4 ADDED

function miniMaxSum(arr) {
    arr = arr.sort((a, b) => { return a - b });
let max = arr[1] + arr[2] + arr[3] + arr[4]; 
let min = arr[0] + arr[1] + arr[2] + arr[3];
console.log(min, max);
}