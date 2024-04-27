/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    
    let letters=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let splitValue=word.split("")
  
    let count=0
    let setValue=[...new Set(splitValue)]
  for(let i=0;i<setValue.length;i++){
      if(letters.includes(setValue[i])){
        console.log(setValue[i])
        let lower=setValue[i].toLowerCase()
        if(setValue.includes(lower)){
            console.log(lower)
            count++
        }
    }
  }

  return count

};