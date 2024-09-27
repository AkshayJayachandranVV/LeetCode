/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {

    

    let duplicate = -1,missing = -1

    for(let i=1;i<=nums.length;i++){
         let count = nums.filter(num => num==i).length
         if(count==2){
            duplicate=i
         }else if(count==0){
            missing=i
         }
    }

    return [duplicate,missing]
    
};