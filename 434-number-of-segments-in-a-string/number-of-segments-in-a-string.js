/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    
    if(s=="") return 0

    let splitValue=s.split(" ")
    let output=splitValue.filter((val)=>val!="")
     console.log(output)
    return output.length

};