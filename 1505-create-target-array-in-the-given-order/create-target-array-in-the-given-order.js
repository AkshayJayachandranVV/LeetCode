/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    
    let array=[]
    for(let i=0;i<index.length;i++){
        array.splice(index[i],0,nums[i])
    }

    return array
    
};