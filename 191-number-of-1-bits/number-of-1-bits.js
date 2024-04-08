/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    
    let binaryValue=n.toString(2).split("")
    const count=binaryValue.reduce((acc,curr)=>{
        if(curr==1){
            acc+=1
        }
        return acc
    },0)

    return count

};