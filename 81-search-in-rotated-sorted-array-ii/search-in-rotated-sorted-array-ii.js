/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    
    nums.sort((a,b)=>a-b)

    let left=0
    let right=nums.length

    while(left<=right){

        let mid=Math.floor((left+right)/2)

        if(nums[mid]==target){
            return true
        }
      
       if(nums[mid]<target){
             left=mid+1
       }else{
         right=mid-1
       }

    }
  return false
    
};