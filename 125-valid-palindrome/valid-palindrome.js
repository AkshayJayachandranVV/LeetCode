/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

   let avoid=s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()

   let reverse=avoid.split("").reverse().join("")

   if(avoid===reverse){
    return true
   }else{
    return false
   }
};