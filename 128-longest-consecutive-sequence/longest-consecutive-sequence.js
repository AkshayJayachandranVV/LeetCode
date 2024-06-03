/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(!nums.length) return 0;
    
    nums=new Set(nums)
    nums = Array.from(nums);
    nums.sort((a,b)=>a-b)
    let count=1,maxCount=0

    for(let i=0;i<nums.length;i++){
        console.log(nums[i+1] , nums[i])
        let diff=nums[i+1]-nums[i]
        if(diff==1){
            count++
        }else{
            if(maxCount<count){
                maxCount=count
            }
            count=1
        }
    }
    return maxCount
};