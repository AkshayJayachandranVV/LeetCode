/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {


  let largest = Math.max(...nums)

  let maxIndex = nums.indexOf(largest)

  console.log(maxIndex)
    

    nums.sort((a,b) => b-a)

    console.log(nums)


    for(let i=1;i<nums.length;i++){
        if(!(nums[i] * 2 <= largest)){
            return -1
        }
    }


    return maxIndex


    

  
    
};