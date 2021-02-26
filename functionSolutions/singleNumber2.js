var singleNumber = function(nums) {
    let obj = {};
    for(let i = 0; i < nums.length; i++){
        if(!obj[nums[i]]){
            obj[nums[i]] = 1; 
        }else {
            obj[nums[i]] += 1; 
        }
    }
    for(const num in obj){
        if(obj[num] === 1){
            return num;
        }
    }
};