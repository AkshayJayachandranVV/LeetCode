/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {

     let output=[]


     for(let el of words[0]){
        if(words.every((word)=>word.includes(el))){
            output.push(el)
            words=words.map((word)=>word.replace(el,""))
        }
     }
  


    return output
    
};