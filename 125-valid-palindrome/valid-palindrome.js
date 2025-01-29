/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    let replaced = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()

    let rev = replaced.split("").reverse().join("")

    if(replaced == rev){
        return true
    }else{
        return false
    }

};