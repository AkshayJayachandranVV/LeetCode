/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    let count=0
    
    for(let i=0;i<nums.length;i++){
        if(nums[i]==0){
            count++;
            nums.splice(i,1)
            i--

        }
       
    }
    for(let j=1;j<=count;j++){
        nums.push(0)
    }

    return nums

};