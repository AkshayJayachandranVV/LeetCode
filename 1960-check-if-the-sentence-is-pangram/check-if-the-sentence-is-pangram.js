/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {

    let alphabets="abcdefghijklmnopqrstuvwxyz"

    let splitAlphabets=alphabets.split("")

    for(let i=0;i<splitAlphabets.length;i++){
        if(!sentence.includes(splitAlphabets[i])){
            return false
        }
    }
    return true
};