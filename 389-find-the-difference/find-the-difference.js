/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    
    let sArray=s.split("")
    let output=""

    for(i=0;i<t.length;i++){
        if(sArray.includes(t[i])){
            let index=sArray.indexOf(t[i])
            sArray.splice(index,1)
        }else{
             output+=t[i]
        }
    }

    return output

};