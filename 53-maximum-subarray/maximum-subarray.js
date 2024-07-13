/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
 

    // To store the maximum subarray sum found so far
    let maxSoFar = nums[0];
    // To store the sum of the current subarray
    let currentMax = nums[0];

    // Iterate through the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        // Update the current subarray sum: either start a new subarray at the current element,
        // or extend the existing subarray to include the current element
        currentMax = Math.max(nums[i], currentMax + nums[i]);
        
        // Update the maximum subarray sum found so far
        maxSoFar = Math.max(maxSoFar, currentMax);
    }

    // Return the maximum subarray sum
    return maxSoFar;





};