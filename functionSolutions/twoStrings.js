// COMPARE TWO STRINGS TO SEE IF THEY BOTH SHARE A SUBSTRING / LETTER

function twoStrings(s1, s2) {
    let obj1 = {};
    let obj2 = {};
    
    for(let i = 0; i < s1.length; i++){
        if(!obj1[s1[i]]){
            obj1[s1[i]] = true;
        }
    } 
    for(let j = 0; j < s2.length; j++){
        if(obj1[s2[j]] === true){
            return 'YES';
        }
    }
        return 'NO';
    }