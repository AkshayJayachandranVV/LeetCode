/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {

   const spaces = text.replace(/[^\s]/g,'').length
   console.log(spaces)
   const words = text.trim().split(/ +/);
   console.log(words)
   const n = words.length - 1

   if(!n) return words[0] + (" ").repeat(spaces)
    return words.join((" ").repeat(spaces / n)) + (" ").repeat(spaces % n);
    
};