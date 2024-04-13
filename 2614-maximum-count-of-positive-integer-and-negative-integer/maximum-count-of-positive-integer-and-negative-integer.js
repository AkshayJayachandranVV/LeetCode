/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    
    let negCount=0
    let posCount=0

    for(i=0;i<nums.length;i++){
        if(nums[i]<0){
            negCount++
        }

        if(nums[i]>0){
            posCount++
        }
    }

    return Math.max(negCount,posCount)
};