// sample input n = 3;
// sample output (  #)
//---------------( ##)
//---------------(###)

function staircase(n) {
    let num = '#';
    for(let i = 0; i < n; i++){
        let stair = '';
        let space = ' ';
        let temp = n - (i + 1);
        while(temp !== 0){
            stair += space;
            temp--;
        }
        let tempNum = i + 1; 
        while(tempNum !== 0){
            stair += num;
            tempNum--;
        }
        console.log(stair);
    }
}