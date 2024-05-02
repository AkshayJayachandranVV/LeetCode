/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    let joinValue=digits.join("")
    console.log(joinValue)
    let finalValue=BigInt(joinValue)+1n
    let output=finalValue.toString().split("").join("")

let array=[]
    for(i=0;i<output.length;i++){
        array.push(Number(output[i]))
    }

    return array
    
  
    
};