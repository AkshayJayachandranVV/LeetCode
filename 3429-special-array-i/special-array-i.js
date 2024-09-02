/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {

    for(let i=0;i<nums.length-1;i++){
        let sum = nums[i] + nums[i+1]
        if(sum%2!==1){
            return false
        }
    }

    return true
    
};