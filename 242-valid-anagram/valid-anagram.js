/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if(t.length!==s.length) return false

    let sCount={}
    let tCount={}
    
    for(let i=0;i<s.length;i++){
        if(s[i] in sCount){
            sCount[s[i]]++
        }else{
            sCount[s[i]]=1
        }

        if(t[i] in tCount){
            tCount[t[i]]++
        }else{
            tCount[t[i]]=1
        }
    }

    for(let i in sCount){
        if(sCount[i]!==tCount[i]) return false
    }
   return true
};