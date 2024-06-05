/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {

     let firstWord=words[0],count,output=[]
    for(let i=0;i<firstWord.length;i++){
        count=0
           for(let j=0;j<words.length;j++){
               if(words[j].includes(firstWord[i])){
                    count++
                //   console.log(words)
               }
           }
        //    console.log(count + "" +words.length)
        if(count==words.length){
             words=words.map((word)=>word.replace(firstWord[i],""))
            output.push(firstWord[i])
        }
    }


    return output
    
};