/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    
    let ind=0
    for(let i=0;i<t.length;i++){
        if(s[ind]==t[i]){
            ind++
        }
    }
    if(ind==s.length){
        return true
    }else{
        return false
    }

};