/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {

    let vowels = ['a', 'e', 'i', 'o','u','A','E','I','O','U']

    let append = "ma"

    let str = ""

    let splitValue = sentence.split(" ")

    for(let i=0;i<splitValue.length;i++){
        append+= "a"
        if(vowels.includes(splitValue[i][0])){
            let value = splitValue[i].split("")
            value.push(append)
            value=value.join("")
            str+=value
        }else{
            let firstLetter = splitValue[i][0]
            let value = splitValue[i].split("").splice(1,splitValue[i].length)
            value.push(firstLetter)
            value.push(append)
            value=value.join("")
            str+=value
        }

        if (i < splitValue.length - 1) {
            str += " "; // Add space between words except for the last word
        }
    }

    return str
    
};