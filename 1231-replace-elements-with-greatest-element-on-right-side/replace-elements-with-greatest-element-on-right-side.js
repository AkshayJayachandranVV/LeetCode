/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {

    let array = new Array(arr.length)
    let maxVal = -1

    for(let i=arr.length-1;i>=0;i--){
        array[i] = maxVal
        maxVal = Math.max(arr[i],maxVal)
    }
    return array
};