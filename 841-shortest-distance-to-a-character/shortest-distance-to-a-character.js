/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    
        let ind=[]
    let res=[]
    for(let i=0;i<s.length;i++){
        if(s[i]==c) ind.push(i)
    }
    for(let i=0;i<s.length;i++){
        let t=s.length
        for(let x of ind) t=Math.min(Math.abs(i-x),t);
        res.push(t)
    }
    return res

};