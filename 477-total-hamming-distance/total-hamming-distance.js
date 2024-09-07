/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
   
   let n=nums.length, ans = 0

   for(let i=0;i<32;i++){
       let ones = 0, zeroes = 0
       for(let k=0;k<n;k++){
        ((nums[k]>>i)&1) ? ones++:zeroes++
       }
       ans += ones * zeroes
   }

   return ans

};