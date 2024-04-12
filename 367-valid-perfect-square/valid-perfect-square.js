/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    
    for(i=1;i<=Math.sqrt(num);i++){
        if(i*i==num){
            return true
        }
    }

    return false

};