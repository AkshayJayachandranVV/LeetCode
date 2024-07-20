/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {

    let count=0,answer=0
    
    for(let i=0;i<s.length;i++){
        if(s[i]=="L"){
          count++
        }
        if(s[i]=="R"){
            count--
        }
        if(count==0){
            answer++
        }
    }

    return answer
    
};