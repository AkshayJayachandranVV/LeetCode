/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if(t.length!==s.length) return false
    
    let tSplit=t.split("")

    for(let i=0;i<s.length;i++){
        if(tSplit.includes(s[i])){
            let index=tSplit.indexOf(s[i])
            tSplit.splice(index,1)
        }
    }

    if(tSplit.length>0){
        return false
    }else{
        return true
    }
       

    

};