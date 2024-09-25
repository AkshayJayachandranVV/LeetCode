/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

let res

 for(let i=0;i<=nums.length;i++){
    if(!nums.includes(i)){
        res=i
    }
 }

return res
   
    
};