// RETURN MAXIMUM TOYS THAT CAN BE BOUGHT WITH AMOUNT(K)

function maximumToys(prices, k) {
    var bought = 0;
    var pricings = prices.sort((a, b) => a - b)
    var amtLeft = k;
    
    for (var i = 0; i < pricings.length; i++){
        if (amtLeft < pricings[i]) {
            break;
        } else {
            amtLeft = amtLeft - pricings[i];
            bought++;
        }
    }
    return bought;
}