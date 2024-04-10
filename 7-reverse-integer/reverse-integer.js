/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    let nums=x.toString().split("")
    const maxInt = Math.pow(2, 31) - 1;
    const minInt = -Math.pow(2, 31);
    let isNegative = false;
    if(nums[0]=="-"){
       nums.shift()
       isNegative = true;
    }
    nums.reverse();

    let reversed = parseInt(nums.join(""), 10);


    reversed=isNegative ? -reversed:reversed

    if(reversed> maxInt || reversed<minInt){
        return 0
    }

    return reversed
    
};