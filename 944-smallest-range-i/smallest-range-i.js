/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function (nums, k) {

   let min=Math.min(...nums)
   let max=Math.max(...nums)

   let newMin=min+k
   let newMax=max-k

   let result=newMax-newMin

   return Math.max(0,result)

};