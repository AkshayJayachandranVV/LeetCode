/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

   let final=""
   let splitValue=s.split(" ")
   for(i=0;i<splitValue.length;i++){
    final+=splitValue[i].split("").reverse().join("")
    if(i!=splitValue.length-1){
        final+=" "
    }
   }
    return final
   
};