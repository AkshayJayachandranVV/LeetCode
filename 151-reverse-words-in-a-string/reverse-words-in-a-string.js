/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

    let splitValue=s.split(" "),output=[]

    for(let i=0,j=splitValue.length-1;i<j;i++,j--){
        let temp=splitValue[i]
        splitValue[i]=splitValue[j]
        splitValue[j]=temp
    }

    for(let k=0;k<splitValue.length;k++){
        if(splitValue[k]!=="")
        output.push(splitValue[k])
    }
    return output.join(" ")
    
};