/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    let sign = x.toString().split("")

    if(sign[0] == "-" || sign[0] == "+"){
        return false
    }

   if(x == x.toString().split("").reverse().join("")){
    return true
   }else{
    return false
   }

};