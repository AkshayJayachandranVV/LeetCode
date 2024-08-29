/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {


    for(let i=0;i<k;i++){
        let minValue = Math.min(...nums)
        let minInd = nums.indexOf(minValue)
        nums[minInd] = minValue * multiplier
    }

    return nums
};