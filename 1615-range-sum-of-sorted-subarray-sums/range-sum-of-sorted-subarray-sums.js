/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {

      let subarraySum = [];
    
    // Calculate sum of subarrays
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            subarraySum.push(sum);
        }
    }
    
    // Sort the subarray sums
    subarraySum.sort((a, b) => a - b);
    
    // Calculate the result
    let result = 0;
    const mod = 1e9 + 7;
    for (let i = left - 1; i < right; i++) {
        result = (result + subarraySum[i]) % mod;
    }
    
    return result;
    
};