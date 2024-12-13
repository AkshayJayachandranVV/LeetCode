/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    let splitValue = s.split(" ")

    const avoidSpace = splitValue.filter((val)=>val!="")

    return avoidSpace[avoidSpace.length-1].length
    
};