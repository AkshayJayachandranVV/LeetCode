/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
        if(nums.length<=1) return nums;
    const mid = Math.floor(nums.length/2);
    let left = sortArray(nums.slice(0,mid));
    let right = sortArray(nums.slice(mid));
    return mergeArray(left, right);
};

const mergeArray = (arr1, arr2)=> {
    const sortedArray = [];
    let left = 0, right = 0;
    while(left< arr1.length && right < arr2.length) {
        if(arr1[left] <  arr2[right])
        {
            sortedArray.push(arr1[left]);
            left++;
        } else {
            sortedArray.push(arr2[right]);
            right++;
        }
    }
    while(left < arr1.length) {
        sortedArray.push(arr1[left]);
        left++;
    }
    while(right < arr2.length) {
        sortedArray.push(arr2[right]);
        right++;
    }
    return sortedArray;
}