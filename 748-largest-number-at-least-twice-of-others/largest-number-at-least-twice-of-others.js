/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {


    let largest = Math.max(...nums)

    let maxIndex = nums.indexOf(largest)

    nums.sort((a, b) => b - a)


    if (nums[1] * 2 > largest) {
        return -1
    }

    return maxIndex






};