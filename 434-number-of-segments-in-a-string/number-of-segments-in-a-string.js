/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {

    let splitValue=s.split(" ")
    return output=splitValue.filter((val)=>val!="").length

};