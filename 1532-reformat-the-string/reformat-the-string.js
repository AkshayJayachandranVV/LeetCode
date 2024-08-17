/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {

    let n=l=""

    for(let i=0;i<s.length;i++){
        if(isNaN(s[i])) l+=s[i]
        else
            n+=s[i]
    }

    if(n.length - l.length > 1 || l.length - n.length >1 ) return ""

    let res=""

    for(let i=0;i<s.length/2;i++){
        if(n.length >= l.length){
            res+=n[i] + (l[i] || "")
        }else{
            res+=l[i] + (n[i] || "")
        }
    }

    return res
    
};