/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {

    let divide=Math.trunc(dividend /divisor )

    if(divide<2147483647){
        return divide
    }else{
        return 2147483647
    }

    
    
   
    
};