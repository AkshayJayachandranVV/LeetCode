/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

   let values = s.split(" ")

   let avoidEmpty = values.filter((val)=>val!="")

   return avoidEmpty[avoidEmpty.length-1].length
    
};