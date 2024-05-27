/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {

 nums.sort((a, b) => a - b); 

   for(let i=0;i<nums.length;i++){
    count=nums.length-i
    if(nums[i]>=count){
        if(i==0 || nums[i-1]<count) {
            return count
        }
           }
   }

   return -1

  

   
    
};