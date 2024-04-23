/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {

    let splitValue=s.split(" ")
    let output=splitValue.filter((val)=>val!="")
    return output.length

};