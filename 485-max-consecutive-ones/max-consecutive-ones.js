/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let maxIndex = 0, count = 0, countStore = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            count++
        } else {
            count = 0
        }

        if (count > countStore) {
            countStore = count
        }
    }

    return countStore

};