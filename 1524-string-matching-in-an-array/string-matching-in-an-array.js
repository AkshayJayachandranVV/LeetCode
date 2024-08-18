/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {

    let array=[]

    for(let i=0;i<words.length;i++){
        let word=words[i]
        for(let j=0;j<words.length;j++){
            if(words[j].includes(word) && i!==j){
                array.push(word)
            }
        }
    }

    return [...new Set(array)]
    
};