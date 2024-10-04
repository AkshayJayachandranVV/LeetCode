/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {

   let prevCount=0
   let currCount=1
   let totalCount = 0

   for(let i=1;i<s.length;i++){
       if(s[i]==s[i-1]){
        currCount++
       }else{
            totalCount+=Math.min(prevCount,currCount)
            prevCount=currCount
            currCount=1
       }
   }

   totalCount+=Math.min(prevCount,currCount)

   return totalCount 
    
};