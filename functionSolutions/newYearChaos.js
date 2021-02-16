// RETURN CONSOLE LOG OF BRIBES > 3 'TOO CHAOTIC' , BRIBES < 3 'MIN NUMBER OF BRIBES'

function minimumBribes(q) {
    let bribes = 0;
    let min = q.length;
    for (let i = q.length - 1; i >= 0; i--){
        if (q[i] - i > 3){
            console.log(`Too chaotic`);
            return;
        }
        if (q[i] > i+1){
            bribes += (q[i]-(i+1));
        } else {
            if (min > q[i]){
                min = q[i];
            } else if (q[i] != min){
                bribes++;
            }
        }
    }
    
    console.log(bribes);
}