/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    let joinValue=digits.join("")
    console.log(joinValue)
    let finalValue=BigInt(joinValue)+1n
    return finalValue.toString().split("")


    
  
    
};