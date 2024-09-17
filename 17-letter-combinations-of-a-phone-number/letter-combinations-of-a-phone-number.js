/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    
    if(!digits.length) return []

        const digitToLetters = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    let array=[]


    function backTrack(idx,comb){
        if(idx == digits.length){
            array.push(comb)
            return
        }


        for (let letter of digitToLetters[digits[idx]]){
            backTrack(idx + 1,comb + letter)
        }
    }

    backTrack(0,"")
    return array



};