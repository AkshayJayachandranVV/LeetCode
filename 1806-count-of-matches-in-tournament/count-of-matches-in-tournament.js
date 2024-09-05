/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {

let total = 0

    while(n > 1){
        if(n%2==0){
            let match = Math.floor(n/2)
            let advance = Math.floor(n/2)
            n = advance
            total += match
        }else{
            let match = Math.floor((n-1)/2)
            let advance = Math.floor((n-1)/2) + 1
            n = advance
            total += match
        }
    }

    return total
    
};