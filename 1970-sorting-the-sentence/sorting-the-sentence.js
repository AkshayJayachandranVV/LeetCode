/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let array=[]
    let splitValue=s.split(" ")
    for(let i=0;i<splitValue.length;i++){
        let val=splitValue[i].slice(0,-1) 
        let pos=splitValue[i].slice(-1) 
        array[pos-1]=val
    }
    return array.join(" ")

};