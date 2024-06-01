/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    
      let diff=0

     for(i=0;i<s.length-1 ;i++){
        let asciiValue1=s[i].charCodeAt(0)
        let asciiValue2=s[i+1].charCodeAt(0)
        diff+=Math.abs(asciiValue1-asciiValue2)
     }
     return diff

};